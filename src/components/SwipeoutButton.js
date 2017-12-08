import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  TouchableHighlight
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class SwipeoutButton extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      onPressButton,
      btnText,
    } = this.props;

    return (
      <LinearGradient
        start={{x: 0.4, y: 0.5}} end={{x: 1.0, y: 1.0}}
        colors={['rgb(75,102,234)', 'rgb(130,160,247)']}
        style={styles.button}>
        <TouchableHighlight
          style={styles.button}>
          <Text style={styles.text}>Delete</Text>
        </TouchableHighlight>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
  },
  text: {
    color: '#FFFFFF',
  }
});

