import React from 'react';
import { StatusBar, Image, View } from 'react-native';

import Banner from './Banner';
import Item from './Item';
import Option from './Option';
import MapShortcut from './MapShortcut';

import {
    Container,
    Header,
    Content,
    SearchShortcut, SearchShortcutText,
} from './styles';

import menu from '../../assets/png/menu.png';
import config from '../../config';

export default function index({ navigation }) {

    const handleToMapScreen = () => {
        navigation.navigate('Map');
    }

    return (
        <Container>
            <StatusBar translucent backgroundColor='transparent' />
            <Header>
                <Image source={menu} />
            </Header>
            <Content>
                <Banner />
                <Item data={config.ITENS_HOME} />
                <SearchShortcut onPress={() => handleToMapScreen()}>
                    <SearchShortcutText>
                        Para onde?
                    </SearchShortcutText>
                </SearchShortcut>
                <Option options={config.OPTIONS_HOME} />
                <MapShortcut onPress={handleToMapScreen} />
                <View style={{
                    height: 92,
                    backgroundColor: 'tomato'
                }}></View>
            </Content>
        </Container>
    );
}
