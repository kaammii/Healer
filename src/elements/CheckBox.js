'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
const CB_ENABLED_IMAGE = require('./cb_enabled.png');
const CB_DISABLED_IMAGE = require('./cb_disabled.png');

export default class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      internalChecked: false
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    if (this.props.onChange &&  typeof this.props.checked === 'boolean') {
      this.props.onChange(this.props.checked);
    } else {
      let internalChecked = this.state.internalChecked;

      if(this.props.onChange){
        this.props.onChange(internalChecked);
      }
      this.setState({
        internalChecked: !internalChecked
      });
    }
  }

  render() {
    let container = (
      <View style={this.props.containerStyle || styles.checkboxField}>
        <Image
          style={this.props.checkboxStyle || styles.checkboxImg}
          source={source}
        />
        <View style={styles.labelContainer}>
          <Text style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
        </View>
      </View>
    );

    let source;

    if(typeof this.props.checked === 'boolean') {
      source = this.props.checked ? this.props.checkedImage : this.props.uncheckedImage;
    } else {
      source = this.state.internalChecked ? this.props.checkedImage : this.props.uncheckedImage;
    }


    if (this.props.labelBefore) {
      container = (
        <View style={this.props.containerStyle || [styles.checkboxField, styles.flexContainer]}>
          <View style={styles.labelContainer}>
            <Text
              numberOfLines={this.props.labelLines}
              style={[styles.label, this.props.labelStyle]}
            >
              {this.props.label}
            </Text>
          </View>
          <Image
            style={[styles.checkboxImg, this.props.checkboxStyle]}
            source={source}
          />
        </View>
      );
    } else {
      container = (
        <View style={[styles.checkboxField, this.props.containerStyle]}>
          <Image
            style={[styles.checkboxImg, this.props.checkboxStyle]}
            source={source}
          />
          <View style={styles.labelContainer}>
            <Text
              numberOfLines={this.props.labelLines}
              style={[styles.label, this.props.labelStyle]}
            >
              {this.props.label}
            </Text>
          </View>
        </View>
      );
    }

    return (
      <TouchableHighlight
        onPress={this.onChange}
        underlayColor={this.props.underlayColor}
        style={styles.flexContainer}
      >
        {container}
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  checkboxField: {
    flexDirection: 'row',
  },
  checkboxImg: {
    width: 40,
    height: 40 
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  label: {
    color: 'rgb(150,150,150)',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  }
});

const PropTypes = React.PropTypes;

CheckBox.propTypes = {
  label: PropTypes.string,
  labelBefore: PropTypes.bool,
  labelStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]),
  labelLines: PropTypes.number,
  checkboxStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]),
  containerStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]),
  checked: PropTypes.bool,
  checkedImage: PropTypes.number,
  uncheckedImage: PropTypes.number,
  underlayColor: PropTypes.string,
  onChange: PropTypes.func
};

CheckBox.defaultProps = {
  label: 'Label',
  labelLines: 1,
  labelBefore: false,
  checked: null,
  checkedImage: CB_ENABLED_IMAGE,
  uncheckedImage: CB_DISABLED_IMAGE,
  underlayColor: 'white'
};
