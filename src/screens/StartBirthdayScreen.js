import React, { Component } from 'react';
import FitImage from 'react-native-fit-image';
import ResponsiveImage from 'react-native-responsive-image';
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
import { WheelPicker } from 'react-native-wheel-picker-android';
import LinearGradient from 'react-native-linear-gradient';

import GradientButton from '../elements/GradientButton';
import CheckBox from '../elements/CheckBox';
import CommonStyles, {
  deviceHeight,
  deviceWidth,
  shadowOpt,
  blueGradient
} from '../styles/CommonStyles';
import { singleScreenNavigation } from '../styles/navigatorStyle';
import SingleScreenCustomNavbar from '../elements/SingleScreenCustomNavbar';

export default class StartBirthdayScreen extends Component {
  static navigatorStyle = singleScreenNavigation;

  constructor(props) {
    super(props); 
  }

  onMonthSelected(index) {
  }

  onDaySelected(index) {
  }

  onYearSelected(index) {
  }

  

  render() {
    let days = [];
    for(let i = 1; i <= 31; i++) {
      days.push(i.toString());
    }

    let years = [];
    for(let i = 1900; i <= 2017; i++) {
      years.push(i.toString());
    }

    let months = [
      'JANUARY',
      'FEBRUARY',
      'MARCH',
      'APRIL',
      'MAY',
      'JUNE',
      'JULY',
      'AUGUST',
      'SEPTEMBER',
      'OCTOBER',
      'NOVEMBER',
      'DECEMBER'
    ];

    return (
      <View style={CommonStyles.normalPage}>
        <SingleScreenCustomNavbar
          navigator={this.props.navigator}
          rightButtons={
            [
              {
                key: 1,
                buttonAction: this._handleClickNext.bind(this),
              },
            ]
          }
        />
        <LinearGradient
          start={blueGradient.colorsStart} end={blueGradient.colorsEnd}
          colors={['rgb(130,160,246)', 'rgb(130,160,247)']}
          style={CommonStyles.selectedOption} />
        <View style={CommonStyles.labelField}>
          <Text style={[
            CommonStyles.headerText,
            CommonStyles.greyColor,
            CommonStyles.mediumBold
          ]}>
            YOUR BIRTHDAY
          </Text>
        </View>
        <View style={CommonStyles.pickerBox}>
          <WheelPicker
            onSelected={(event)=>this.onMonthSelected(event)}
            isCurved={false}
            isCyclic
            selectedItemPosition={6}
            selectedItemTextColor={'#FAFAFA'}
            data={months}
            itemTextSize={28}
            style={{width: deviceWidth/3}}
          />
          <WheelPicker
            onSelected={(event)=>this.onDaySelected(event)}
            isCurved={false}
            isCyclic
            selectedItemPosition={8}
            selectedItemTextColor={'#FAFAFA'}
            data={days}
            itemTextSize={28}
            style={{width: deviceWidth/3}}
          />
          <WheelPicker
            onSelected={(event)=>this.onYearSelected(event)}
            isCurved={false}
            isCyclic
            selectedItemPosition={100}
            selectedItemTextColor={'#FAFAFA'}
            data={years}
            itemTextSize={28}
            style={{width: deviceWidth/3}}
          />
        </View>
        <View style={[CommonStyles.buttonBox, {marginBottom: 20}]}>
          <GradientButton
            onPressButton={this._handleClickNext.bind(this)}
            setting={shadowOpt}
            btnText="NEXT"
          />
        </View>
      </View>
    );
  }

  _handleClickNext() {
    this.props.navigator.push({
      screen: "Healer.StartGenderScreen"
    });
  }
}
