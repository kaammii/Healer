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
  TouchableWithoutFeedback,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import GradientButton from '../elements/GradientButton';
import CheckBox from '../elements/CheckBox';
import CommonStyles, { deviceHeight,shadowOpt,deviceWidth } from '../styles/CommonStyles';

export default class ForgotPasswordScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true,
    orientation: 'portrait',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={CommonStyles.normalSinglePage}>
        <View style={styles.titleBox}>
          <Text style={[
            CommonStyles.headerText,
            CommonStyles.blackColor,
            CommonStyles.semiBold
          ]}>
            FORGOT PASSWORD 
          </Text>
          <Text style={[
            CommonStyles.normalText,
            CommonStyles.greyColor,
            CommonStyles.regularBold,
            {width: deviceWidth - 90, marginTop: 15, textAlign: 'center'}
          ]}>
            We just need your registered Email to  send you password reset intruction
          </Text>
        </View>
        <View style={styles.formBox}>
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
        <View style={CommonStyles.buttonBox}>
          <GradientButton
            onPressButton={this._handleResetPassword.bind(this)}
            setting={shadowOpt}
            btnText="RESET PASSWORD"
          />
        </View>
        <View style={styles.noteBox}>
          <Text style={[CommonStyles.regularBold,
            CommonStyles.normalText,
            CommonStyles.lightgreyColor]}
          >
            Don't have an account?
          </Text>
          <TouchableWithoutFeedback onPress={() => this._handleClickSignUp()}>
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

  _handleResetPassword() {
    this.props.navigator.push({
      screen: "Healer.SignInScreen"
    });
  }

  _handleClickSignUp() {
    this.props.navigator.push({
      screen: "Healer.SignUpScreen"
    });
  }
}

const styles = StyleSheet.create({
  titleBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 48,
  },
  formBox: {
    alignItems: 'center',
  },
  noteBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 15,
  }
});
