import styled from 'styled-components/native';
import { colors, fonts } from '../../styles';

export const LocationBox = styled.View`
    background: ${colors.white};
    elevation: 5;
    border: 1px solid ${colors.lighter};
    flex-direction: row;
    border-radius: 6px;
    overflow: hidden;
`;

export const LocationText = styled.Text`
    margin: 8px 10px;
    font-size: ${`${fonts.regular}px`};
    color: ${colors.darker};
`;

export const LocationTimeBox = styled.View`
    background: ${colors.darker};
    padding: 3px 8px;
`;

export const LocationTimeText = styled.Text`
    font-size: ${`${fonts.small}px`};
    color: ${colors.white};
    text-align: center;
`;

export const LocationTimeTextSmall = styled(LocationTimeText)`
    font-size: ${`${fonts.smaller - 1}px`};
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 60px;
    left: 20px;
    background-color: ${colors.white};
    padding: 14px;
    border-radius: 30px;
    elevation: 5;
`;