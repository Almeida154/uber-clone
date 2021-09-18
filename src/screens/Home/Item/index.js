import React from 'react';

import {
    ItemContainer,
    Content,
    Square,
    Icon,
    Title
} from './styles';

const Item = ({ data }) => {
    const item = data => {
        return data.map((item, i) => {
            return (
                <Content
                    key={item.id}
                    style={[
                        (i + 1) % 4 !== 0
                            ? { marginRight: 25 }
                            : {},
                        
                        (i + 1) > 4
                            ? { marginTop: 15 }
                            : {}
                    ]}>
                    <Square>
                        <Icon
                            resizeMode='contain'
                            source={item.icon} />
                    </Square>
                    <Title>{item.title}</Title>
                </Content>
            );
        })
    }

    return <ItemContainer>{item(data)}</ItemContainer>
}

export default Item;