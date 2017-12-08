import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import CommonStyles, {
  deviceWidth,
  deviceHeight,
  NAV_HEIGHT
} from '../../styles/CommonStyles';
import SlideItem from '././slide-item/SlideItem';

export default class BasicService extends Component {
  constructor(props) {
    super(props);
    this. state = {
      slideItems: [
        {
          id: 0,
          servicePrice: '149'
        },
        {
          id: 1,
          servicePrice: '169'
        },
        {
          id: 2,
          servicePrice: '179'
        },
      ]
    }
  }

  render() {
    const itemWidth = deviceWidth - 85;

    return (
      <Carousel
        sliderWidth={deviceWidth}
        itemWidth={itemWidth}
        currentIndex={2}
      >
        {
          this.state.slideItems.map((item, index) => (
            <SlideItem
              key={item.id}
              servicePrice={item.servicePrice}
            />
          ))
        }
      </Carousel>
    );
  }
}
