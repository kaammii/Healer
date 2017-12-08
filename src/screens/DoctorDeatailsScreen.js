import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import GradientButton from '../elements/GradientButton';
import CommonStyles, { deviceWidth } from '../styles/CommonStyles';
import ItemWithImage from '../components/ItemWithImage';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class DoctorDeatailsScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
  }

  render() {
    const shadowOpt = {
      btnWidth: 260,
      btnHeight: 40, 
    }

    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Doctor Profiles'
          rightButtons={
            [
              {
                key: 1,
                buttonIcon: require('../../img/healer/whiteHeart.png'),
                buttonAction: this._handleClickHeartButton.bind(this),
                buttonWidth: 26,
                buttonHeight: 23,
              },
            ]
          }
        />
        <ScrollView style={CommonStyles.noTabScrollView}>
          <View style={CommonStyles.wrapperBox}>
            <View style={styles.avatarContainer}>
              <TouchableOpacity onPress={this._handleClickCallButton.bind(this)}>
                <Image
                  source={require('../../img/healer/icCall.png')}
                  style={{width: 60, height: 60}}
                />
              </TouchableOpacity>
              <Image
                source={require('../../img/person/largeDoctor.png')}
                style={{width: 160, height: 160}}
              />
              <TouchableOpacity>
                <Image
                  source={require('../../img/healer/icMessage.png')}
                  style={{width: 40, height: 40}}
                />
              </TouchableOpacity>
            </View>
            <LinearGradient
              start={{x: 0.4, y: 0.5}} end={{x: 1.0, y: 1.0}}
              colors={['rgb(255,111,111)', 'rgb(255,35,35)']}
              style={styles.redCircle} />
            <View style={styles.overviewContainer}>
              <Text style={[
                CommonStyles.headerText,
                CommonStyles.blackColor,
                CommonStyles.mediumBold
              ]}>
                Alexander Wolfe
              </Text>
              <Text style={[
                CommonStyles.smallText,
                CommonStyles.lightgreyColor,
                CommonStyles.regularBold,
                {marginTop: -8, marginBottom: 7}
              ]}>
                Cardiologist
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../../img/healer/star.png')}
                  style={{width: 16, height: 15.3}}
                />
                <Text style={[
                  CommonStyles.headerText,
                  CommonStyles.softBlueColor,
                  CommonStyles.regularBold,
                  {paddingLeft: 4}
                ]}>
                  5.0
                </Text>
                <Text style={[
                  CommonStyles.headerText,
                  CommonStyles.greyColor,
                  CommonStyles.regularBold,
                  {paddingLeft: 5}
                ]}>
                  (234 reviewer)
                </Text>
              </View>
            </View>
            <View style={[CommonStyles.buttonBox, {marginTop: 15, marginBottom: 20}]}>
              <GradientButton
                onPressButton={this._handleClickBookAppointment.bind(this)}
                setting={shadowOpt}
                btnText="Book Appointment"
              />
            </View>
            <View>
              <ItemWithImage
                itemImg={require('../../img/healer/user2.png')}
                iconWidth={18}
                iconHeight={26}
                itemHeaderText='Personal Information'
                onPressItem={this._handleClickDoctorInformation.bind(this)}
              />
              <ItemWithImage
                itemImg={require('../../img/healer/blueHospital.png')}
                iconWidth={25.5}
                iconHeight={25}
                itemHeaderText='Working address'
                onPressItem={this._handleClickDoctorWorkingAddress.bind(this)}
              />
              <ItemWithImage
                itemImg={require('../../img/healer/star.png')}
                iconWidth={26}
                iconHeight={25}
                itemHeaderText='Reviewer'
                onPressItem={this._handleClickDoctorReview.bind(this)}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  // Go to BookAppointmentScreen
  _handleClickBookAppointment() {
    this.props.navigator.push({
      screen: "Healer.BookAppointmentScreen"
    });
  }

  // Go to DoctorInformationScreen
  _handleClickDoctorInformation() {
    this.props.navigator.push({
      screen: "Healer.DoctorInformationScreen"
    });
  }

  // Go to DoctorWorkingAddressScreen
  _handleClickDoctorWorkingAddress() {
    this.props.navigator.push({
      screen: "Healer.DoctorWorkingAddressScreen"
    });
  }

  // Go to DoctorReviewScreen
  _handleClickDoctorReview() {
    this.props.navigator.push({
      screen: "Healer.DoctorReviewScreen"
    });
  }

  // Go to CallDoctorsScreen
  _handleClickCallButton() {
    this.props.navigator.push({
      screen: "Healer.CallDoctorScreen"
    });
  }

  _handleClickHeartButton() {
    // TODO: Click heart button
  }
}

const styles = StyleSheet.create({
  avatarContainer: {
    height: 160,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft: 27,
    marginRight: 27,
  },
  redCircle: {
    position: 'absolute',
    top: 10, 
    right: (deviceWidth - 130) / 2,
    width: 15,
    height: 15,
    borderRadius: 200,
  },
  overviewContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
