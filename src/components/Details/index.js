import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

import {
    Container,
    TypeTitle,
    TypeDescription,
    TypeImage,
    RequestButton,
    RequestButtonText,
} from './styles';

import uberX from '../../assets/png/uberx.png';

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Details = () => {

    const [position, setPosition] = useState(
        new Animated.Value(300)
    );

    useEffect(() => {
        Animated.timing(position, {
            duration: 500,
            toValue: 0,
            useNativeDriver: true
        }).start();
    }, []);

    return <AnimatedContainer style={{ transform: [{ translateY: position }] }}>
        <TypeTitle>Popular</TypeTitle>
        <TypeDescription>Econômico</TypeDescription>
        <TypeImage source={uberX} />
        <TypeTitle>UberX</TypeTitle>
        <TypeDescription>R$ 6,00</TypeDescription>
        <RequestButton onPress={() => console.log('Nada acontece!')}>
            <RequestButtonText>Solicitar UberX</RequestButtonText>
        </RequestButton>
    </AnimatedContainer>
}

export default Details;