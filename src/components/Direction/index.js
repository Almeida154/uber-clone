import React from 'react'
import MapViewDirections from 'react-native-maps-directions';

import { colors } from '../../styles';
import Config from '../../config';

export default function index({ destination, origin, onReady }) {
    return <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey={Config.API_KEY}
        strokeWidth={3}
        strokeColor={colors.darker}
    />
}