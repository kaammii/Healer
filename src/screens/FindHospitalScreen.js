import React, { Component } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import GradientButton from '../elements/GradientButton';
import CommonStyles, {shadowOpt, spaceHeight} from '../styles/CommonStyles';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';
import SelectBox from '../elements/SelectBox';

export default class ResultFindHospitalScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Find Hospital'
        />
        <View style={CommonStyles.screenTitleBox}>
          <Text style={[
            CommonStyles.titleText,
            CommonStyles.lightgreyColor,
            CommonStyles.extraBold,
          ]}>
            YOU ARE SICK?
          </Text>
          <Text style={[
            CommonStyles.titleText,
            CommonStyles.lightgreyColor,
            CommonStyles.extraBold,
          ]}>
            FIND A HOSPITAL.
          </Text>
        </View>
        <View style={styles.formBox}>
          <SelectBox
            label='Specialist Hospital'
          />
          <SelectBox
            label='Current Location'
          />
          <SelectBox
            label='Date'
          />
          <SelectBox
            label='Gender'
          />
        </View>
        <View style={[CommonStyles.buttonBox, {marginBottom: 30}]}>
          <GradientButton
            onPressButton={this._handleFindHospital.bind(this)}
            setting={shadowOpt}
            btnText="FIND NOW"
          />
        </View>
      </View>
    );
  }

  _handleFindHospital() {
    this.props.navigator.push({
      title: "Hospital",
      screen: "Healer.ResultFindHospitalScreen"
    });
  }
}

const styles = StyleSheet.create({
  formBox: {
    height: 255,
    alignItems: 'center',
    marginBottom: spaceHeight * 0.32, 
  },
});
