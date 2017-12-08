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
  Alert,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import CommonStyles, { NAV_HEIGHT } from '../styles/CommonStyles';
import ListItem from '../components/ListItem';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class ResultFindDoctorScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;
    
  constructor(props) {
    super(props);
    this. state = {
      doctorsList: [
        {
          id: 0,
          imageUrl: require('../../img/person/pixta14912862M.png'),
          itemTitle: 'May Hampton',
          careerText: 'Cardiologist',
          distanceText: 0.8,
          imageWidth: 70,
          imageHeight: 70,
          isSpecial: true
        },
        {
          id: 1,
          imageUrl: require('../../img/person/pixta19791094M.png'),
          itemTitle: 'Jose Holland',
          careerText: 'Pediatrician',
          distanceText: 0.8,
          imageWidth: 70,
          imageHeight: 70,
          isSpecial: false 
        },
        {
          id: 2,
          imageUrl: require('../../img/person/pixta19279319M.png'),
          itemTitle: 'Fannie Larson',
          careerText: 'Gynecological',
          distanceText: 0.8,
          imageWidth: 70,
          imageHeight: 70,
          isSpecial: true
        },
        {
          id: 3,
          imageUrl: require('../../img/person/pixta21931547M.png'),
          itemTitle: 'Della Jensen',
          careerText: 'Cardiologist',
          distanceText: 0.8,
          imageWidth: 70,
          imageHeight: 70,
          isSpecial: true
        },
        {
          id: 4,
          imageUrl: require('../../img/person/pixta14912862M.png'),
          itemTitle: 'May Hampton',
          careerText: 'Cardiologist',
          distanceText: 0.8,
          imageWidth: 70,
          imageHeight: 70,
          isSpecial: true,
        },
      ]
    }
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Doctors'
        />
        <View>
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
                  150
                </Text>
                <Text style={[
                  CommonStyles.lightgreyColor,
                  CommonStyles.regularBold,
                  {marginLeft: 5, fontSize: 16}
                ]}>
                  doctors near
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
                  this.state.doctorsList.map((item, index) => (
                    <ListItem
                      key={item.id}
                      imageUrl={item.imageUrl}
                      itemTitle={item.itemTitle}
                      careerText={item.careerText}
                      distanceText={item.distanceText}
                      imageWidth={item.imageWidth}
                      imageHeight={item.imageHeight}
                      isSpecial={item.isSpecial}
                      onPressButton={this._handleClickListDoctorsItem.bind(this)}
                    />
                  ))
                }
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }

  // Goto DoctorDetailsScreen
  _handleClickListDoctorsItem() {
    this.props.navigator.push({
      title: "Doctor Details",
      screen: "Healer.DoctorDeatailsScreen"
    });
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
