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

export default class StartWeightScreen extends Component {
  static navigatorStyle = singleScreenNavigation;

  constructor(props) {
    super(props);
  }

  onWeightSelected(index) {
  }

  onUnitSelected(index) {
  }

  render() {
    let weights = [];
    for(let i = 1; i <= 200; i++) {
      weights.push(i.toString());
    }

    let units = ['Kg', 'Ib'];

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
            YOUR WEIGHT
          </Text>
        </View>
        <View style={[CommonStyles.pickerBox, {justifyContent: 'space-between'}]}>
          <WheelPicker
            onSelected={(event)=>this.onWeightSelected(event)}
            isCurved={false}
            isCyclic
            selectedItemPosition={54}
            selectedItemTextColor={'#FAFAFA'}
            data={weights}
            itemTextSize={24}
            style={{width: deviceWidth/3}}
          />
          <WheelPicker
            onSelected={(event)=>this.onUnitSelected(event)}
            isCurved={false}
            selectedItemTextColor={'#FAFAFA'}
            data={units}
            itemTextSize={24}
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
      screen: "Healer.StartHeightScreen"
    });
  }
}
