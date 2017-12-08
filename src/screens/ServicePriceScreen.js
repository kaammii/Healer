import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import LinearGradient from 'react-native-linear-gradient';

import CommonStyles, {
  deviceWidth,
  deviceHeight,
  blueGradient,
} from '../styles/CommonStyles';
import PrimeButton from '../elements/PrimeButton';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';
import BasicService from './service-price/BasicService';

export default class ServicePriceScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
    this.state = {
      priceType: { type: 'basic'},
    };
  }

  render() {
    const smallShadowOpt = {
      btnWidth: deviceWidth - 155,
      btnHeight: 45,
      backgroundColor: "#FFFFFF",
      color: 'rgb(79,109,230)',
    }

    let priceType = this.state.priceType.type;

    return (
      <View style={[CommonStyles.normalPage, {position: 'relative'}]}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Price Table'
        />
        <View style={CommonStyles.noTabScrollView}>
          <View style={CommonStyles.wrapperBox}>
            <View style={styles.parentCircle}>
              <TouchableWithoutFeedback onPress={() => this.setState({priceType: {type: 'basic'}})}>
                {
                  (() => {
                    if (priceType == 'basic') {
                      return (
                        <LinearGradient
                          start={blueGradient.colorsStart} end={blueGradient.colorsEnd}
                          colors={blueGradient.colors}
                          style={styles.activeChildCircle}>
                          <Text style={styles.activeBtnText}>Basic</Text>
                        </LinearGradient>
                      )
                    } else {
                      return (
                        <View style={styles.childCircle}>
                          <Text style={styles.btnText}>Basic</Text>
                        </View>
                      )
                    }
                  })()
                }
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => this.setState({priceType: {type: 'pro'}})}>
                {
                  (() => {
                    if (priceType == 'pro') {
                      return (
                        <LinearGradient
                          start={blueGradient.colorsStart} end={blueGradient.colorsEnd}
                          colors={blueGradient.colors}
                          style={styles.activeChildCircle}>
                          <Text style={styles.activeBtnText}>Pro</Text>
                        </LinearGradient>
                      )
                    } else {
                      return (
                        <View style={styles.childCircle}>
                          <Text style={styles.btnText}>Pro</Text>
                        </View>
                      )
                    }
                  })()
                }
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => this.setState({priceType: {type: 'premium'}})}>
                {
                  (() => {
                    if (priceType == 'premium') {
                      return (
                        <LinearGradient
                          start={blueGradient.colorsStart} end={blueGradient.colorsEnd}
                          colors={blueGradient.colors}
                          style={styles.activeChildCircle}>
                          <Text style={styles.activeBtnText}>Premium</Text>
                        </LinearGradient>
                      )
                    } else {
                      return (
                        <View style={styles.childCircle}>
                          <Text style={styles.btnText}>Premium</Text>
                        </View>
                      )
                    }
                  })()
                }
              </TouchableWithoutFeedback>
            </View>
            { this.renderBody() }
          </View>
        </View>
        <View style={styles.bottomBtn}>
          <PrimeButton
            setting={smallShadowOpt}
            btnText="BUY NOW"
          />
        </View>
      </View>
    );
  }

  // Render content
  renderBody() {
    switch(this.state.priceType.type) {
      case 'basic':
        return (
          <BasicService />
        );
        break;
      case 'pro':
        return (
          <BasicService />
        );
        break;
      case 'premium':
        return (
          <BasicService />
        );
        break;
      default:
        break;
    }
  }
}

const spaceHeight = 70;

const styles = StyleSheet.create({
  parentCircle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 49,
    padding: 5,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: 'rgb(229,229,229)',
    borderRadius: 50 
  },
  childCircle: {
    height: 39,
    width: (deviceWidth - 40)/3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  activeChildCircle: {
    height: 39,
    width: (deviceWidth - 40)/3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    elevation: 8,
  },
  btnText: {
    color: 'rgb(150,150,150)',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  activeBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  bottomBtn: {
    position: 'absolute',
    left: 77.5,
    bottom: spaceHeight - 45, 
  }
});
