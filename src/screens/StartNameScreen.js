import React, { Component } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import GradientButton from '../elements/GradientButton';
import CheckBox from '../elements/CheckBox';
import CommonStyles, { deviceHeight,shadowOpt } from '../styles/CommonStyles';
import { singleScreenNavigation } from '../styles/navigatorStyle';
import SingleScreenCustomNavbar from '../elements/SingleScreenCustomNavbar';

export default class StartNameScreen extends Component {
  static navigatorStyle = singleScreenNavigation;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <SingleScreenCustomNavbar
          navigator={this.props.navigator}
          rightButtons={
            [
              {
                key: 1,
                buttonAction: this.onStartYourBirthDayScreen.bind(this),
              },
            ]
          }
        />
        <View style={CommonStyles.labelField}>
          <Text style={[
            CommonStyles.headerText,
            CommonStyles.greyColor,
            CommonStyles.mediumBold
          ]}>
            YOUR NAME
          </Text>
        </View>
        <View style={{alignSelf: 'center'}}>
          <View style={CommonStyles.textInputField}>
            <Image
              source={require('../../img/healer/avatar.png')}
              style={{position:'absolute',bottom: 12,left: 20,width: 19, height: 22}}
            />
            <TextInput
              placeholder='Full name'
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
            />
          </View>
        </View>
        <View style={{height: 45, alignSelf: 'center'}}>
          <GradientButton
            onPressButton={this.onStartYourBirthDayScreen.bind(this)}
            setting={shadowOpt}
            btnText="SUBMIT"
          />
        </View>
      </View>
    );
  }

  onStartYourBirthDayScreen() {
    this.props.navigator.push({
      screen: "Healer.StartBirthdayScreen"
    });
  }
}
