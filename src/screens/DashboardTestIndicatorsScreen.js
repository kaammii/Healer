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
import GradientNavigationBar from '../elements/GradientNavigationBar';
import CustomTabBar from '../components/CommonTabBar';

export default class DashboardTestIndicatorsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Test Indicators'
          isBack={false} 
          rightButtons={
            [
              {
                key: 1,
                buttonIcon: require('../../img/healer/search.png'),
                buttonAction: this.onClickSearchButton.bind(this),
                buttonWidth: 22,
                buttonHeight: 22,
              },
              {
                key: 2,
                buttonIcon: require('../../img/healer/settings.png'),
                buttonAction: this.onClickSettingButton.bind(this),
                buttonWidth: 22,
                buttonHeight: 22,
              }
            ]
          }
        />
        <ScrollView style={CommonStyles.scrollView}>
          <View style={CommonStyles.smallWrapperBox}>
            <Item
              headerText='Desinfectant'
              image={require('../../img/healer/desinfectant.png')}
              imageWidth={17}
              imageHeight={23}
            />
            <Item
              headerText='Transfusion'
              image={require('../../img/healer/transfusion.png')}
              imageWidth={17}
              imageHeight={23}
            />
          </View>
        </ScrollView>
        <CustomTabBar
          navigator={this.props.navigator}
          isActive='tab3'
        />
      </View>
    );
  }

  onClickSearchButton() {
    // TODO: Click search button
  }

  onClickSettingButton() {
    this.props.navigator.push({
      screen: "Healer.SettingsScreen",
      animated: true,
    });
  }
}

// Private component
class Item extends React.Component {
  render() {
    const {
      headerText,
      image,
      imageWidth,
      imageHeight,
    } = this.props;

    return (
      <View style={CommonStyles.itemWhiteBox}>
        <TouchableOpacity style={CommonStyles.editButton}>
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
            {headerText}
          </Text>
        </View>
        <View style={styles.panelBody}>
        </View>
        <View style={styles.panelFooter}>
          <View style={styles.panelFooterCol}>
            <Image
              source={require('../../img/healer/cancel.png')}
              style={{width: 16, height: 16}}
            />
            <Text style={[
              CommonStyles.regularBold,
              CommonStyles.greyColor,
              {fontSize: 14, marginLeft: 5}
            ]}>
              Details
            </Text>
          </View>
          <View style={{
            height: 20,
            width: 0.7,
            marginLeft: 5,
            marginRight: 5,
            backgroundColor: 'rgb(229,229,229)'}} />
          <View style={styles.panelFooterCol}>
            <Image
              source={require('../../img/healer/greyTarget.png')}
              style={{width: 16, height: 16}}
            />
            <Text style={[
              CommonStyles.regularBold,
              CommonStyles.greyColor,
              {fontSize: 14, marginLeft: 5}
            ]}>
              Goal 
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panelHeader: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: 'rgb(243,246,254)'
  },
  panelBody: {
    height: 150,
    paddingTop: 25,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(229,229,229)',
  },
  panelFooter: {
    flexDirection: 'row',
    paddingVertical: 16,
  },
  panelFooterCol: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
