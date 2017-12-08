import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

import CommonStyles, { deviceWidth,NAV_HEIGHT } from '../styles/CommonStyles';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class DrugsShopScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
    this. state = {
      drugsShopList: [
        {
          id: 0,
          drugImage: require('../../img/person/mockUp.png'),
          drugName: 'Healer Drugs',
          price: '29.00',
        },
        {
          id: 1,
          drugImage: require('../../img/person/mockUp.png'),
          drugName: 'Healer Drugs',
          price: '38.00',
        },
        {
          id: 2,
          drugImage: require('../../img/person/mockUp.png'),
          drugName: 'Healer Drugs',
          price: '47.00',
        },
        {
          id: 3,
          drugImage: require('../../img/person/mockUp.png'),
          drugName: 'Healer Drugs',
          price: '56.00',
        },
        {
          id: 4,
          drugImage: require('../../img/person/mockUp.png'),
          drugName: 'Healer Drugs',
          price: '29.00',
        },
        {
          id: 5,
          drugImage: require('../../img/person/mockUp.png'),
          drugName: 'Healer Drugs',
          price: '38.00',
        },
      ]
    }
  }

  render() {
    const words = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'L'];
    const tabContent = words.map((word, index) =>
        <ScrollView key={index} tabLabel={word}></ScrollView>
    );

    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Drugs Shop'
          rightButtons={
            [
              {
                key: 1,
                buttonIcon: require('../../img/healer/search.png'),
                buttonAction: this._handleClickSearchButton.bind(this),
                buttonWidth: 22,
                buttonHeight: 22,
              },
              {
                key: 2,
                buttonIcon: require('../../img/healer/shoppingBag.png'),
                buttonAction: this._handleClickShoppingBagButton.bind(this),
                buttonWidth: 17,
                buttonHeight: 22,
              },
            ]
          }
        />
        <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar />}
          tabBarUnderlineStyle={{
            backgroundColor: 'rgb(75,102,234)'
          }}
          tabBarBackgroundColor={'#fff'}
          tabBarActiveTextColor={'rgb(75,102,234)'}
          tabBarInactiveTextColor={'rgb(105,105,105)'}
          tabBarTextStyle={{
            fontFamily: 'Poppins-Medium',
            fontSize: 15 
          }}
          style={{
            marginTop: NAV_HEIGHT,
          }}
        >
          <ScrollView tabLabel='A'>
            <View style={CommonStyles.wrapperBox}>
              <View style={styles.drugsShopContainer}>
                {
                  this.state.drugsShopList.map((item, index) => (
                    <Item
                      key={item.id}
                      drugImage={item.drugImage}
                      drugName={item.drugName}
                      price={item.price}
                      onPressItem={this._handleClickListDrugsShopItem.bind(this)}
                    />
                  ))
                }
              </View>
            </View>
          </ScrollView>
          {tabContent}
        </ScrollableTabView>
      </View>
    );
  }

  _handleClickShoppingBagButton() {
    // TODO: Click shoppingBag button
  }

  _handleClickSearchButton() {
    // TODO: Click search button
  }

  _handleClickListDrugsShopItem() {
    this.props.navigator.push({
      title: "Amoxicillin",
      screen: "Healer.DrugsShopDetailScreen"
    });
  }
}

// Private component
class Item extends React.Component {
  render() {
    const {
      drugImage,
      drugName,
      price,
      onPressItem,
    } = this.props;

    return (
      <View style={styles.itemWhiteBox}>
        <TouchableHighlight
          underlayColor='transparent'
          onPress={onPressItem}>
          <View style={styles.drugsListContainer}>
            <Image
              source={drugImage}
              style={{width: 115, height: 115, marginBottom: 5}}
            />
            <Text style={[
              CommonStyles.itemHeaderText,
              CommonStyles.blackColor,
              CommonStyles.mediumBold,
            ]}>
              {drugName}
            </Text>
            <Text style={[
              CommonStyles.headerText,
              CommonStyles.darkSkyBlueColor,
              CommonStyles.regularBold,
            ]}>
              ${price}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drugsShopContainer: {
    width: deviceWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 7.5,
    marginRight: 7.5,
  },
  itemWhiteBox: {
    width: (deviceWidth - 45) / 2,
    marginRight: 7.5,
    marginLeft: 7.5,
    marginTop: 7.5,
    marginBottom: 7.5,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    elevation: 6,
  },
  drugsListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 10,
  },
}) 
