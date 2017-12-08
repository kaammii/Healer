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
import LinearGradient from 'react-native-linear-gradient';

import ImageButton from '../elements/ImageButton';
import CommonStyles, {
  blueGradient,
} from '../styles/CommonStyles';
import { appSingleNavigation } from '../styles/navigatorStyle';

export default class IntroTwoScreen extends Component {
  static navigatorStyle = appSingleNavigation;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={CommonStyles.normalSinglePage}>
        <View style={CommonStyles.introPageImageBox}>
          <Image
            source={require('../../img/healer/pills3.png')}
            style={{width: 202.5, height: 205}}
          />
        </View>
        <View style={CommonStyles.introPageTextBox}>
          <Text style={[
            CommonStyles.headerText,
            CommonStyles.blackColor,
            CommonStyles.semiBold
          ]}>
            DRUGS
          </Text>
          <Text style={CommonStyles.introPageSubText}>
            I know how terrible it can be for you at nights and even 
          </Text>
        </View>
        <View style={CommonStyles.introPageButtonBox}>
          <View style={CommonStyles.introPageButton}>
            <ImageButton
              style={CommonStyles.backButton}
              styleImage={CommonStyles.backButton}
              appearance={{
                normal: require("../../img/healer/esclipCopy2.png"),
                highlight: require("../../img/healer/esclipCopy2.png")
              }}
              onPress={this._prevScreenApp.bind(this)}
            />
          </View>
          <View style={CommonStyles.introPageButton}>
            <View style={{
              width: 25,
              height: 5,
              margin: 5,
              backgroundColor: 'rgb(200,200,200)',
              borderRadius: 15
            }}/>
            <LinearGradient
              start={blueGradient.colorsStart} end={blueGradient.colorsEnd}
              colors={blueGradient.colors}
              style={{
                width: 25,
                height: 5,
                marginRight: 5,
                borderRadius: 15
              }}
            />
            <View style={{
              width: 25,
              height: 5,
              backgroundColor: 'rgb(200,200,200)',
              borderRadius: 15
            }}/>
          </View>
          <View style={CommonStyles.introPageButton}>
            <ImageButton
              style={CommonStyles.nextButton}
              styleImage={CommonStyles.nextButton}
              appearance={{
                normal: require("../../img/healer/next.png"),
                highlight: require("../../img/healer/next.png")
              }}
              onPress={this._handleClickNextButton.bind(this)}
            />
          </View>
        </View>
      </View>
    );
  }

  // Go to IntroThreeScreen
  _handleClickNextButton() {
    this.props.navigator.push({
      title: "More",
      screen: "Healer.IntroThreeScreen"
    });
  }

  // Back the previous screen 
  _prevScreenApp() {
    this.props.navigator.pop({});
  }
}
