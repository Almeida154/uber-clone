import React, { useState, useEffect } from 'react';
import TouchID from 'react-native-touch-id';

import { StatusBar, Text } from 'react-native';
import { Container, Title } from './styles';
import { colors } from '../../styles';
import Config from '../../config';

export default function Splash({ navigation }) {

    const [isSupported, setSupported] = useState(null);

    useEffect(() => {
        TouchID.isSupported()
            .then(success => {
                setSupported(true);
            })
            .catch(error => {
                console.log('ERRO NO TOUCHID: ' + error);
                alert('nao suportado');
            });
    }, []);

    const handleAuth = () => {
        TouchID.authenticate('Faça a autenticação para entrar', {
            title: 'Autenticação',
            imageColor: colors.black,
            sensorErrorDescription: 'Deu errado! :/',
            cancelText: 'Cancelar'
        })
            .then(success => navigation.navigate('Home'))
            .catch(error => console.log('Falha: ' + error))
    }

    const handleSplashTime = () => {
        setTimeout(() => {
            isSupported ? handleAuth() : null;
        }, Config.SPLASH_TIMEOUT);
    }
    
    return (
        <Container>
            <StatusBar backgroundColor={colors.black} />
            <Title>Uber</Title>
            { !isSupported && <Text>Seu celular não suporta algumas funcionalidades.</Text> }
            { handleSplashTime() }
        </Container>
    );
}