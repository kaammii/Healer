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
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class BookmarkScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
    this. state = {
      bookmarksList: [
        {
          id: 0,
          newsImage: require('../../img/person/smallImg.png'),
          newsTitle: 'Can It Help Your Blurred Vision Food',
          newsContent: 'For many years, when people thought of alcohol and drug'
        },
        {
          id: 1,
          newsImage: require('../../img/person/smallImg.png'),
          newsTitle: 'Can It Help Your Blurred Vision Food',
          newsContent: 'For many years, when people thought of alcohol and drug'
        },
        {
          id: 2,
          newsImage: require('../../img/person/smallImg.png'),
          newsTitle: 'Can It Help Your Blurred Vision Food',
          newsContent: 'For many years, when people thought of alcohol and drug'

        },
        {
          id: 3,
          newsImage: require('../../img/person/smallImg.png'),
          newsTitle: 'Can It Help Your Blurred Vision Food',
          newsContent: 'For many years, when people thought of alcohol and drug'
        },
      ]
    }
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Bookmark'
        />
        <ScrollView style={CommonStyles.noTabScrollView}>
          <View style={CommonStyles.wrapperBox}>
            {
              this.state.bookmarksList.map((item, index) => (
                <Item
                  key={item.id}
                  newsImage={item.newsImage}
                  newsTitle={item.newsTitle}
                  newsContent={item.newsContent}
                />
              ))
            }
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
      newsImage,
      newsTitle,
      newsContent,
    } = this.props;

    return (
      <View style={[
        CommonStyles.itemWhiteBox,
        {flexDirection: 'row'}
      ]}>
        <View style={styles.leftCol}>
          <Image
            source={newsImage}
            style={{width: 120, height: 120}}
          />  
        </View>
        <View style={styles.rightCol}>
          <View>
            <Text style={[
              CommonStyles.blackColor,
              CommonStyles.mediumBold,
              {marginBottom: 2, fontSize: 16}
            ]}>
              {newsTitle}
            </Text>
            <Text style={[
              CommonStyles.shortSmallText,
              CommonStyles.greyColor,
              CommonStyles.regularBold
            ]}>
              {newsContent}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  leftCol: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightCol: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
