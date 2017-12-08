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
import ItemWithImage from '../components/ItemWithImage';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class ListDrugsScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
    this. state = {
      drugsList: [
        {
          id: 0,
          itemImg: require('../../img/healer/pill.png'),
          iconWidth: 22,
          iconHeight: 22,
          drugName: 'Augmentin Sachet'
        },
        {
          id: 1,
          itemImg: require('../../img/healer/bluePills3.png'),
          iconWidth: 22,
          iconHeight: 22,
          drugName: 'BoneSure'
        },
        {
          id: 2,
          itemImg: require('../../img/healer/pill.png'),
          iconWidth: 22,
          iconHeight: 22,
          drugName: 'Cetirizin hydrochlorid'
        },
        {
          id: 3,
          itemImg: require('../../img/healer/bluePills3.png'),
          iconWidth: 22,
          iconHeight: 22,
          drugName: 'Doxycyclin'
        },
        {
          id: 4,
          itemImg: require('../../img/healer/pill.png'),
          iconWidth: 22,
          iconHeight: 22,
          drugName: 'Nizoral Cream'
        },
        {
          id: 5,
          itemImg: require('../../img/healer/bluePills3.png'),
          iconWidth: 22,
          iconHeight: 22,
          drugName: 'Prednisolon'
        },

        {
          id: 6,
          itemImg: require('../../img/healer/pill.png'),
          iconWidth: 22,
          iconHeight: 22,
          drugName: 'Gastropulgite'
        },
      ]
    }
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Drugs List'
          rightButtons={
            [
              {
                key: 1,
                buttonIcon: require('../../img/healer/search.png'),
                buttonAction: this._handleClickSearchButton.bind(this),
                buttonWidth: 22,
                buttonHeight: 22,
              },
            ]
          }
        />
        <ScrollView style={CommonStyles.noTabScrollView}>
          <View style={CommonStyles.wrapperBox}>
            {
              this.state.drugsList.map((item, index) => (
                <ItemWithImage
                  key={item.id}
                  itemImg={item.itemImg}
                  iconWidth={item.iconWidth}
                  iconHeight={item.iconHeight}
                  itemHeaderText={item.drugName}
                  onPressItem={this._handleClickListDrugsItem.bind(this)}
                />
              ))
            }
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.addButton}
          onPress={this._handleClickAddDrugs.bind(this)}>
          <Image
            source={require('../../img/healer/icAdd.png')}
            style={{width: 60,height: 62}}
          />
        </TouchableOpacity>
      </View>
    );
  }

  _handleClickSearchButton() {
    // TODO: Click search button
  }

  // Goto DoctorDetailsScreen
  _handleClickListDrugsItem() {
    this.props.navigator.push({
      title: 'Drugs Detail',
      screen: "Healer.DrugsDetailsScreen"
    });
  }

  // Goto AddDrugsScreen
  _handleClickAddDrugs() {
    this.props.navigator.push({
      title: 'Add Drugs',
      screen: "Healer.AddDrugsScreen"
    });
  }
}

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 13,
    right: 8,
  },
});
