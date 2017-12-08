import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Svg, {
  Ellipse,
  Rect,
  Defs,
  Stop,
  RadialGradient,
  Path
} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import CommonStyles, { deviceWidth,deviceHeight,NAV_HEIGHT } from '../styles/CommonStyles';

export default class SingleScreenCustomNavbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.navbar}>
        <View style={styles.leftButtons}>
          <TouchableWithoutFeedback
            onPress={this.onClickBackButton.bind(this)}
          >
            <View style={styles.nativeFeedback}>
              <Icon
                name="md-arrow-back"
                size={30}
                color="rgb(150,150,150)"
                style={{width: 18.5}}
              />
              <View style={{
                marginLeft: 3,
                width: 5.5,
                height: 2.5,
                backgroundColor: 'rgb(150,150,150)'}}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.rightButtons}>
          {this.props.rightButtons != null &&
            this.props.rightButtons.map(button => (
              <View key={button.key}>
                <TouchableWithoutFeedback
                  onPress={button.buttonAction}
                >
                  <View style={[styles.nativeFeedback, {justifyContent:'flex-end'}]}>
                    <Text style={[
                      CommonStyles.headerText,
                      CommonStyles.softBlueColor,
                      CommonStyles.regularBold,
                    ]}>
                      Skip
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            ))
          }
        </View>
      </View>
    );
  }

  onClickBackButton() {
    this.props.navigator.pop({});
  }
}

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: deviceWidth,
    height: 45,
    elevation: 18,
    backgroundColor: '#FFFFFF'
  },
  leftButtons: {
    width: deviceWidth / 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightButtons: {
    width: deviceWidth / 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  nativeFeedback: {
    height: NAV_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  }
});
