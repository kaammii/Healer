import React, { Component } from 'react';
import { View } from 'react-native';
import Svg,{ Ellipse,Rect,Defs,LinearGradient,Stop,RadialGradient,Path } from 'react-native-svg';

export default class BoxShadow extends Component {
  render = () => {
    //get the shadow settings and give them default values
    const {
      setting: {
        width = 0,
        height = 0,
        color = "#000",
        realColor = "#FAFAFA",
        border = 0,
        radius = 0,
        opacity = 1,
        x = 0,
        y = 0,
        style = {}
      },
      children
    } = this.props;

    //define the lengths
    const lineWidth = border;
    const rectWidth = width-radius*2;
    const rectHeight = height-radius*2;

    //return a view ,whose background is a svg picture
    return (
      <View style={[{position:"relative",width:width,height:height},style]}>
        <Svg
          height={height+lineWidth*2+radius*2}
          width={width+lineWidth*2+radius*2} 
          style={{position:"absolute"}}
          style={{position:"absolute",top:25,left:5}}
        >
          <Defs>
            <RadialGradient id="grad" cx="50" cy="50" rx="50" ry="50" fx="50" fy="50">
              <Stop offset="0" stopColor={color} stopOpacity="1" key={'Linear0'} />
              <Stop offset="1" stopColor={realColor} stopOpacity="1" key={'Linear1'} />
            </RadialGradient>
          </Defs>
          <Ellipse cx="50" cy="50" rx="50" ry="50" fill="url(#grad)" />
        </Svg>
        {children}
      </View>
    )
  }
}
