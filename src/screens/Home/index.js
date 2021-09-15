import React from 'react'
import { StatusBar } from 'react-native';
import { Container, Title } from './styles';
import { colors } from '../../styles';

export default function index() {
    return (
        <Container>
            <StatusBar backgroundColor={colors.white} />
            <Title>Home</Title>
        </Container>
    );
}
