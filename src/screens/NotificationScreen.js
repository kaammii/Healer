import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import GradientButton from '../elements/GradientButton';
import CommonStyles from '../styles/CommonStyles';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class NotificationScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
  }

  render() {
    const smallShadowOpt = {
      btnWidth: 125,
      btnHeight: 35,
      shadowHeight: 65,
      fontSize: 15,
    }

    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Notification'
        />
        <ScrollView style={CommonStyles.noTabScrollView}>
          <View style={CommonStyles.wrapperBox}>
            <View style={[CommonStyles.itemWhiteBox,styles.itemBox]}>
              <View style={styles.leftCol}>
                <Image
                  source={require('../../img/healer/drugs.png')}
                  style={{width: 24, height: 24}}
                />  
              </View>
              <View style={styles.rightCol}>
                <Text style={[
                  CommonStyles.itemHeaderText,
                  CommonStyles.blackColor,
                  CommonStyles.regularBold,
                  {marginBottom: 6}]}>
                  It's time to take medication
                </Text>
                <Text style={[
                  CommonStyles.smallText,
                  CommonStyles.lightgreyColor,
                  CommonStyles.regularBold,
                ]}>
                  1 hours ago
                </Text>
              </View>
            </View>
            <View style={[CommonStyles.itemWhiteBox,styles.itemBox]}>
              <View style={styles.leftCol}>
                <Image
                  source={require('../../img/person/pixta21931547M.png')}
                  style={[CommonStyles.borderRadius, {width: 30, height: 30}]}
                />  
              </View>
              <View style={styles.rightCol}>
                <Text style={[
                  CommonStyles.itemHeaderText,
                  CommonStyles.blackColor,
                  CommonStyles.regularBold,
                  {marginBottom: 6}]}>
                  Dr.Alexander John send you a messages
                </Text>
                <Text style={[
                  CommonStyles.smallText,
                  CommonStyles.lightgreyColor,
                  CommonStyles.regularBold,
                  {marginBottom: 10}]}>
                  39 mins ago
                </Text>
                <GradientButton
                  onPressButton={this._handleClickReply.bind(this)}
                  setting={smallShadowOpt}
                  btnText="REPLY"
                />
              </View>
            </View>
            <View style={[CommonStyles.itemWhiteBox,styles.itemBox]}>
              <View style={styles.leftCol}>
                <Image
                  source={require('../../img/healer/greyClipboard1.png')}
                  style={{width: 19, height: 22}}
                />  
              </View>
              <View style={styles.rightCol}>
                <Text style={[
                  CommonStyles.itemHeaderText,
                  CommonStyles.blackColor,
                  CommonStyles.regularBold,
                  {marginBottom: 6}]}>
                  Meet with Dr.Janna at 11:00
                </Text>
                <Text style={[
                  CommonStyles.smallText,
                  CommonStyles.lightgreyColor,
                  CommonStyles.regularBold,
                ]}>
                  39 mins ago
                </Text>
              </View>
            </View>
            <View style={[CommonStyles.itemWhiteBox,styles.itemBox]}>
              <View style={styles.leftCol}>
                <Image
                  source={require('../../img/healer/drugs.png')}
                  style={{width: 24, height: 24}}
                />  
              </View>
              <View style={styles.rightCol}>
                <Text style={[
                  CommonStyles.itemHeaderText,
                  CommonStyles.blackColor,
                  CommonStyles.regularBold,
                  {marginBottom: 6}]}>
                  Heart tonic drink now
                </Text>
                <Text style={[
                  CommonStyles.smallText,
                  CommonStyles.lightgreyColor,
                  CommonStyles.regularBold,
                ]}>
                  45 mins ago
                </Text>
              </View>
            </View>
            <View style={[CommonStyles.itemWhiteBox,styles.itemBox]}>
              <View style={styles.leftCol}>
                <Image
                  source={require('../../img/healer/drugs.png')}
                  style={{width: 24, height: 24}}
                />  
              </View>
              <View style={styles.rightCol}>
                <Text style={[
                  CommonStyles.itemHeaderText,
                  CommonStyles.blackColor,
                  CommonStyles.regularBold,
                  {marginBottom: 6}]}>
                  Tonic drink eyes right now
                </Text>
                <Text style={[
                  CommonStyles.smallText,
                  CommonStyles.lightgreyColor,
                  CommonStyles.regularBold,
                ]}>
                  45 mins ago
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  _handleClickReply() {
    // TODO:
  }
}

const styles = StyleSheet.create({
  itemBox: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  leftCol: {
    flexDirection: 'row',
    width: 44,
  },
  rightCol: {
    flex: 1, 
  },
});
