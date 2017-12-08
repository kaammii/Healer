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
import CustomTabBar from '../components/CommonTabBar';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class ListDoctorsScreen extends Component {
  constructor(props) {
    super(props);
    this. state = {
      doctorsList: [
        {
          id: 0,
          doctorAva: require('../../img/person/pixta14912862M.png'),
          doctorName: 'May Hampton',
          career: 'Cardiologist',
          distanceText: 0.8,
          doctorAvaWidth: 70,
          doctorAvaHeight: 70,
          isSpecial: true
        },
        {
          id: 1,
          doctorAva: require('../../img/person/pixta19791094M.png'),
          doctorName: 'Jose Holland',
          career: 'Pediatrician',
          distanceText: 0.8,
          doctorAvaWidth: 70,
          doctorAvaHeight: 70,
          isSpecial: false 
        },
        {
          id: 2,
          doctorAva: require('../../img/person/pixta19279319M.png'),
          doctorName: 'Fannie Larson',
          career: 'Gynecological',
          distanceText: 0.8,
          doctorAvaWidth: 70,
          doctorAvaHeight: 70,
          isSpecial: true
        },
        {
          id: 3,
          doctorAva: require('../../img/person/pixta21931547M.png'),
          doctorName: 'Della Jensen',
          career: 'Cardiologist',
          distanceText: 0.8,
          doctorAvaWidth: 70,
          doctorAvaHeight: 70,
          isSpecial: true
        },
        {
          id: 4,
          doctorAva: require('../../img/person/pixta14912862M.png'),
          doctorName: 'May Hampton',
          career: 'Cardiologist',
          distanceText: 0.8,
          doctorAvaWidth: 70,
          doctorAvaHeight: 70,
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
          titleText='Doctor'
          isBack={false} 
        />
        <ScrollView style={CommonStyles.scrollView}>
          <View style={CommonStyles.smallWrapperBox}>
            {
              this.state.doctorsList.map((item, index) => (
                <ListItem
                  key={item.id}
                  imageUrl={item.doctorAva}
                  itemTitle={item.doctorName}
                  careerText={item.career}
                  distanceText={item.distanceText}
                  imageWidth={item.doctorAvaWidth}
                  imageHeight={item.doctorAvaHeight}
                  isSpecial={item.isSpecial}
                  onPressButton={this._handleClickListDoctorsItem.bind(this)}
                />
              ))
            }
          </View>
        </ScrollView>
        <CustomTabBar
          navigator={this.props.navigator}
          isActive='tab2'
        />
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
