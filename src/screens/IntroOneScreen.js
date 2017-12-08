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

export default class IntroOneScreen extends Component {
  static navigatorStyle = appSingleNavigation;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={CommonStyles.normalSinglePage}>
        <View style={CommonStyles.introPageImageBox}>
          <Image
            source={require('../../img/healer/surgeon.png')}
            style={{width: 152, height: 205.5}}
          />
        </View>
        <View style={CommonStyles.introPageTextBox}>
          <Text style={[
            CommonStyles.headerText,
            CommonStyles.blackColor,
            CommonStyles.semiBold
          ]}>
            DOCTORS
          </Text>
          <Text style={CommonStyles.introPageSubText}>
            One way to announce or pro mote a certain new product or special
          </Text>
        </View>
        <View style={CommonStyles.introPageButtonBox}>
          <View style={CommonStyles.introPageButton} />
          <View style={CommonStyles.introPageButton}>
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
              marginRight: 5,
              backgroundColor: 'rgb(200,200,200)',
              borderRadius: 15
            }}/>
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

  // Go to IntroTwoScreen
  _handleClickNextButton() {
    this.props.navigator.push({
      screen: "Healer.IntroTwoScreen"
    });
  }
}
