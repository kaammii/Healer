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
  TouchableOpacity,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import GradientButton from '../elements/GradientButton';
import CheckBox from '../elements/CheckBox';
import CommonStyles, { deviceHeight,shadowOpt,deviceWidth } from '../styles/CommonStyles';
import { appSingleNavigation } from '../styles/navigatorStyle';

export default class SignInScreen extends Component {
  static navigatorStyle = appSingleNavigation;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={CommonStyles.normalSinglePage}>
        <View style={styles.titleBox}>
          <Text style={[CommonStyles.extraLargeText, CommonStyles.blackColor]}>
            SIGN IN
          </Text>
        </View>
        <View style={styles.formBox}>
          <View style={CommonStyles.textInputField}>
            <Image
              source={require('../../img/healer/avatar.png')}
              style={{position:'absolute', bottom: 12,left: 20, width: 19, height: 22}}
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
              style={{position:'absolute',bottom: 12,left: 20, width: 17, height: 22}}
            />
            <TextInput
              placeholder='Password'
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
            />
          </View>
          <View style={styles.subFormBox}>
            <CheckBox
              label='remember me'
              checked={true}
              onChange={(checked) => console.log('I am checked', checked)}
              checkedImage={require('../../img/healer/check.png')}
              uncheckedImage={require('../../img/healer/icUncheck.png')}
            />
            <TouchableOpacity onPress={() => this._handleClickFortgotPass()}>
              <Image
                source={require('../../img/healer/icForgotPass.png')}
                style={{width: 40, height: 40}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[CommonStyles.buttonBox, {marginBottom: spaceHeight * 0.17}]}>
          <GradientButton
            onPressButton={this._goToSignUpScreen.bind(this)}
            setting={shadowOpt}
            btnText="SIGN IN"
          />
        </View>
        <View style={[CommonStyles.buttonBox, {marginBottom: spaceHeight * 0.18}]}>
          <GradientButton
            onPressButton={this._goToSignUpScreen.bind(this)}
            setting={shadowOpt}
            btnText="Sign In with Facebook"
          />
        </View>
        <View style={styles.noteBox}>
          <Text style={[
            CommonStyles.regularBold,
            CommonStyles.normalText,
            CommonStyles.lightgreyColor]}
          >
            Don't have an account?
          </Text>
          <TouchableWithoutFeedback onPress={() => this._goToSignUpScreen()}>
            <View style={{marginLeft: 5}}>
              <Text style={[
                CommonStyles.regularBold,
                CommonStyles.normalText,
                CommonStyles.softBlueColor]}>
                SIGN UP
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }

  _goToSignUpScreen() {
    this.props.navigator.push({
      screen: "Healer.SignUpScreen"
    });
  }

  _handleClickFortgotPass() {
    this.props.navigator.push({
      screen: "Healer.ForgotPasswordScreen"
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
    height: 190,
    alignItems: 'center',
    marginBottom: spaceHeight * 0.05,
  },
  subFormBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: deviceWidth - 85,
    height: 45,
    marginBottom: 25,
  },
  noteBox: {
    height: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  }
});
