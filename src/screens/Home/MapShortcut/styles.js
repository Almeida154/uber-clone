import styled from 'styled-components/native';
import { metrics, colors, fonts } from '../../../styles';

export const Container = styled.View`
    width: 100%;
    height: 300px;
    padding-bottom: 100px;
`;

export const MapContainer = styled.View`
    width: 100%;
    height: 100%;
    border-radius: ${`${metrics.radius}px`};
    overflow: hidden;
    elevation: 4;
`;

export const Title = styled.Text`
    color: ${colors.darker};
    font-family: ${fonts.family.bold};
    font-size: ${`${fonts.bigger - 6}px`};
    margin-bottom: ${`${metrics.boundaries}px`};
`;