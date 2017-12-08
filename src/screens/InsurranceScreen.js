import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import CommonStyles from '../styles/CommonStyles';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class InsurranceScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
    this. state = {
      insurranceList: [
        {
          id: 0,
          insurranceTitle: 'Life Insurrance',
          image: require('../../img/person/logoHospital_1.png'),
          imageWidth: 30,
          imageHeight: 30,
          name: 'Bernice Luna',
          code: 'HL1231416845',
          group: '25-146',
          date: '11/2072',
          plan: 'Pro',
        },
        {
          id: 1,
          insurranceTitle: 'Personal Insurrance',
          image: require('../../img/person/logoHospital_2.png'),
          imageWidth: 30.5,
          imageHeight: 30,
          name: 'Bernice Luna',
          code: 'VMH9231458760',
          group: '24-789',
          date: '09/2019',
          plan: 'Pro',
        },
        {
          id: 2,
          insurranceTitle: 'Family Insurrance',
          image: require('../../img/person/logoHospital_3.png'),
          imageWidth: 30,
          imageHeight: 30,
          name: 'Bernice Luna',
          code: 'VMH9231458760',
          group: '24-789',
          date: '09/2019',
          plan: 'Pro',
        },
      ]
    }
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Insurrance'
          rightButtons={
            [
              {
                key: 1,
                buttonIcon: require('../../img/healer/add.png'),
                buttonAction: this._handleClickAddButton.bind(this),
                buttonWidth: 20,
                buttonHeight: 20,
              },
            ]
          }
        />
        <ScrollView style={CommonStyles.noTabScrollView}>
          <View style={CommonStyles.wrapperBox}>
            {
              this.state.insurranceList.map((item, index) => (
                <Item
                  key={item.id}
                  insurranceTitle={item.insurranceTitle}
                  image={item.image}
                  imageWidth={item.imageWidth}
                  imageHeight={item.imageHeight}
                  name={item.name}
                  code={item.code}
                  group={item.group}
                  date={item.date}
                  plan={item.plan}
                  onPressActionButton={this._handleClickEditButton.bind(this)}
                />
              ))
            }
          </View>
        </ScrollView>
      </View>
    );
  }

  _handleClickAddButton() {
    // TODO: 
  }

  _handleClickEditButton() {
    // TODO: 
  }
}

// Private component
class Item extends React.Component {
  render() {
    const {
      insurranceTitle,
      image,
      imageWidth,
      imageHeight,
      name,
      code,
      group,
      date,
      plan,
      onPressActionButton,
    } = this.props;

    return (
      <View style={[CommonStyles.itemWhiteBox, {position: 'relative'}]}>
        <TouchableOpacity
          style={CommonStyles.editButton}
          onPress={onPressActionButton}
        >
          <Image
            source={require('../../img/healer/icEdit.png')}
            style={{width: 45,height: 45}}
          />
        </TouchableOpacity>
        <View style={styles.panelHeader}>
          <Image
            source={image}
            style={{width:imageWidth, height:imageHeight, marginRight: 10}}
          />
          <Text style={[
            CommonStyles.itemHeaderText,
            CommonStyles.greyColor,
            CommonStyles.mediumBold,
          ]}>
            {insurranceTitle}
          </Text>
        </View>
        <View style={styles.panelBody}>
          <View style={styles.infoField}>
            <Text style={[
              CommonStyles.normalText,
              CommonStyles.greyColor,
              CommonStyles.regularBold,
            ]}>
              Fullname
            </Text>
            <Text style={[CommonStyles.blackColor,styles.value]}>
              {name}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.infoField}>
              <Text style={[
                CommonStyles.normalText,
                CommonStyles.greyColor,
                CommonStyles.regularBold,
              ]}>
                Enrollee ID
              </Text>
              <Text style={[CommonStyles.blackColor,styles.value]}>
                {code}
              </Text>
            </View>
            <View style={styles.infoField}>
              <Text style={[
                CommonStyles.normalText,
                CommonStyles.greyColor,
                CommonStyles.regularBold,
              ]}>
                Group #
              </Text>
              <Text style={[CommonStyles.blackColor,styles.value]}>
                {group}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.infoField}>
              <Text style={[
                CommonStyles.normalText,
                CommonStyles.greyColor,
                CommonStyles.regularBold,
              ]}>
                Date Effective
              </Text>
              <Text style={[CommonStyles.blackColor,styles.value]}>
                {date}
              </Text>
            </View>
            <View style={styles.infoField}>
              <Text style={[
                CommonStyles.normalText,
                CommonStyles.greyColor,
                CommonStyles.regularBold,
              ]}>
                Plan
              </Text>
              <Text style={[CommonStyles.blackColor,styles.value]}>
                {plan}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: 'rgb(243,246,254)'
  },
  panelBody: {
    paddingVertical: 17,
    paddingHorizontal: 20,
  },
  infoField: {
    width: 205,
    marginBottom: 13,
  },
  value: {
    lineHeight: 23,
    fontSize: 20
  }
});
