import styled from 'styled-components/native';
import { colors, fonts } from '../../styles';

export const Container = styled.View`
    background-color: ${colors.white};
    height: 300px;
    width: 100%;
    position: absolute;
    bottom: 0;
    elevation: 5;
    border: 1px solid ${colors.lighter};
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const TypeTitle = styled.Text`
    font-size: ${`${fonts.bigger}px`};
    font-family: ${fonts.family.bold};
    color: ${colors.darker}
`;

export const TypeDescription = styled(TypeTitle)`
    font-size: ${`${fonts.regular}px`};
    font-family: ${fonts.family.medium};
`;

export const TypeImage = styled.Image`
    height: 80px;
    margin: 10px 0;
`;

export const RequestButton = styled.TouchableOpacity`
    background-color: ${colors.black};
    justify-content: center;
    align-items: center;
    height: 60px;
    align-self: stretch;
    margin-top: 10px;
`;

export const RequestButtonText = styled.Text`
    color: ${colors.white};
    font-size: ${`${fonts.big}px`};
`;