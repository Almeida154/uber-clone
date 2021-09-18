import { StatusBar, Dimensions } from 'react-native';

export default {
  statusbar: StatusBar.currentHeight,
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
  boundaries: 22,
  headerHeight: 90,
  radius: 16
};