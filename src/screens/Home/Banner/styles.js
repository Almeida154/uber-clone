import styled from 'styled-components/native';
import { colors, fonts, metrics } from '../../../styles';

export const BannerContainer = styled.View`
    width: 100%;
    height: 140px;
    border-radius: ${`${metrics.radius}px`};
    background-color: #ffe3ad;
    flex-direction: row;
`;

export const BannerContentContainer = styled.View`
    flex: 5;
    justify-content: space-around;
    padding: 20px;
`;

export const BannerImageContainer = styled.View`
    position: relative;
    flex: 4;
    padding-right: 20px;
`;

export const BannerTitle = styled.Text`
    font-size: ${`${fonts.bigger}px`};
    font-family: ${fonts.family.bold};
`;

export const BannerSubTitle = styled.Text`
    font-size: ${`${fonts.regular}px`};
    font-family: ${fonts.family.medium};
    color: ${colors.darker};
`;

export const BannerImage = styled.Image`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
`;