import React, { Component } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import PrimeButton from '../elements/PrimeButton';
import CommonStyles, { deviceWidth }from '../styles/CommonStyles';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class AppointmentDetailScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
  }

  render() {
    const greyShadowOpt = {
      btnWidth: deviceWidth - 55,
      btnHeight: 45,
      backgroundColor: "rgb(105,105,105)",
    }

    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Appointment Details'
          rightButtons={
            [
              {
                key: 1,
                buttonIcon: require('../../img/healer/pencil1.png'),
                buttonAction: this._handleClickPencilButton.bind(this),
                buttonWidth: 22,
                buttonHeight: 22,
              },
            ]
          }
        />
        <ScrollView style={CommonStyles.noTabScrollView}>
          <View style={CommonStyles.wrapperBox}>
            <View style={[
              CommonStyles.itemWhiteBox,
              {flexDirection: 'row', alignItems: 'center', padding: 20}
            ]}>
              <View style={styles.leftCol}>
                <Image
                  source={require('../../img/person/pixta21931547M.png')}
                  style={{width: 45, height: 45}}
                />  
              </View>
              <View style={styles.rightCol}>
                <Text style={[
                  CommonStyles.itemHeaderText,
                  CommonStyles.blackColor,
                  CommonStyles.mediumBold,
                ]}>
                  Dr.Nettie Schmidt
                </Text>
                <Text style={[
                  CommonStyles.shortSmallText,
                  CommonStyles.lightgreyColor,
                  CommonStyles.regularBold,
                ]}>
                  Pediatrician
                </Text>
              </View>
            </View>
            <View style={[CommonStyles.itemWhiteBox,styles.datetimeBox]}>
              <View style={styles.leftCol}>
                <View style={styles.iconBox}>
                  <Image
                    source={require('../../img/healer/calendar.png')}
                    style={{width: 19.5, height: 22}}
                  />  
                </View>
                <View style={{
                  width: 0.7,
                  height: 30,
                  backgroundColor: 'rgb(229,229,229)'
                }} />
              </View>
              <View style={styles.rightCol}>
                <Text style={[
                  CommonStyles.itemHeaderText,
                  CommonStyles.blackColor,
                  CommonStyles.regularBold
                ]}>
                  Jan 01, 2017
                </Text>
              </View>
            </View>
            <View style={[CommonStyles.itemWhiteBox,styles.datetimeBox]}>
              <View style={styles.leftCol}>
                <View style={styles.iconBox}>
                  <Image
                    source={require('../../img/healer/clock.png')}
                    style={{width: 22, height: 22}}
                  />  
                </View>
                <View style={{
                  width: 0.7,
                  height: 30,
                  backgroundColor: 'rgb(229,229,229)'
                }} />
              </View>
              <View style={styles.rightCol}>
                <Text style={[
                  CommonStyles.itemHeaderText,
                  CommonStyles.blackColor,
                  CommonStyles.regularBold
                ]}>
                  12:00AM - 02:30PM
                </Text>
              </View>
            </View>
            <View style={CommonStyles.itemWhiteBox}>
              <View style={styles.orderServiceTitleBox}>
                <Text style={[
                  CommonStyles.headerText,
                  CommonStyles.blackColor,
                  CommonStyles.semiBold
                ]}>
                  Order Services
                </Text>
              </View>
              <View style={styles.orderServiceItemBox}>
                <View>
                  <Text style={[
                    CommonStyles.normalText,
                    CommonStyles.greyColor,
                    CommonStyles.regularBold,
                  ]}>
                    Overall examination
                  </Text>
                  <Text style={[
                    CommonStyles.normalText,
                    CommonStyles.softBlueColor,
                    CommonStyles.regularBold,
                  ]}>
                    55 mins
                  </Text>
                </View>
                <Text style={[
                  CommonStyles.normalText,
                  CommonStyles.blackColor,
                  CommonStyles.regularBold
                ]}>
                  $150
                </Text>
              </View>
              <View style={styles.orderServiceItemBox}>
                <View>
                  <Text style={[
                    CommonStyles.normalText,
                    CommonStyles.greyColor,
                    CommonStyles.regularBold,
                  ]}>
                    Blood tests
                  </Text>
                  <Text style={[
                    CommonStyles.normalText,
                    CommonStyles.softBlueColor,
                    CommonStyles.regularBold,
                  ]}>
                    12 mins
                  </Text>
                </View>
                <Text style={[
                  CommonStyles.normalText,
                  CommonStyles.blackColor,
                  CommonStyles.regularBold
                ]}>
                  $243
                </Text>
              </View>
              <View style={styles.orderServiceTotalBox}>
                <Text style={[
                  CommonStyles.normalText,
                  CommonStyles.blackColor,
                  CommonStyles.semiBold
                ]}>
                  TOTAL
                </Text>
                <Text style={[
                  CommonStyles.normalText,
                  CommonStyles.blackColor,
                  CommonStyles.semiBold
                ]}>
                  $393
                </Text>
              </View>
            </View>
            <View style={[
              CommonStyles.buttonBox,
              {marginTop: 20, marginBottom: 10}
            ]}>
              <PrimeButton
                onPressButton={this._handleCancelAppointment.bind(this)}
                setting={greyShadowOpt}
                btnText="CANCEL APPOINTMENT"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  _handleClickPencilButton() {
    // TODO: Click pencil button 
  }

  _handleCancelAppointment() {
    // TODO: Cancel Appointment
  }
}

const styles = StyleSheet.create({
  leftCol: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 65,
  },
  iconBox: {
    width: 43, 
  },
  rightCol: {
    flex: 1, 
  },
  datetimeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  orderServiceTitleBox: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderColor: 'rgb(229,229,229)',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  orderServiceItemBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderColor:'rgb(229,229,229)',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  orderServiceTotalBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
});
