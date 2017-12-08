import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import CommonStyles from '../styles/CommonStyles';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class DoctorInformationScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Information'
          rightButtons={
            [
              {
                key: 1,
                buttonIcon: require('../../img/healer/whiteHeart.png'),
                buttonAction: this._handleClickHeartButton.bind(this),
                buttonWidth: 26,
                buttonHeight: 23,
              },
            ]
          }
        />
        <ScrollView style={CommonStyles.noTabScrollView}>
          <View style={CommonStyles.wrapperBox}>
            <Item 
              headerText='About'
              infoTextCount={1}
              infoText1='If you are a male over the age of 40 and are suffering from weakness, impotence, pain, stiffness, drooping'
            />
            <Item 
              headerText='Address & Timing'
              infoTextCount={2}
              infoText1='070 Heaney Lakes Suite 380'
              infoText2='9:00 - 17:00, Monday to Friday'
            />
            <Item 
              headerText='Phone'
              infoTextCount={2}
              infoText1='+ 012 345 6789'
              infoText2='+ 012 345 6789'
            />
            <Item 
              headerText='Certificate'
              infoTextCount={2}
              infoText1='AAMA'
              infoText2='ABMS'
            />
          </View>
        </ScrollView>
      </View>
    );
  }

  _handleClickHeartButton() {
    // TODO: Click heart button
  }
}

// Private component
class Item extends React.Component {
  render() {
    const {
      headerText,
      infoTextCount, 
      infoText1, 
      infoText2, 
    } = this.props;

    let infoTextArr = [];
    if (infoTextCount == 1) {
      infoTextArr = (
        <Text style={[
          CommonStyles.normalText,
          CommonStyles.greyColor,
          CommonStyles.regularBold,
        ]}>
          {infoText1}
        </Text>
      );
    } else {
      infoTextArr = (
        <View>
          <Text style={[
            CommonStyles.normalText,
            CommonStyles.greyColor,
            CommonStyles.regularBold,
            {marginBottom: 7}
          ]}>
            {infoText1}
          </Text>
          <Text style={[
            CommonStyles.normalText,
            CommonStyles.greyColor,
            CommonStyles.regularBold,
          ]}>
            {infoText2}
          </Text>
        </View>
      );
    }
    
    return (
      <View style={[CommonStyles.itemWhiteBox,
        {
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 16,
          paddingBottom: 16,
        }
      ]}>
        <Text style={[
          CommonStyles.headerText,
          CommonStyles.blackColor,
          CommonStyles.semiBold,
          {marginBottom: 6}
        ]}>
          {headerText}
        </Text>
        {infoTextArr}
      </View>
    );
  }
}
