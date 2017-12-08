import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import CommonStyles, { deviceHeight } from '../styles/CommonStyles';
import ItemWithImage from '../components/ItemWithImage';
import CustomTabBar from '../components/CommonTabBar';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class UserProfileScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Profile'
          isBack={false} 
          rightButtons={
            [
              {
                key: 1,
                buttonIcon: require('../../img/healer/settings.png'),
                buttonAction: this.onClickSettingButton.bind(this),
                buttonWidth: 22,
                buttonHeight: 22,
              }
            ]
          }
        />
        <ScrollView style={CommonStyles.scrollView}>
          <View style={styles.avatarBox}>
            <Image
              source={require('../../img/person/avatar_2.png')}
              style={{width: 160, height: 160}}
            />
          </View>
          <View style={styles.nameBox}>
            <Text style={[
              CommonStyles.headerText,
              CommonStyles.blackColor,
              CommonStyles.mediumBold
            ]}>
              Willie Wright
            </Text>
          </View>
          <View style={CommonStyles.itemWhiteBox}>
            <View style={styles.rowTop}>
              <Item
                headerText='Age'
                content='48'
                unitText='years'
                hasPaddingTop={false}
              />
              <Item
                headerText='Blood'
                content='AB'
                unitText=''
                hasPaddingTop={false}
              />
              <Item
                headerText='Gender'
                content='Female'
                unitText=''
                hasPaddingTop={false}
                hasBorderRight={false}
              />
            </View>
            <View style={styles.rowBottom}>
              <Item
                headerText='Height'
                content='198'
                unitText='cm'
              />
              <Item
                headerText='Weight'
                content='66'
                unitText='kg'
              />
              <Item
                headerText='Goal'
                content='78'
                unitText='%'
                hasBorderRight={false}
              />
            </View>
          </View>
          <View style={styles.otherBox}>
            <ItemWithImage
              itemImg={require('../../img/healer/target.png')}
              iconWidth={26}
              iconHeight={26}
              itemHeaderText='Goal Settings'
              onPressItem={this._handleClickGoalSettings.bind(this)}
            />
            <ItemWithImage
              itemImg={require('../../img/healer/heart.png')}
              iconWidth={26}
              iconHeight={23.5}
              itemHeaderText='Doctor Favorites'
              onPressItem={this._handleClickDoctorFavorites.bind(this)}
            />
            <ItemWithImage
              itemImg={require('../../img/healer/umbrella.png')}
              iconWidth={22}
              iconHeight={25}
              itemHeaderText='Insurrance'
              onPressItem={this._handleClickInsurrance.bind(this)}
            />
          </View>
        </ScrollView>
        <CustomTabBar
          navigator={this.props.navigator}
          isActive='tab4'
        />
      </View>
    );
  }

  onClickSettingButton() {
    this.props.navigator.push({
      screen: "Healer.SettingsScreen",
      animated: true,
    });
  }

  // Go to GoalSettingsScreen 
  _handleClickGoalSettings() {
    this.props.navigator.push({
      screen: "Healer.GoalSettingsScreen"
    });
  }

  // Go to DoctorFavoritesScreenr
  _handleClickDoctorFavorites() {
    this.props.navigator.push({
      screen: "Healer.DoctorFavoritesScreen"
    });
  }

  // Go to InsurranceScreen 
  _handleClickInsurrance() {
    this.props.navigator.push({
      screen: "Healer.InsurranceScreen"
    });
  }
}

// Private component
class Item extends React.Component {
  render() {
    const {
      headerText,
      content,
      unitText,
      hasBorderRight=true,
      hasPaddingTop=true
    } = this.props;

    return (
      <View style={[
        styles.itemBox,
        !hasBorderRight && styles.itemBoxNoBorderRight,
        !hasPaddingTop && styles.itemBoxNoPaddingTop
      ]}>
        <Text style={[
          CommonStyles.normalText,
          CommonStyles.greyColor,
          CommonStyles.regularBold,
          {marginBottom: 8}
        ]}>
          {headerText}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <Text style={[
            CommonStyles.headerText,
            CommonStyles.blackColor,
            CommonStyles.regularBold,
          ]}>
            {content}
          </Text>
          <Text style={[
            CommonStyles.smallText,
            CommonStyles.greyColor,
            CommonStyles.light,
          ]}>
            {unitText}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatarBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 15,
  },
  nameBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  rowTop: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(229,229,229)',
    paddingTop: 20,
  },
  rowBottom: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
  itemBox: {
    width: 110,
    height: 110,
    borderRightWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(229,229,229)',
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  itemBoxNoPaddingTop: {
    paddingTop: 0,
  },
  itemBoxNoBorderRight: {
    borderColor: 'transparent',
  },
  otherBox: {
    marginBottom: 28,
  },
});
