import styled from 'styled-components/native';
import { colors, fonts } from '../../styles';

export const LocationBox = styled.View`
    background: ${colors.white};
    elevation: 1;
    border: 1px solid ${colors.lighter};
    flex-direction: row;
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