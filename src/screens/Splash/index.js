import React from 'react';

import { StatusBar } from 'react-native';
import { Container, Title } from './styles';
import { colors } from '../../styles';
import Config from '../../config';

export default function Splash({ navigation }) {

    const handleSplashTime = () => {
        setTimeout(() => {
            navigation.navigate('Home');
        }, Config.SPLASH_TIMEOUT);
    }

    return (
        <Container>
            <StatusBar backgroundColor={colors.black} />
            <Title>Uber</Title>
            { handleSplashTime() }
        </Container>
    );
}