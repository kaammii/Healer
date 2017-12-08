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

import CommonStyles, {NAV_HEIGHT} from '../styles/CommonStyles';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class HealerBlogsScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
    this. state = {
      postsList: [
        {
          id: 0,
          postTitle: 'Can It Help Your Blurred Vision',
          postContent: 'For many years, when people thought of alcohol and drug'
        },
        {
          id: 1,
          postTitle: 'Can It Help Your Blurred Vision',
          postContent: 'For many years, when people thought of alcohol and drug'
        },
      ]
    }
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Healer Blogs'
          isModal={true}
          rightButtons={
            [
              {
                key: 1,
                buttonIcon: require('../../img/healer/shapes.png'),
                buttonAction: this._handleClickShapesButton.bind(this),
                buttonWidth: 14,
                buttonHeight: 22,
              },
            ]
          }
        />
        <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar />}
          tabBarUnderlineStyle={{
            backgroundColor: '#FFFFFF'
          }}
          tabBarBackgroundColor={'rgba(75,102,234,0.9)'}
          tabBarActiveTextColor={'#FFFFFF'}
          tabBarInactiveTextColor={'rgba(255,255,255,0.6)'}
          tabBarTextStyle={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 16
          }}
          style={{
            marginTop: NAV_HEIGHT,
          }}
        >
          <ScrollView tabLabel='Food'>
            <View style={CommonStyles.wrapperBox}>
              {
                this.state.postsList.map((item, index) => (
                  <Item 
                    key={item.id}
                    postTitle={item.postTitle}
                    postContent={item.postContent}
                    onPressItem={this._handleClickListNewsItem.bind(this)}
                  />
                ))
              }
            </View>
          </ScrollView>
          <ScrollView tabLabel='Fitness'>
          </ScrollView>
          <ScrollView tabLabel='LifeStyle'>
          </ScrollView>
          <ScrollView tabLabel='Doctors'>
          </ScrollView>
        </ScrollableTabView>
      </View>
    );
  }

  // Go to NewsDetailssScreen 
  _handleClickListNewsItem() {
    this.props.navigator.push({
      screen: "Healer.NewsDetailsScreen"
    });
  }

  _handleClickShapesButton() {
    // TODO: Click shapes button
  }
}

// Private component
class Item extends React.Component {
  render() {
    const {
      postTitle,
      postContent,
      onPressItem,
    } = this.props;

    return (
      <View style={CommonStyles.itemWhiteBox}>
        <TouchableHighlight
          underlayColor='transparent'
          style={styles.highLight}
          onPress={onPressItem}>
          <View style={{padding: 15}}>
            <View style={{
              width: 'auto',
              height: 180,
              backgroundColor: 'rgb(150,150,150)'
            }} />
            <Text style={[
              CommonStyles.blackColor,
              CommonStyles.mediumBold,
              {marginTop: 13, marginBottom: 6, fontSize: 16}
            ]}>
              {postTitle}
            </Text>
            <Text style={[
              CommonStyles.shortSmallText,
              CommonStyles.greyColor,
              CommonStyles.regularBold
            ]}>
              {postContent}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hightLight: {
    borderRadius: 12,
  },
});
