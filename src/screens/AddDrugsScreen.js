import React, { Component } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Entypo';

import GradientButton from '../elements/GradientButton';
import CommonStyles, {
  NAV_HEIGHT,
  deviceHeight,
  deviceWidth,
  shadowOpt
} from '../styles/CommonStyles';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';
import SelectBox from '../elements/SelectBox';

export default class AddDrugsScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Add Drugs'
        />
        <View style={styles.addDrugsBox}>
          <View style={styles.addDrugsButton}>
            <Image
              source={require('../../img/healer/photoCamera.png')}
              style={{width: 30, height: 25}}
            />
          </View>
          <View style={styles.formBox}>
            <SelectBox
              label='Medication Name'
            />
            <View style={styles.selectboxField}>
              <TouchableOpacity>
                <View style={styles.selectboxRow}>
                  <Text style={CommonStyles.selectboxLabel}>Dosage</Text>
                  <Icon
                    style={{fontSize: 20, textAlign: 'center'}}
                    name="chevron-thin-down"
                    color="rgb(229,229,229)"
                  />
                </View>
              </TouchableOpacity>
              <View style={{
                width: deviceWidth - 95,
                height: 0.5,
                backgroundColor: 'rgb(229,229,229)'
              }} />
              <TouchableOpacity>
                <View style={styles.selectboxRow}>
                  <Text style={CommonStyles.selectboxLabel}>Unit</Text>
                  <Icon
                    style={{fontSize: 20, textAlign: 'center'}}
                    name="chevron-thin-down"
                    color="rgb(229,229,229)"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <SelectBox
              label='Appearance'
            />
            <SelectBox
              label='Infomation'
            />
          </View>
          <View style={CommonStyles.buttonBox}>
            <GradientButton
              onPressButton={this._handleAddDrugs.bind(this)}
              setting={shadowOpt}
              btnText="ADD DRUGS"
            />
          </View>
        </View>
      </View>
    );
  }

  // Go to ListDrugsScreen
  _handleAddDrugs() {
    this.props.navigator.push({
      title: "Drugs List",
      screen: "Healer.ListDrugsScreen"
    });
  }
}

const ELEMENT_HEIGHT = 440;
const spaceHeight = deviceHeight - ELEMENT_HEIGHT - 75;

const styles = StyleSheet.create({
  addDrugsBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spaceHeight * 0.3 + NAV_HEIGHT,
    marginBottom: spaceHeight * 0.18,
  },
  addDrugsButton: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spaceHeight * 0.29,
    borderWidth: 1,
    borderStyle: 'dotted',
    borderRadius: 15,
    borderColor: 'rgb(150,150,150)',
  },
  formBox: {
    height: 305,
    alignItems: 'center',
    marginBottom: spaceHeight * 0.24,
  },
  selectboxField: {
    width: deviceWidth - 55,
    height: 91,
    marginBottom: 25,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor:'rgb(229,229,229)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 25,
    backgroundColor:'#FFFFFF',
  },
  selectboxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
  },
});
