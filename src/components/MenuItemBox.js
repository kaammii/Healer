import React, { Component } from 'react';
import FitImage from 'react-native-fit-image';
import ResponsiveImage from 'react-native-responsive-image';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  TouchableHighlight,
} from 'react-native';
import CommonStyles from '../styles/CommonStyles';
import LinearGradient from 'react-native-linear-gradient';

export default class MenuItemBox extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LinearGradient
        start={{x: 0.2, y: 0.2}} end={{x: 1.0, y: 2.0}}
        colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
        style={styles.boxMain}>
        <TouchableHighlight 
          underlayColor = {'rgb(75,102,234)'}
          style={styles.highLightBoxMain}
          onPress={this.props.onPressBoxItem}>
          <View>
            <Image
              source={this.props.boxIcon}
              style={[styles.boxIcon, {width:this.props.boxIconWidth, height:this.props.boxIconHeight}]}
            />
            <Text style={[
              CommonStyles.extraBold,
              CommonStyles.itemHeaderText,
              CommonStyles.whiteColor,
            ]}>
              {this.props.boxTitle}
            </Text>
            <Text style={[
              CommonStyles.whiteColor,
              CommonStyles.regularBold,
              {fontSize: 14, opacity: 0.6}
            ]}>
              {this.props.boxSubTitle}
            </Text>
          </View>
        </TouchableHighlight>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  boxMain: {
    height: 135, 
    borderWidth: 0,
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 15,
    elevation: 12,
  },
  highLightBoxMain: {
    height: 135, 
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderRadius: 9,
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  boxIcon: {
    marginBottom: 24,
  },
});

const PropTypes = React.PropTypes;

MenuItemBox.propTypes = {
  boxTitle: PropTypes.string,
  boxSubTitle: PropTypes.string,
  onPressBoxItem: PropTypes.func,
  boxIcon: PropTypes.number,
  boxIconHeight: PropTypes.number,
  boxIconWidth: PropTypes.number,
};
