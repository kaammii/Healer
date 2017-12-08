import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';

import CommonStyles, {
  deviceWidth,
  deviceHeight,
  NAV_HEIGHT
} from '../../../styles/CommonStyles';

export default class SlideItem extends Component {
  constructor(props) {
    super(props);
    this. state = {
      services: [
        {
          id: 0,
          text: '2 Doctor',
        },
        {
          id: 1,
          text: '3 Book Appointment',
        },
        {
          id: 2,
          text: '1 Free Exams',
        },
        {
          id: 3,
          text: '4 Hours Call',
        }
      ]
    }
  }

  render() {
    const { servicePrice } = this.props;
    return (
      <View style={styles.slide}>
        <View style={styles.priceContainer}>
          <Text style={[
            CommonStyles.semiBold,
            CommonStyles.whiteColor,
            {fontSize: 48}
          ]}>
            ${servicePrice}
          </Text>
          <Text style={[
            CommonStyles.light,
            CommonStyles.whiteColor,
            {fontSize: 15, opacity: 0.6}
          ]}>
            Per Month
          </Text>
        </View>
        <View style={styles.servicesContainer}>
          {
            this.state.services.map((item, index) => (
              <Text 
                key={item.id}
                style={[
                  CommonStyles.regularBold,
                  CommonStyles.whiteColor,
                  CommonStyles.headerText,
                  {lineHeight: 50}
                ]}
              >
                {item.text} 
              </Text>
            ))
          } 
        </View> 
      </View>
    );
  }
}

const elementHeight = NAV_HEIGHT + 99;
const itemWidth = deviceWidth - 85;
const itemHeight = deviceHeight - elementHeight - 70;

const styles = StyleSheet.create({
  slide: {
    alignItems: 'center',
    width: itemWidth,
    height: itemHeight,
    borderRadius: 8,
    backgroundColor: 'rgb(105,105,105)',
  },
  priceContainer: {
    alignItems: 'center',
    marginTop: itemHeight * 0.06,
    marginBottom: itemHeight * 0.09,
  },
  servicesContainer: {
    alignItems: 'center',
  },
});
