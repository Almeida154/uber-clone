import React from 'react';

import {
    OptionContainer,
    Content,
    IconContainer,
    Icon,
    ContentContainer,
    Title,
    Arrow
} from './styles';

const Option = ({ options }) => {
    
    const option = options => {
        return options.map(opt => {
            return (
                <Content key={opt.id}>
                    <IconContainer>
                        <Icon>{opt.icon}</Icon>
                    </IconContainer>
                    <ContentContainer>
                        <Title>{opt.title}</Title>
                        <Arrow>➔</Arrow>
                    </ContentContainer>
                </Content>
            );
        })
    }

    return <OptionContainer>{option(options)}</OptionContainer>

}

export default Option;