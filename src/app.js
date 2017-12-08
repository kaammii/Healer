import {
  Platform,
  Image,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
import { noNavTabbarNavigation } from './styles/navigatorStyle';

registerScreens();

const createTabs = () => {
  let tabs = [
    {
      screen: 'Healer.MainServiceScreen',
      icon: require('../img/one.png'),
      navigatorStyle: noNavTabbarNavigation,
    },
    {
      screen: 'Healer.DrugScreen',
      icon: require('../img/healer/drugs.png'),
      navigatorStyle: noNavTabbarNavigation,
    },
    {
      screen: 'Healer.ListDoctorsScreen',
      icon: require('../img/healer/doctors.png'),
      navigatorStyle: noNavTabbarNavigation,
    },
    {
      screen: 'Healer.DashboardTestIndicatorsScreen',
      icon: require('../img/healer/dashboard.png'),
      navigatorStyle: noNavTabbarNavigation,
    },
    {
      screen: 'Healer.UserProfileScreen',
      icon: require('../img/healer/profile.png'),
      navigatorStyle: noNavTabbarNavigation,
    }
  ];
  return tabs;
};

Navigation.startTabBasedApp({
  tabs: createTabs(),
  // On Android, add BottomTabs styles to AppStyle
  appStyle: {
    orientation: 'portrait',
    tabBarHidden: true,
  },
  drawer: {
    left: {
      screen: 'Healer.SideMenu'
    }
  },
  animationType: 'slide-down'
});
