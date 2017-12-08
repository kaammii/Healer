import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Calendar from 'react-native-calendar-datepicker';
import Icon from 'react-native-vector-icons/Entypo';

import GradientButton from '../elements/GradientButton';
import CommonStyles, { deviceWidth,shadowOpt } from '../styles/CommonStyles';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class BookAppointmentScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Book Appointment'
        />
        <ScrollView style={CommonStyles.noTabScrollView}>
          <View style={CommonStyles.wrapperBox}>
            <View style={styles.avatarBox}>
              <Image
                source={require('../../img/person/doctor.png')}
                style={[CommonStyles.borderRadius, {width: 130, height: 150}]}
              />
            </View>
            <View style={[
              CommonStyles.itemWhiteBox,
              {position: 'relative', height: 450, alignItems: 'center', marginTop: 65}
            ]}>
              <Text style={[
                CommonStyles.headerText,
                CommonStyles.blackColor,
                CommonStyles.mediumBold,
                {marginTop: 75, marginBottom: 25}
              ]}>
                Alexander Wolfe
              </Text>
              <Calendar
                selected={'2017-05-31'}
                style={{
                  borderColor: 'transparent',
                  alignSelf: 'center',
                  width: 330,
                }}
                barView={{
                  backgroundColor: 'rgb(130,160,246)',
                  padding: 10,
                }}  
                barText={{
                  fontSize: 21,
                  fontWeight: 'bold',
                  color: '#FFFFFF',
                }}
                stageView={{
                  padding: 0,
                }}
                dayHeaderView={{
                  backgroundColor: 'rgb(130,160,246)',
                  borderBottomColor: 'transparent',
                }}
                dayHeaderText={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: '#FFFFFF',
                }}
                dayRowView={{
                  borderColor: 'transparent',
                  height: 40,
                }}
                dayText={{
                  fontSize: 15,
                  color: 'rgb(74,74,74)',
                }}
                dayDisabledText={{
                  fontSize: 15,
                  color: 'rgb(200,200,200)',
                }}
                dayTodayText={{
                  fontWeight: 'bold',
                  color: 'blue',
                }} 
                daySelectedText={{
                  fontWeight: 'bold',
                  backgroundColor: 'rgb(130,160,246)',
                  color: '#FFFFFF',
                  borderRadius: 15,
                  borderColor: "transparent",
                }} 
              /> 
            </View>
            <View style={[
              CommonStyles.itemWhiteBox,
              { flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 21,
                paddingVertical: 17,
                marginTop: 10
              }
            ]}>
              <View>
                <Text style={[
                  CommonStyles.headerText,
                  CommonStyles.greyColor,
                  CommonStyles.mediumBold,
                ]}>
                  Time
                </Text>
              </View>
              <View style={styles.rightInfo}>
                <Text style={[
                  CommonStyles.itemHeaderText,
                  CommonStyles.softBlueColor,
                  CommonStyles.mediumBold,
                ]}>
                  8:00 AM
                </Text>
                <Icon
                  style={{fontSize: 20, paddingLeft: 10, paddingTop: 2}}
                  name="chevron-thin-right"
                  color="rgb(105,105,105)"
                />
              </View>
            </View>
            <View style={[CommonStyles.buttonBox, {marginTop: 20, marginBottom: 10}]}>
              <GradientButton
                onPressButton={this._handleBookAppoitment.bind(this)}
                setting={shadowOpt}
                btnText="BOOK NOW"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  _handleBookAppoitment() {
    // TODO:
  }
}

const styles = StyleSheet.create({
  avatarBox: {
    position: 'absolute',
    top: 0,
    right: (deviceWidth - 130)/2,
    elevation: 15,
  },
  rightInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
