import React, { Component } from 'react';
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

import CommonStyles from '../styles/CommonStyles';
import ListItem from '../components/ListItem';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class DoctorFavoritesScreen extends Component {
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
          titleText='Doctor Favorites'
        />
        <ScrollView style={CommonStyles.noTabScrollView}>
          <View style={CommonStyles.wrapperBox}>
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
        </ScrollView>
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
