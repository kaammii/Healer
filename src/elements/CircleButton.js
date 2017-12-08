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

export default class CircleButton extends Component {
  render = () => {
    // Get the shadow settings and give them default values
    const {
      setting: {
        diameter = 0,
        color = "#000",
        realColor = "#FAFAFA",
        fontSize = 24,
        backgroundColor = '#8CABD9',
        style = {}
      },
      onPressButton,
      btnText,
    } = this.props;

    // Define button style
    const styles = StyleSheet.create({
      button: {
        height: diameter,
        width: diameter,
        backgroundColor: backgroundColor,
        borderRadius: diameter/2,
      },
      text: {
        fontSize: fontSize,
        height: diameter,
        width: diameter,
        textAlign: 'center',
        paddingTop: diameter/3,
        color: '#ffffff',
        borderRadius: diameter/2,
      },
    });

    // Return a view ,whose background is a svg picture
    return (
      <View style={[{position:"relative",width:(diameter),height:(diameter)},style]}>
        <Svg
          height={diameter}
          width={diameter} 
          style={{position:"absolute",top:diameter/4,left:0}}
        >
          <Defs>
            <RadialGradient
              id="grad"
              cx={diameter/2}
              cy={diameter/2}
              rx={diameter/2}
              ry={diameter/2}
              fx={diameter/2}
              fy={diameter/2}
            >
              <Stop offset="0" stopColor={color} stopOpacity="1" key={'Linear0'} />
              <Stop offset="1" stopColor={realColor} stopOpacity="1" key={'Linear1'} />
            </RadialGradient>
          </Defs>
          <Ellipse
            cx={diameter/2}
            cy={diameter/2}
            rx={diameter/2}
            ry={diameter/2}
            fill="url(#grad)"
          />
        </Svg>
        <TouchableHighlight style={styles.button} onPress={onPressButton}>
          <Text style={styles.text}>{btnText}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
