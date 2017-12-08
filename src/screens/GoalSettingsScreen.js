import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import LinearGradient from 'react-native-linear-gradient';

import CommonStyles, { blueGradient } from '../styles/CommonStyles';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class GoalSettingsScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Goal Setting'
        />
        <ScrollView style={CommonStyles.noTabScrollView}>
          <View style={styles.goalSettingBox}>
            <View style={styles.titleBox}>
              <Text style={[
                CommonStyles.greyColor,
                CommonStyles.mediumBold,
                {fontSize: 24}
              ]}>
                Total Goal
              </Text>
            </View>
            <View style={styles.numberRow}>
              <View style={{height: 154, flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={[
                  CommonStyles.periBlueColor,
                  CommonStyles.mediumBold,
                  {fontSize: 94}
                ]}>
                  49.7
                </Text>
              </View>
              <View style={{height: 136, flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={[
                  CommonStyles.periBlueColor,
                  CommonStyles.regularBold,
                  {fontSize: 48}
                ]}>
                  %
                </Text>
              </View>
            </View>
            <View style={styles.settingBox}>
              <Item
                headerText='Desinfectant'
                icon={require('../../img/healer/desinfectant.png')}
                iconWidth={16}
                iconHeight={22}
                number='89'
                percentage={69}
                bluePartWidth={70}
              />
              <Item
                headerText='Transfusion'
                icon={require('../../img/healer/transfusion.png')}
                iconWidth={16}
                iconHeight={22}
                number='167'
                percentage={86}
                bluePartWidth={85}
              />
              <Item
                headerText='Weight'
                icon={require('../../img/healer/blueHospital.png')}
                iconWidth={17}
                iconHeight={22}
                number='254'
                percentage={54}
                bluePartWidth={55}
              />
              <Item
                headerText='Desinfectant'
                icon={require('../../img/healer/desinfectant.png')}
                iconWidth={16}
                iconHeight={22}
                number='89'
                percentage={69}
                bluePartWidth={70}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

// Private component
class Item extends React.Component {
  render() {
    const {
      headerText,
      icon,
      iconWidth,
      iconHeight,
      number,
      percentage,
      bluePartWidth,
    } = this.props;

    return (
      <View style={[CommonStyles.itemWhiteBox, 
        {
          paddingVertical: 16,
          paddingHorizontal: 21,
        }
      ]}>
        <View style={styles.goalRow}>
          <Image
            source={icon}
            style={{width:iconWidth, height:iconHeight}}
          />
          <View style={{flex:1}}>
            <Text style={[
              CommonStyles.itemHeaderText,
              CommonStyles.greyColor,
              CommonStyles.mediumBold,
              {marginLeft: 23}
            ]}>
              {headerText}
            </Text>
          </View>
          <Image
            source={require('../../img/healer/more.png')}
            style={{width: 7, height: 27}}
          /> 
        </View>
        <View style={styles.valueRow}>
          <View style={{flexDirection: 'row'}}>
            <View style={{height: 52, flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={[
                CommonStyles.blackColor,
                CommonStyles.mediumBold,
                {fontSize:32}
              ]}>
                {number}
              </Text>
            </View>
            <View style={{height: 45, flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={[
                CommonStyles.headerText,
                CommonStyles.blackColor,
                CommonStyles.regularBold,
              ]}>
                bpm
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <Text style={[
              CommonStyles.normalText,
              CommonStyles.periBlueColor,
              CommonStyles.mediumBold,
              {marginBottom: 5}
            ]}>
              {percentage}%
            </Text>
            <View style={styles.progressBar}>
              <LinearGradient
                start={blueGradient.colorsStart} end={blueGradient.colorsEnd}
                colors={blueGradient.colors}
                style={{width: bluePartWidth, borderRadius: 30}} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  goalSettingBox: {
    marginTop: 30,
    marginBottom: 20, 
  },
  titleBox: {
    marginRight: 30,
    marginLeft: 30,
  },
  numberRow: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
  },
  settingBox: {
    marginTop: 20,
  },
  goalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 29,
    marginBottom: 7,
  },
  valueRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  progressBar: {
    flexDirection: 'row',
    width: 100,
    height: 4,
    borderRadius: 30,
    backgroundColor: 'rgb(229,229,229)',
  },
});
