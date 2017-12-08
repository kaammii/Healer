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

import CommonStyles from '../styles/CommonStyles';
import DetailItem from '../components/DetailItem';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class DrugsDetailsScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Amoxicllin'
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
            <Image
              source={require('../../img/person/mockUp.png')}
              style={styles.drugsImage}
            />
            <DetailItem 
              headerText='What is amoxicillin?'
              detailText='Amoxicillin is used to treat many different types of infection caused by bacteria, such as tonsillitis…'
            />
            <DetailItem 
              headerText='Important Information'
              detailText='Do not use this medication if you are allergic to amoxicillin or to any other  penicillin antibiotic, such as ampicillin'
            />
            <DetailItem 
              headerText='Amoxicillin side effects'
              detailText='Amoxicillin is used to treat many different types of infection caused by bacteria, such as tonsillitis…'
            />
          </View>
        </ScrollView>
      </View>
    );
  }

  _handleClickHeartButton() {
    // TODO: Click heart button
  }
}

const styles = StyleSheet.create({
  drugsImage: {
    width: 340,
    height: 225,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 20
  },
});
