import styled from 'styled-components/native';
import { colors, fonts } from '../../styles';

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.white};
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: UberMoveMedium;
    font-size: ${`${fonts.bigger}px`};
    color: ${colors.black};
`;