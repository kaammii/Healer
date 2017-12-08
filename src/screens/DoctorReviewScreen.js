import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import CommonStyles, { deviceHeight,shadowOpt } from '../styles/CommonStyles';
import GradientButton from '../elements/GradientButton';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class DoctorReviewScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
    this. state = {
      reviewsList: [
        {
          id: 0,
          reviewerAva: require('../../img/person/oval_1.png'),
          reviewerName: 'Jesse Ryan',
          reviewerBirthday: '08-31-2016',
          reviewText: 'I know how terrible it can be for you at nights and even when you wake up'
        },
        {
          id: 1,
          reviewerAva: require('../../img/person/oval_5.png'),
          reviewerName: 'Issac Jones',
          reviewerBirthday: '02-25-2016',
          reviewText: 'I know how terrible it can be for you at nights and even when you wake up'
        },
        {
          id: 2,
          reviewerAva: require('../../img/person/oval_6.png'),
          reviewerName: 'James Hicks',
          reviewerBirthday: '06-27-2016',
          reviewText: 'I know how terrible it can be for you at nights and even when you wake up'
        },
      ]
    }
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Review'
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
            {
              this.state.reviewsList.map((item, index) => (
                <Item
                  key={item.id}
                  reviewerAva={item.reviewerAva}
                  reviewerName={item.reviewerName}
                  reviewerBirthday={item.reviewerBirthday}
                  reviewText={item.reviewText}
                />
              ))
            }
            <View style={[CommonStyles.buttonBox, {marginTop: 80, marginBottom: 10}]}>
              <GradientButton
                onPressButton={this._handleClickWriteReview.bind(this)}
                setting={shadowOpt}
                btnText="WRITE REVIEW"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  // Go to WriteReviewScreen
  _handleClickWriteReview() {
    // TODO:
  }

  _handleClickHeartButton() {
    // TODO: Click heart button
  }
}

// Private component
class Item extends React.Component {
  render() {
    const {
      reviewerAva,
      reviewerName,
      reviewerBirthday,
      reviewText
    } = this.props;

    let starImgs = [];
    for(let i = 1; i <= 4; i++) {
      starImgs.push(
        <Icon
          key={i}
          style={{paddingLeft: 2}}
          name="star-o"
          size={19}
          color="rgb(75,102,234)"
        />
      )        
    }

    return (
      <View style={[CommonStyles.itemWhiteBox, {padding: 16}]}>
        <View style={styles.reviewerInfo}>
          <View style={styles.leftCol}>
            <Image
              source={reviewerAva}
              style={{width: 40, height: 40}}
            />  
            <View style={styles.reviewerName}>
              <Text style={[
                CommonStyles.itemHeaderText,
                CommonStyles.blackColor,
                CommonStyles.mediumBold,
                {marginTop: -6}
              ]}>
              {reviewerName}
              </Text>
              <Text style={[
                CommonStyles.shortSmallText,
                CommonStyles.lightgreyColor,
                CommonStyles.mediumBold,
              ]}>
              {reviewerBirthday}
              </Text>
            </View>
          </View>
          <View style={styles.rightCol}>
            <Icon
              style={{paddingLeft: 2}}
              name="star-o"
              size={19}
              color="rgb(105,105,105)"
            />
            {starImgs}
          </View>
        </View>
        <Text style={[
          CommonStyles.normalText,
          CommonStyles.lightgreyColor,
          CommonStyles.regularBold,
        ]}>
          {reviewText}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  reviewerInfo: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10 
  },
  leftCol: {
    flexDirection: 'row',
  },
  reviewerName: {
    marginLeft: 10,
  },
  rightCol: {
    width: 100,
    flexDirection: 'row',
  },
});
