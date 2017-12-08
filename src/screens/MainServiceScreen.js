import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  Platform,
  TouchableHighlight,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import CommonStyles, {
  deviceHeight,
  NAV_HEIGHT,
  TAB_HEIGHT,
} from '../styles/CommonStyles';
import MenuItemBox from '../components/MenuItemBox';
import CustomTabBar from '../components/CommonTabBar';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class MainServiceScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const titleImgStyle = {
      width: 73,
      height: 18,
    };

    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          isBack={false} 
          screenTitle='image'
          titleImg={require('../../img/person/logoHealer2.png')}
          titleImgStyle={titleImgStyle}
          rightButtons={
            [
              {
                key: 1,
                buttonIcon: require('../../img/healer/email.png'),
                buttonAction: this._handleClickEmailButton.bind(this),
                buttonWidth: 24,
                buttonHeight: 19,
              },
              {
                key: 2,
                buttonIcon: require('../../img/healer/notification.png'),
                buttonAction: this._handleClickNotificationButton.bind(this),
                buttonWidth: 19,
                buttonHeight: 22,
              }
            ]
          }
        />
        <View style={styles.titleBox}>
          <Text style={[
            CommonStyles.titleText,
            CommonStyles.blackColor,
            CommonStyles.mediumBold,
            {lineHeight: 49, marginBottom: 7}
          ]}>
            Hello Jonas,
          </Text>
          <Text style={[
            CommonStyles.titleText,
            CommonStyles.lightgreyColor,
            CommonStyles.extraBold,
          ]}>
            HOW CAN WE TAKE CARE YOURSELF?
          </Text>
        </View>
        <View style={styles.fullField}>
          <View style={styles.colMainLeft}>
            <MenuItemBox
              boxTitle='Find Doctor'
              boxSubTitle='113 Doctors'
              boxIcon={require('../../img/healer/surgeonIcon.png')}
              boxIconWidth={20} 
              boxIconHeight={26}
              onPressBoxItem={this._handleClickFindDoctor.bind(this)}
            />
            <MenuItemBox
              boxTitle='Appointment'
              boxSubTitle='59 available'
              boxIcon={require('../../img/healer/medicineBookIcon.png')}
              boxIconWidth={20} 
              boxIconHeight={26}
              onPressBoxItem={this._handleClickAppointment.bind(this)}
            />
          </View>
          <View style={styles.colMainRight}>
            <MenuItemBox
              boxTitle='Find Hospital'
              boxSubTitle='269 hospital'
              boxIcon={require('../../img/healer/hospital.png')}
              boxIconWidth={26} 
              boxIconHeight={25}
              onPressBoxItem={this._handleClickFindHospital.bind(this)}
            />
            <MenuItemBox
              boxTitle='Price Services'
              boxSubTitle='26 services'
              boxIcon={require('../../img/healer/clipboard1.png')}
              boxIconWidth={22} 
              boxIconHeight={26}
              onPressBoxItem={this._handleClickServicePrice.bind(this)}
            />
          </View>
        </View>
        <CustomTabBar
          navigator={this.props.navigator}
          isActive='tab0'
        />
      </View>
    )
  }

  // Go to AppointmentScreen
  _handleClickAppointment() {
    this.props.navigator.push({
      screen: "Healer.AppointmentScreen",
      animated: true,
    });
  }

  _handleClickNotificationButton() {
    this.props.navigator.push({
      screen: "Healer.NotificationScreen",
      animated: true,
    });
  }

  _handleClickEmailButton() {
    // TODO: Click email button
  }

  // Go to FindDoctorScreen
  _handleClickFindDoctor() {
    this.props.navigator.push({
      screen: "Healer.FindDoctorScreen",
      animated: true,
    });
  }

  // Go to FindHospitalScreen 
  _handleClickFindHospital() {
    this.props.navigator.push({
      screen: "Healer.FindHospitalScreen",
      animated: true,
    });
  }

  // Go to ServicePriceScreen 
  _handleClickServicePrice() {
    this.props.navigator.push({
      screen: "Healer.ServicePriceScreen",
      animated: true,
    });
  }
}

const ELEMENT_HEIGHT = 430;
const spaceHeight = deviceHeight - NAV_HEIGHT - TAB_HEIGHT - ELEMENT_HEIGHT;

const styles = StyleSheet.create({
  titleBox: {
    marginTop: spaceHeight * 0.1 + NAV_HEIGHT, 
    paddingLeft: 27,
    paddingRight: 27,
  },
  fullField: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: spaceHeight * 0.2 - 15, 
    marginBottom: spaceHeight * 0.55 - 15, 
  },
  colMainLeft: {
    flex: 1,
    marginRight: 8,
  },
  colMainRight: {
    flex: 1,
    marginLeft: 8,
  },
});
