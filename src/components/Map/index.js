import React, { useState, useEffect, useRef } from 'react';

import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';
import { getPixelSize } from '../../helpers';

import Search from '../Search';
import Direction from '../Direction';

import marker from '../../assets/png/marker.png';

import {
    LocationBox,
    LocationText,
    LocationTimeBox,
    LocationTimeText,
    LocationTimeTextSmall
} from './styles';

export default function index() {

    const [region, setRegion] = useState({latitude: 0, longitude: 0});
    const [destination, setDestination] = useState(null);
    const [duration, setDuration] = useState(null);
    const mapElement = useRef(null);

    useEffect(() => {
        Geolocation.getCurrentPosition(
            position => {
                setRegion({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            }, // Success
            error => {
                console.log('error: ' + error.message);
            }, // Error
            {
                timeout: 60000,
                enableHighAccuracy: false,
                maximumAge: 1000
            }
        );
    }, []);

    handleLocationSelected = (data, { geometry }) => {
        const { location: { lat: latitude, lng: longitude } } = geometry;
        setDestination({
            latitude,
            longitude,
            title: data.structured_formatting.main_text,
        });
    }

    const handleRezise = result => {
        setDuration(Math.floor(result.duration));
        setTimeout(() => {
            mapElement.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                    top: getPixelSize(50),
                    bottom: getPixelSize(50),
                    left: getPixelSize(50),
                    right: getPixelSize(50)
                }
            });
        }, 100);
    }

    return (
        <View style={{ flex: 1,  width: '100%' }}>
            <MapView
                style={{ flex: 1, width: '100%' }}
                region={{
                    latitude: parseFloat(region.latitude),
                    longitude: parseFloat(region.longitude),
                    latitudeDelta: 0.0143,
                    longitudeDelta: 0.0134
                }}
                showsUserLocation
                loadingEnabled
                ref={mapElement} >
                
                { destination && <>
                    <Direction
                        origin={region}
                        destination={destination}
                        onReady={result => handleRezise(result)} />

                    <Marker coordinate={region}>
                        <LocationBox>
                            <LocationTimeBox>
                                <LocationTimeText>{duration}</LocationTimeText>
                                <LocationTimeTextSmall>MIN</LocationTimeTextSmall>
                            </LocationTimeBox>
                            <LocationText>R. Osório Franco</LocationText>
                        </LocationBox>
                    </Marker>

                    <Marker
                        coordinate={destination}
                        anchor={{ x: 0, y: 0 }}
                        image={marker} />

                </> }
            </MapView>

            <Search onLocationSelected={ handleLocationSelected } />
        </View>
    );
}
