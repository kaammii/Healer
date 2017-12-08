import {
  Platform
} from 'react-native';
import {Navigation} from 'react-native-navigation';

import {registerScreens} from './screens';

registerScreens();

// this will start our app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'Healer.StartUpScreen',
  },
  animationType: 'slide-down'
});
