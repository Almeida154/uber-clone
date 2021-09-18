import styled from 'styled-components/native';
import { fonts, colors, metrics } from '../../../styles';

export const OptionContainer = styled.View`
    margin-top: ${`${metrics.boundaries}px`};
    margin-bottom: ${`${metrics.boundaries}px`};
`;

export const Content = styled.View`
    flex-direction: row;
    height: 72px;
    justify-content: center;
    align-items: center;
`;


export const IconContainer = styled.View`
    width: 20%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled.Text`
    font-size: ${`${fonts.big}px`};
    background-color: #eeeeee;
    padding: 14px;
    border-radius: 20px;
`;

export const ContentContainer = styled.View`
    flex: 1;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;

export const Title = styled.Text`
    font-family: ${fonts.family.medium};
    font-size: ${`${fonts.big}px`};
`;

export const Arrow = styled.Text`
    font-family: ${fonts.family.bold};
    font-size: ${`${fonts.big}px`};
`;