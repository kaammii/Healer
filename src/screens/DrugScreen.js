import React, { Component } from 'react';
import FitImage from 'react-native-fit-image';
import ResponsiveImage from 'react-native-responsive-image';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  TouchableHighlight,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import CommonStyles, {
  deviceHeight,
  NAV_HEIGHT,
  TAB_HEIGHT,
} from '../styles/CommonStyles';
import MenuItemBox from '../components/MenuItemBox';
import CustomTabBar from '../components/CommonTabBar';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class DrugScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Drugs'
          isBack={false} 
        />
        <View style={styles.titleBox}>
          <Text style={[
            CommonStyles.titleText,
            CommonStyles.lightgreyColor,
            CommonStyles.extraBold,
          ]}>
            DO YOU NEED MEDICINES?
          </Text>
        </View>
        <View style={styles.fullField}>
          <View style={styles.colMainLeft}>
            <MenuItemBox
              boxTitle='Drugs List'
              boxSubTitle='113 Doctors'
              boxIcon={require('../../img/healer/list.png')}
              boxIconWidth={26}
              boxIconHeight={26}
              onPressBoxItem={this._handleClickDrugsList.bind(this)}
            />
            <MenuItemBox
              boxTitle='Reminder'
              boxSubTitle='19 reminder'
              boxIcon={require('../../img/healer/alarm.png')}
              boxIconWidth={22} 
              boxIconHeight={26}
              onPressBoxItem={this._handleClickReminder.bind(this)}
            />
          </View>
          <View style={styles.colMainRight}>
            <MenuItemBox
              boxTitle='Drugs A-Z'
              boxSubTitle='459 Drugs'
              boxIcon={require('../../img/healer/pills3Icon.png')}
              boxIconWidth={26} 
              boxIconHeight={26}
              onPressBoxItem={this._handleClickDrugsDetail.bind(this)}
            />
            <MenuItemBox
              boxTitle='Drugs Shop'
              boxSubTitle='Shop online'
              boxIcon={require('../../img/healer/medicine.png')}
              boxIconWidth={24}
              boxIconHeight={26}
              onPressBoxItem={this._handleClickDrugsShop.bind(this)}
            />
          </View>
        </View>
        <CustomTabBar
          navigator={this.props.navigator}
          isActive='tab1'
        />
      </View>
    )
  }

  _handleClickDrugsList() {
    this.props.navigator.push({
      title: "Drugs List",
      screen: "Healer.ListDrugsScreen"
    });
  }

  _handleClickReminder() {
    // TODO: Go ReminderScreen
  }

  _handleClickDrugsDetail() {
    // TODO: Go DrugsDetailScreen
  }

  _handleClickDrugsShop() {
    this.props.navigator.push({
      title: "Drugs Shop",
      screen: "Healer.DrugsShopScreen"
    });
  }
}

const ELEMENT_HEIGHT = 375;
const spaceHeight = deviceHeight - NAV_HEIGHT - TAB_HEIGHT - ELEMENT_HEIGHT;

const styles = StyleSheet.create({
  titleBox: {
    marginTop: spaceHeight * 0.36 + NAV_HEIGHT, 
    paddingLeft: 27,
    paddingRight: 27,
  },
  fullField: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: spaceHeight * 0.2 - 15, 
    marginBottom: spaceHeight * 0.4 - 15, 
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
