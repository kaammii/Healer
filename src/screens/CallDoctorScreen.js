import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CommonStyles, {
  deviceHeight,
  deviceWidth,
  blueGradient,
} from '../styles/CommonStyles';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';

export default class CallDoctorScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[CommonStyles.normalPage, {alignItems: 'center'}]}>
        <View style={styles.textContainer}>
          <Text style={[
            CommonStyles.greyColor,
            CommonStyles.regularBold,
            {marginBottom: 8, fontSize: 24}
          ]}>
            Calling...
          </Text>
          <Text style={[
            CommonStyles.headerText,
            CommonStyles.blackColor,
            CommonStyles.semiBold,
          ]}>
            Alexander Wolfe 
          </Text>
        </View>
        <View style={styles.parentCircle}>
          <View style={styles.childCircle}>
            <Image
              source={require('../../img/person/doctor.png')}
              style={{width: 160, height: 184}}
            />
          </View>
        </View>
        <TouchableOpacity>
          <Image
            source={require('../../img/healer/esclip.png')}
            style={{width: 60, height: 60}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const ELEMENT_HEIGHT = 365;
const spaceHeight = deviceHeight - ELEMENT_HEIGHT;

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    marginTop: spaceHeight * 0.20,
  },
  parentCircle: {
    height: 230,
    width: 230,
    marginTop: spaceHeight * 0.22,
    marginBottom: spaceHeight * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgb(229,229,229)',
    borderRadius: 200
  },
  childCircle: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 22,
    borderWidth: 1,
    borderColor: 'rgb(229,229,229)',
    borderRadius: 200
  },
});
