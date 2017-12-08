import React, { Component } from 'react';
import FitImage from 'react-native-fit-image';
import ResponsiveImage from 'react-native-responsive-image';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import CommonStyles, { NAV_HEIGHT } from '../styles/CommonStyles';
import ListItem from '../components/ListItem';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class ResultFindHospitalScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
    this. state = {
      hospitalsList: [
        {
          id: 0,
          imageUrl: require('../../img/person/logoHospital_1.png'),
          itemTitle: 'Health Hospital',
          careerText: 'Cardiologist',
          distanceText: 0.8,
          imageWidth: 60,
          imageHeight: 60,
        },
        {
          id: 1,
          imageUrl: require('../../img/person/logoHospital_2.png'),
          itemTitle: 'Medical Hospital',
          careerText: 'Cardiologist',
          distanceText: 0.8,
          imageWidth: 60,
          imageHeight: 59,
        },
        {
          id: 2,
          imageUrl: require('../../img/person/logoHospital_3.png'),
          itemTitle: 'Healer Hospital',
          careerText: 'Cardiologist',
          distanceText: 0.8,
          imageWidth: 60,
          imageHeight: 60.5,
        },
        {
          id: 3,
          imageUrl: require('../../img/person/logoHospital_4.png'),
          itemTitle: 'Medic Heart',
          careerText: 'Cardiologist',
          distanceText: 0.8,
          imageWidth: 60.5,
          imageHeight: 60,
        },
        {
          id: 4,
          imageUrl: require('../../img/person/logoHospital_1.png'),
          itemTitle: 'Healthy Hospital',
          careerText: 'Cardiologist',
          distanceText: 0.8,
          imageWidth: 60,
          imageHeight: 60,
        },
      ]
    }
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Hospital'
        />
        <ScrollView style={CommonStyles.noTabScrollView}>
          <View style={CommonStyles.wrapperBox}>
            <View style={styles.resultTextBox}>
              <Text style={[
                CommonStyles.lightgreyColor,
                CommonStyles.regularBold,
                {fontSize: 16}
              ]}>
                Found
              </Text>
              <Text style={[
                CommonStyles.blackColor,
                CommonStyles.mediumBold,
                {marginLeft: 5, fontSize: 16}
              ]}>
               169 
              </Text>
              <Text style={[
                CommonStyles.lightgreyColor,
                CommonStyles.regularBold,
                {marginLeft: 5, fontSize: 16}
              ]}>
                hospital near
              </Text>
              <Text style={[
                CommonStyles.blackColor,
                CommonStyles.mediumBold,
                {marginLeft: 5, fontSize: 16}
              ]}>
                NewYork
              </Text>
            </View>
            <View style={styles.resultListBox}>
              {
                this.state.hospitalsList.map((item, index) => (
                  <ListItem
                    key={item.id}
                    imageUrl={item.imageUrl}
                    itemTitle={item.itemTitle}
                    careerText={item.careerText}
                    distanceText={item.distanceText}
                    imageWidth={item.imageWidth}
                    imageHeight={item.imageHeight}
                  />
                ))
              }
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  resultTextBox: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  resultListBox: {
    flex: 1,
  }
});
