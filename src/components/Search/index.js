import React, { useState, useEffect } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { fonts, colors } from '../../styles';
import Config from '../../config';

export default function index({ onLocationSelected }) {

    const [searchFocused, setSearchFocused] = useState(false);

    return <GooglePlacesAutocomplete
        placeholder='Para onde?'
        onPress={onLocationSelected}
        onFail={error => console.error(error)}
        query={{
            key: Config.API_KEY,
            language: 'pt',
            components: 'country:br'
        }}
        textInputProps={{
            autoCapitalize: 'none',
            autoCorrect: false,
            placeholderTextColor: colors.lighter,
            onFocus: () => setSearchFocused(true),
            onBlur: () => setSearchFocused(false)
        }}
        listViewDisplayed={searchFocused}
        fetchDetails
        enablePoweredByContainer={false}
        styles={{
            container: {
                position: 'absolute',
                top: 60,
                width: '100%'
            },
            textInputContainer: {
                flex: 1,
                backgroundColor: 'transparent',
                height: 54,
                marginHorizontal: 20,
                borderTopWidth: 0,
                borderBottomWidth: 0
            },
            textInput: {
                height: 54,
                margin: 0,
                borderRadius: 10,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 0,
                paddingBottom: 0,
                marginTop: 0,
                marginLeft: 0,
                marginRight: 0,
                elevation: 5,
                fontSize: fonts.big,
                borderWidth: 1,
                borderColor: '#DDD',
                color: colors.lighter
            },
            listView: {
                borderWidth: 1,
                borderColor: '#DDD',
                backgroundColor: '#FFF',
                marginHorizontal: 20,
                elevation: 5,
                marginTop: 10
            },
            description: {
                fontSize: fonts.regular + 2
            },
            row: {
                padding: 20,
                height: 58
            }
        }}
    />
}