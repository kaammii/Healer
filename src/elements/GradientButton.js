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
  Stop,
  RadialGradient,
  Path
} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

export default class GradientButton extends Component {
  render = () => {
    // Get the shadow settings and give them default values
    const {
      setting: {
        btnWidth = 0,
        btnHeight = 0,
        fontSize = 18,
        shadowHeight = 100,
        backgroundColor = '#4b66ea',
        color = "#000",
        realColor = "#FFFFFF",
        style = {}
      },
      onPressButton,
      btnText,
    } = this.props;

    // Define button style
    const styles = StyleSheet.create({
      button: {
        width: btnWidth,
        height: btnHeight,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
      },
      text: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: fontSize,
        color: '#FFFFFF',
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
        <LinearGradient
          start={{x: 0.2, y: 0.4}} end={{x: 1.0, y: 1.0}}
          colors={['rgb(75,102,234)', 'rgb(130,160,247)']}
          style={[styles.button, {position: 'relative'}]}>
          <TouchableHighlight
            underlayColor={'rgb(105,105,105)'}
            style={styles.button}
            onPress={onPressButton}>
            <Text style={styles.text}>{btnText}</Text>
          </TouchableHighlight>
        </LinearGradient>
      </View>
    )
  }
}
