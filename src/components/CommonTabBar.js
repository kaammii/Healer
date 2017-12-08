import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import CommonStyles, {
  deviceWidth,
  deviceHeight,
  blueGradient,
} from '../styles/CommonStyles';
import PrimeTabBar from '../elements/PrimeTabBar';

export default class CustomTabBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PrimeTabBar
        navigator={this.props.navigator}
        isActive={this.props.isActive}
        tabBtn0={{
          activeBtn: require('../../img/healer/activeStethoscope.png'),
          inactiveBtn: require('../../img/healer/stethoscope.png'),
          width: 28,
          height: 30,
          onPressButton: this._onHomeIconClick.bind(this),
        }}
        tabBtn1={{
          activeBtn: require('../../img/healer/activeDrugs.png'),
          inactiveBtn: require('../../img/healer/drugs.png'),
          width: 24,
          height: 24,
          buttonAction: this._onDrugsIconClick.bind(this),
        }}
        tabBtn2={{
          activeBtn: require('../../img/healer/activeDoctors.png'),
          inactiveBtn: require('../../img/healer/doctors.png'),
          width: 18,
          height: 24,
          buttonAction: this._onDoctorsIconClick.bind(this),
        }}
        tabBtn3={{
          activeBtn: require('../../img/healer/activeDashboard.png'),
          inactiveBtn: require('../../img/healer/dashboard.png'),
          width: 24,
          height: 20,
          buttonAction: this._onDashboardIconClick.bind(this),
        }}
        tabBtn4={{
          activeBtn: require('../../img/healer/activeProfile.png'),
          inactiveBtn: require('../../img/healer/profile.png'),
          width: 21,
          height: 25,
          buttonAction: this._onProfileIconClick.bind(this),
        }}
      />
    );
  }

  // Handle click buttons of tabbar
  _onHomeIconClick() {
    this.props.navigator.popToRoot({
      animated: true
    });
    this.props.navigator.switchToTab({
      tabIndex: 0
    });
  }

  _onDrugsIconClick() {
    this.props.navigator.popToRoot({
      animated: true
    });
    this.props.navigator.switchToTab({
      tabIndex: 1
    });
  }

  _onDoctorsIconClick() {
    this.props.navigator.popToRoot({
      animated: true
    });
    this.props.navigator.switchToTab({
      tabIndex: 2
    });
  }

  _onDashboardIconClick() {
    this.props.navigator.popToRoot({
      animated: true
    });
    this.props.navigator.switchToTab({
      tabIndex: 3
    });
  }

  _onProfileIconClick() {
    this.props.navigator.popToRoot({
      animated: true
    });
    this.props.navigator.switchToTab({
      tabIndex: 4
    });
  }
}
