import React, { Component } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import GradientButton from '../elements/GradientButton';
import CheckBox from '../elements/CheckBox';
import CommonStyles, { deviceHeight,shadowOpt } from '../styles/CommonStyles';
import { appSingleNavigation } from '../styles/navigatorStyle';

export default class SignUpScreen extends Component {
  static navigatorStyle = appSingleNavigation;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={CommonStyles.normalSinglePage}>
        <View style={styles.titleBox}>
          <Text style={[CommonStyles.extraLargeText, CommonStyles.blackColor]}>
            SIGN UP
          </Text>
        </View>
        <View style={styles.formBox}>
          <View style={CommonStyles.textInputField}>
            <Image
              source={require('../../img/healer/avatar.png')}
              style={{position:'absolute',bottom: 12,left: 20,width: 19, height: 22}}
            />
            <TextInput
              placeholder='Username'
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
            />
          </View>
          <View style={CommonStyles.textInputField}>
            <Image
              source={require('../../img/healer/padlock.png')}
              style={{position:'absolute',bottom: 12,left: 20,width: 17, height: 22}}
            />
            <TextInput
              placeholder='Password'
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
            />
          </View>
          <View style={CommonStyles.textInputField}>
            <Image
              source={require('../../img/healer/padlock.png')}
              style={{position:'absolute',bottom: 12,left: 20,width: 17, height: 22}}
            />
            <TextInput
              placeholder='Re Password'
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
            />
          </View>
          <View style={CommonStyles.textInputField}>
            <Image
              source={require('../../img/healer/envelope.png')}
              style={{position:'absolute',bottom: 12,left: 20,width: 22, height: 17}}
            />
            <TextInput
              placeholder='Email'
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
            />
          </View>
        </View>
        <View style={[CommonStyles.buttonBox, {marginBottom: spaceHeight * 0.19}]}>
          <GradientButton
            onPressButton={this._handleClickSignUpButton.bind(this)}
            setting={shadowOpt}
            btnText="SIGN UP"
          />
        </View>
        <View style={styles.noteBox}>
          <Text style={[
            CommonStyles.regularBold,
            CommonStyles.normalText,
            CommonStyles.lightgreyColor
          ]}>
            Have an account?
          </Text>
          <TouchableWithoutFeedback onPress={() => this._handleClickSignIn()}>
            <View style={{marginLeft: 5}}>
              <Text style={[
                CommonStyles.regularBold,
                CommonStyles.normalText,
                CommonStyles.softBlueColor]}>
                SIGN IN 
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }

  _handleClickSignUpButton() {
    this.props.navigator.push({
      screen: "Healer.StartNameScreen"
    });
  }

  _handleClickSignIn() {
    this.props.navigator.push({
      screen: "Healer.SignInScreen"
    });
  }
}

const ELEMENT_HEIGHT = 377;
const spaceHeight = deviceHeight - ELEMENT_HEIGHT;

const styles = StyleSheet.create({
  titleBox: {
    height: 52,
    marginTop: spaceHeight * 0.32,
    marginBottom: spaceHeight * 0.18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formBox: {
    height: 255,
    alignItems: 'center',
    marginBottom: spaceHeight * 0.14,
  },
  noteBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    marginBottom: 15,
  }
});
