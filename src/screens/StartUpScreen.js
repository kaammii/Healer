import React, {
  Component
} from 'react';
import FitImage from 'react-native-fit-image';
import ResponsiveImage from 'react-native-responsive-image';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

import { appSingleNavigation } from '../styles/navigatorStyle';

export default class StartUpScreen extends Component {
  static navigatorStyle = appSingleNavigation;

  constructor(props) {
    super(props);
  }

  render() {
    setTimeout(
      () => {
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'Healer.IntroOneScreen'
          }
        });
      }, 5000
    );

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{height: 51, width: 202}}>
          <Image
            source={require('../../img/healer/logoHealer.png')}
            style={{width: 202, height: 51}}
          />
        </View>
      </View>
    );
  }
}
