import styled from 'styled-components/native';
import { fonts, colors, metrics } from '../../../styles';

export const ItemContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: ${`${metrics.boundaries}px`};
    margin-bottom: ${`${metrics.boundaries}px`};
    padding-left: 16px;
`;

export const Content = styled.View`
    flex-direction: column;
    width: ${
        `${(metrics.screenWidth - 75 - 32 - (metrics.boundaries * 2)) / 4}px`
    };
`;

export const Square = styled.View`
    height: 60px;
    width: 100%;
    background-color: #eeeeee;
    border-radius: ${`${metrics.radius - 6}px`};
    justify-content: center;
    align-items: center;
`;

export const Icon = styled.Image`
    width: 80%;
`;

export const Title = styled.Text`
    font-family: ${fonts.family.medium};
    text-align: center;
    font-size: ${`${fonts.regular}px`};
    color: ${colors.darker};
    margin-top: 6px;
`;