import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import CommonStyles, {deviceWidth} from '../styles/CommonStyles';

export default class SelectBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      label,
      onTouchSelectBox, 
    } = this.props

    return (
      <TouchableOpacity
        style={styles.opacity}
        onPress={onTouchSelectBox}>
        <View style={CommonStyles.selectboxField}>
          <Text style={CommonStyles.selectboxLabel}>{label}</Text>
          <Icon
            style={{fontSize: 20, textAlign: 'center'}}
            name="chevron-thin-down"
            color="rgb(229,229,229)"
          />
        </View>
      </TouchableOpacity>
    ); 
  }
}

const styles = StyleSheet.create({
  opacity: {
    height: 45,
    width: deviceWidth - 55,
    marginBottom: 25,
  }
});
