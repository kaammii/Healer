import React, { Component } from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import GradientButton from '../elements/GradientButton';
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  introSpaceHeight,
} from '../styles/CommonStyles';
import { appSingleNavigation } from '../styles/navigatorStyle';

export default class IntroThreeScreen extends Component {
  static navigatorStyle = appSingleNavigation;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={CommonStyles.normalSinglePage}>
        <View style={CommonStyles.introPageImageBox}>
          <Image
            source={require('../../img/healer/medicineBook.png')}
            style={{width: 155, height: 205.5}}
          />
        </View>
        <View style={CommonStyles.introPageTextBox}>
          <Text style={[
            CommonStyles.headerText,
            CommonStyles.blackColor,
            CommonStyles.semiBold
          ]}>
            APPOINTMENT
          </Text>
          <Text style={CommonStyles.introPageSubText}>
            Kidney stones are very hard mineral deposits that happen to form
          </Text>
        </View>
        <View style={styles.introPageButtonBox}>
          <GradientButton
            onPressButton={this._handleClickGetStartedButton.bind(this)}
            setting={shadowOpt}
            btnText="GET STARTED"
          />
        </View>
      </View>
    );
  }

  _handleClickGetStartedButton() {
    this.props.navigator.push({
      screen: "Healer.SignInScreen"
    });
  }
}

const styles = StyleSheet.create({
  introPageButtonBox: {
    alignItems: 'center',
    marginTop: introSpaceHeight * 0.27,
    marginBottom: 20,
  },
});
