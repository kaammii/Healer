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

import CommonStyles, { deviceHeight,shadowOpt } from '../styles/CommonStyles';
import DetailItem from '../components/DetailItem';
import GradientButton from '../elements/GradientButton';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class DrugsShopDetailsScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Amoxiclin'
          rightButtons={
            [
              {
                key: 1,
                buttonIcon: require('../../img/healer/shoppingBag.png'),
                buttonAction: this._handleClickShoppingBagButton.bind(this),
                buttonWidth: 17,
                buttonHeight: 22,
              },
            ]
          }
        />
        <ScrollView style={CommonStyles.noTabScrollView}>
          <View style={CommonStyles.wrapperBox}>
            <Image
              source={require('../../img/person/mockUp.png')}
              style={styles.drugsImage}
            />
            <View style={styles.priceContainer}>
              <Text style={[
                CommonStyles.darkSkyBlueColor,
                CommonStyles.mediumBold,
                {fontSize: 24}]}>
                $29.00
              </Text>
            </View>
            <DetailItem 
              headerText='What is amoxicillin?'
              detailText='Amoxicillin is used to treat many different types of infection caused by bacteria, such as tonsillitis…'
            />
            <DetailItem 
              headerText='Important Information'
              detailText='Do not use this medication if you are allergic to amoxicillin or to any other  penicillin antibiotic, such as ampicillin'
            />
            <View style={[CommonStyles.buttonBox, {marginTop: -18, marginBottom: 10, elevation: 12}]}>
              <GradientButton
                onPressButton={this._handleBuyDrugs.bind(this)}
                setting={shadowOpt}
                btnText="BUY NOW"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  _handleBuyDrugs() {
    // TODO:
  }

  _handleClickShoppingBagButton() {
    // TODO: Click shoppingBag button
  }
}

const styles = StyleSheet.create({
  drugsImage: {
    position: 'relative',
    width: 340,
    height: 225,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 20
  },
  priceContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginLeft: 15,
  }
});
