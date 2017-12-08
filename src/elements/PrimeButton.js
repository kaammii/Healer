import React, { Component } from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import Svg, {
  Ellipse,
  Rect,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
  Path
} from 'react-native-svg';

export default class PrimeButton extends Component {
  render = () => {
    // Get the shadow settings and give them default values
    const {
      setting: {
        btnWidth = 0,
        btnHeight = 0,
        shadowHeight = 100,
        backgroundColor = '#4b66ea',
        color = "#FFFFFF",
        realColor = "#FFFFFF",
        fontSize = 18,
        style = {}
      },
      onPressButton,
      btnText,
    } = this.props;

    // Define button style
    const styles = StyleSheet.create({
      button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: btnWidth,
        height: btnHeight,
        borderRadius: 50,
        backgroundColor: backgroundColor,
      },
      text: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: fontSize,
        color: color,
      },
    });

    // Return a view ,whose background is a svg picture
    return (
      <View>
        <Svg
          width={btnWidth}
          height={shadowHeight}
          style={{position:"absolute",top:0,left:0}}>
          <Defs>
            <RadialGradient
              id="grad"
              cx={btnWidth/2}
              cy={btnHeight/2}
              rx={btnWidth/2}
              ry={btnHeight}>
              <Stop offset="0" stopColor={color} stopOpacity="1" key={'Linear0'} />
              <Stop offset="1" stopColor={realColor} stopOpacity="1" key={'Linear1'} />
            </RadialGradient>
          </Defs>
          <Rect
            rx={btnHeight/2}
            ry={btnHeight/2}
            width={btnWidth}
            height={btnHeight*3/2}
            style="stroke:black;stroke-width:0;opacity:0.5"
            fill="url(#grad)"
          />
        </Svg>
        <TouchableHighlight
          underlayColor={'rgb(105,105,105)'}
          style={styles.button}
          onPress={onPressButton}>
          <Text style={styles.text}>{btnText}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
