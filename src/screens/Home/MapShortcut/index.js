import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { map as mapStyle } from '../../../styles';

import {
    Container,
    MapContainer,
    Title
} from './styles';

const MapShortcut = ({ onPress }) => {

    const [region, setRegion] = useState({ latitude: 0, longitude: 0 });
    
    useEffect(() => {
        Geolocation.getCurrentPosition(
            async position => {
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

    return (
        <Container>
            <Title>Perto de você</Title>
            <MapContainer>
                <MapView
                    onPress={() => onPress()}
                    style={{
                        borderRadius: 22,
                        flex: 1,
                        width: '100%'
                    }}
                    region={{
                        latitude: parseFloat(region.latitude),
                        longitude: parseFloat(region.longitude),
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134
                    }}
                    zoomEnabled={false}
                    zoomControlEnabled={false}
                    scrollEnabled={false}
                    showsUserLocation
                    loadingEnabled
                    customMapStyle={mapStyle}
                />
            </MapContainer>
        </Container>
    );
}

export default MapShortcut;