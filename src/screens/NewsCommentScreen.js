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
import PrimeNavigationBar from '../elements/PrimeNavigationBar';

export default class NewsCommentScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
    this. state = {
      commentsList: [
        {
          id: 0,
          commentorAva: require('../../img/person/oval_1.png'),
          commentorName: 'Jesse Ryan',
          commentTime: '3 mins agos',
          commentText: 'I know how terrible it can be for you at nights and even when you wake up'
        },
        {
          id: 1,
          commentorAva: require('../../img/person/oval_2.png'),
          commentorName: 'Sean Neal',
          commentTime: '34 mins agos',
          commentText: 'For a long time, Americans who are increasingly facing low supplies'
        },
        {
          id: 2,
          commentorAva: require('../../img/person/oval_3.png'),
          commentorName: 'Kyle Powell',
          commentTime: '58 mins agos',
          commentText: 'Candidiasis can be a pesky infection to treat, more so since the pharmaceutical'
        },
        {
          id: 3,
          commentorAva: require('../../img/person/oval_4.png'),
          commentorName: 'Brett Meyer',
          commentTime: '3 mins agos',
          commentText: 'For more than 10 years, Beth McFadden, a 44-year- old mother of three'
        },
      ]
    }
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <PrimeNavigationBar
          navigator={this.props.navigator}
          titleText='Comment'
        />
        <ScrollView style={CommonStyles.noTabScrollView}>
          <View style={CommonStyles.wrapperBox}>
            {
              this.state.commentsList.map((item, index) => (
                <Item
                  key={item.id}
                  commentorAva={item.commentorAva}
                  commentorName={item.commentorName}
                  commentTime={item.commentTime}
                  commentText={item.commentText}
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
      commentorAva,
      commentorName,
      commentText,
      commentTime
    } = this.props;

    return (
      <View style={[CommonStyles.itemWhiteBox, {padding: 16}]}>
        <View style={styles.commentorInfo}>
          <View style={styles.leftCol}>
            <Image
              source={commentorAva}
              style={[CommonStyles.borderRadius, {width: 40, height: 40}]}
            />  
            <View style={styles.commentorName}>
              <Text style={[
                CommonStyles.itemHeaderText,
                CommonStyles.blackColor,
                CommonStyles.mediumBold,
              ]}>
                {commentorName}
              </Text>
            </View>
          </View>
          <View style={styles.rightCol}>
            <Text style={[
              CommonStyles.smallText,
              CommonStyles.lightgreyColor,
              CommonStyles.mediumBold,
            ]}>
            {commentTime}
            </Text>
          </View>
        </View>
        <Text style={[
          CommonStyles.normalText,
          CommonStyles.greyColor,
          CommonStyles.regularBold,
        ]}>
          {commentText}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  commentorInfo: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    marginBottom: 10
  },
  leftCol: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentorName: {
    marginLeft: 10,
  },
  rightCol: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
