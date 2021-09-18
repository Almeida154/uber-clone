import styled from 'styled-components/native';
import { colors, fonts, metrics } from '../../styles';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    position: absolute;
    top: 0;
    padding-top: ${`${metrics.statusbar}px`};
    background-color: ${colors.white};
    elevation: 6;
    height: ${`${metrics.headerHeight}px`};
    width: 100%;
    justify-content: center;
    padding-left: ${`${metrics.boundaries}px`};
    padding-right: ${`${metrics.boundaries}px`};
`;

export const Content = styled.ScrollView`
    flex: 1;
    background-color: ${colors.white};
    padding: ${`${metrics.boundaries}px`};
    padding-top: ${`${
        metrics.headerHeight + metrics.boundaries
}px`};
`;

export const SearchShortcut = styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    background-color: #ededed;
    justify-content: center;
    padding: 16px;
    border-radius: ${`${metrics.radius - 6}px`};
`;

export const SearchShortcutText = styled.Text`
    font-family: ${fonts.family.bold};
    font-size: ${`${fonts.big}px`};
    color: ${colors.darker};
    opacity: .6;
`;