import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native';
import { Container } from './styles';

import Map from '../../components/Map';

export default function index() {
    return (
        <Container>
            <StatusBar translucent backgroundColor='transparent' />
            <Map />
        </Container>
    );
}
