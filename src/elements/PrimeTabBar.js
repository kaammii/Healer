import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Navigation } from 'react-native-navigation';

import CommonStyles, {
  deviceWidth,
  deviceHeight,
  blueGradient,
} from '../styles/CommonStyles';

export default class PrimeTabBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={styles.tabbar}>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={this.props.tabBtn1.buttonAction}>
              <View style={styles.buttonItem}>
                {
                  (() => {
                    if (this.props.isActive == 'tab1') {
                      return (
                        <Image
                          source={this.props.tabBtn1.activeBtn}
                          style={{width: this.props.tabBtn1.width, height: this.props.tabBtn1.height}}
                        />
                      )
                    } else {
                      return (
                        <Image
                          source={this.props.tabBtn1.inactiveBtn}
                          style={{width: this.props.tabBtn1.width, height: this.props.tabBtn1.height}}
                        />
                      )
                    }
                  })()
                }
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.tabBtn2.buttonAction}>
              <View style={styles.buttonItem}>
                {
                  (() => {
                    if (this.props.isActive == 'tab2') {
                      return (
                        <Image
                          source={this.props.tabBtn2.activeBtn}
                          style={{width: this.props.tabBtn2.width, height: this.props.tabBtn2.height}}
                        />
                      )
                    } else {
                      return (
                        <Image
                          source={this.props.tabBtn2.inactiveBtn}
                          style={{width: this.props.tabBtn2.width, height: this.props.tabBtn2.height}}
                        />
                      )
                    }
                  })()
                }
              </View>
            </TouchableOpacity>
            <View style={styles.buttonItem} />
            <TouchableOpacity onPress={this.props.tabBtn3.buttonAction}>
              <View style={styles.buttonItem}>
                {
                  (() => {
                    if (this.props.isActive == 'tab3') {
                      return (
                        <Image
                          source={this.props.tabBtn3.activeBtn}
                          style={{width: this.props.tabBtn3.width, height: this.props.tabBtn3.height}}
                        />
                      )
                    } else {
                      return (
                        <Image
                          source={this.props.tabBtn3.inactiveBtn}
                          style={{width: this.props.tabBtn3.width, height: this.props.tabBtn3.height}}
                        />
                      )
                    }
                  })()
                }
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.tabBtn4.buttonAction}>
              <View style={styles.buttonItem}>
                {
                  (() => {
                    if (this.props.isActive == 'tab4') {
                      return (
                        <Image
                          source={this.props.tabBtn4.activeBtn}
                          style={{width: this.props.tabBtn4.width, height: this.props.tabBtn4.height}}
                        />
                      )
                    } else {
                      return (
                        <Image
                          source={this.props.tabBtn4.inactiveBtn}
                          style={{width: this.props.tabBtn4.width, height: this.props.tabBtn4.height}}
                        />
                      )
                    }
                  })()
                }
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableWithoutFeedback
          onPress={this.props.tabBtn0.onPressButton}>
          {
            (() => {
              if (this.props.isActive == 'tab0') {
                return (
                  <LinearGradient
                    start={this.props.tabBtn0.startGradientBgColor}
                    end={this.props.tabBtn0.endGradientBgColor}
                    colors={blueGradient.colors}
                    style={{
                      position: 'absolute',
                      bottom: 9,
                      left: (deviceWidth - 60)/2,
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 60,
                      height: 60,
                      elevation: 25,
                      borderRadius: 200,
                    }}
                  >
                    <Image
                      source={this.props.tabBtn0.activeBtn}
                      style={{width: this.props.tabBtn0.width, height: this.props.tabBtn0.height}}
                    />
                  </LinearGradient>
                )
              } else {
                return (
                  <View
                    style={{
                      position: 'absolute',
                      bottom: 9,
                      left: (deviceWidth - 60)/2,
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 60,
                      height: 60,
                      backgroundColor: 'rgb(243,246,254)',
                      borderRadius: 200,
                      borderWidth: 1,
                      borderStyle: 'solid',
                      borderColor: 'rgba(229,229,229,0.6)'
                    }}
                  >
                    <Image
                      source={this.props.tabBtn0.inactiveBtn}
                      style={{width: this.props.tabBtn0.width, height: this.props.tabBtn0.height}}
                    />
                  </View>
                )
              }
            })()
          }
        </TouchableWithoutFeedback>
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: deviceWidth,
    height: 50,
    backgroundColor: 'rgb(243,246,254)',
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(229,229,229,0.4)'
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonItem: {
    width: deviceWidth / 5, 
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const PropTypes = React.PropTypes;

PrimeTabBar.propTypes = {
  tabBtn1: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]), 
  tabBtn2: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]), 
  tabBtn0: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]), 
  tabBtn3: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]), 
  tabBtn4: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]), 
};

PrimeTabBar.defaultProps = {
  tabBtn0: {
    //gradientBgColor: blueGradient.colors,
    startGradientBgColor: {x: 0.1, y: 0.5},
    endGradientBgColor: {x: 0.8, y: 0.0},
  }
};
