import React from 'react'
import { StatusBar, Text } from 'react-native';
import { Container } from './styles';

import Map from '../../components/Map';

export default function index({ navigation }) {
    return (
        <Container>
            <StatusBar translucent backgroundColor='transparent' />
            <Map navigation={navigation} />
        </Container>
    );
}
