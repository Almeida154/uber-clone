import React, { useState, useEffect, useRef } from 'react';

import { View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { map as mapStyle } from '../../styles';

import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import { getPixelSize } from '../../helpers';
import Config from '../../config';

import Search from '../Search';
import Direction from '../Direction';
import Details from '../Details';

import marker from '../../assets/png/marker.png';
import backArrow from '../../assets/png/back.png';

import {
    LocationBox,
    LocationText,
    LocationTimeBox,
    LocationTimeText,
    LocationTimeTextSmall,
    BackButton
} from './styles';

Geocoder.init(Config.API_KEY);

export default function index({ navigation }) {

    const [region, setRegion] = useState({latitude: 0, longitude: 0});
    const [destination, setDestination] = useState(null);
    const [duration, setDuration] = useState(null);
    const [location, setLocation] = useState('');
    const mapElement = useRef(null);

    useEffect(() => {
        Geolocation.getCurrentPosition(
            async position => {
                const res = await Geocoder.from(
                    position.coords.latitude,
                    position.coords.longitude
                );
                const address = res.results[0].formatted_address;
                const location = address.substring(0, address.indexOf(','))
                setLocation(location);
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

    const handleLocationSelected = (data, { geometry }) => {
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
                    top: getPixelSize(45),
                    bottom: getPixelSize(45 + 75),
                    left: getPixelSize(45),
                    right: getPixelSize(45)
                }
            });
        }, 100);
    }

    const handleBack = () => {
        setDestination(null);
        navigation.navigate('Home');
    }

    return (
        <View style={{ flex: 1,  width: '100%', height: '100%', position: 'relative' }}>
            <MapView
                style={{ flex: 1, width: '100%', position: 'absolute', bottom: -40, top: -100 }}
                region={{
                    latitude: parseFloat(region.latitude),
                    longitude: parseFloat(region.longitude),
                    latitudeDelta: 0.0143,
                    longitudeDelta: 0.0134
                }}
                showsUserLocation
                loadingEnabled
                customMapStyle={mapStyle}
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
                            <LocationText>{location}</LocationText>
                        </LocationBox>
                    </Marker>

                    <Marker
                        coordinate={destination}
                        anchor={{ x: 0, y: 0 }}
                        image={marker} />

                </> }
            </MapView>

            { destination
                ? <>
                    <Details />
                    <BackButton onPress={handleBack}>
                        <Image source={backArrow} />
                    </BackButton>
                </>
                : <Search onLocationSelected={ handleLocationSelected } /> }
        </View>
    );
}
