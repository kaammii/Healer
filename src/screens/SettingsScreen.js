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
  blueGradient,
} from '../styles/CommonStyles';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import DevicesContent from './indicators-settings/DevicesContent';
import TypesContent from './indicators-settings/TypesContent';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class SettingsScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
    this.state = {
      screenType: { type: 'deviceScreen'},
    };
  }

  render() {
    let screenType = this.state.screenType.type;
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Settings'
        />
        <ScrollView style={CommonStyles.noTabScrollView}>
          <View style={CommonStyles.wrapperBox}>
            <View style={styles.parentCircle}>
              <TouchableWithoutFeedback onPress={() => this.setState({screenType: {type: 'deviceScreen'}})}>
                {
                  (() => {
                    if (screenType == 'deviceScreen') {
                      return (
                        <LinearGradient
                          start={blueGradient.colorsStart} end={blueGradient.colorsEnd}
                          colors={blueGradient.colors}
                          style={styles.activeChildCircle}>
                          <Text style={styles.activeBtnText}>Devices</Text>
                        </LinearGradient>
                      )
                    } else {
                      return (
                        <View style={styles.childCircle}>
                          <Text style={styles.btnText}>Devices</Text>
                        </View>
                      )
                    }
                  })()
                }
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => this.setState({screenType: {type: 'typeScreen'}})}>
                {
                  (() => {
                    if (screenType == 'typeScreen') {
                      return (
                        <LinearGradient
                          start={blueGradient.colorsStart} end={blueGradient.colorsEnd}
                          colors={blueGradient.colors}
                          style={styles.activeChildCircle}>
                          <Text style={styles.activeBtnText}>Types</Text>
                        </LinearGradient>
                      )
                    } else {
                      return (
                        <View style={styles.childCircle}>
                          <Text style={styles.btnText}>Types</Text>
                        </View>
                      )
                    }
                  })()
                }
              </TouchableWithoutFeedback>
            </View>
            { this.renderBody() }
          </View>
        </ScrollView>
      </View>
    );
  }

  // Render content
  renderBody() {
    if (this.state.screenType.type == 'deviceScreen') {
      return (
        <DevicesContent />
      );
    } else {
      return (
        <TypesContent />
      );
    }
  }
}

const styles = StyleSheet.create({
  parentCircle: {
    height: 49,
    padding: 5,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgb(229,229,229)',
    borderRadius: 50 
  },
  childCircle: {
    height: 39,
    width: (deviceWidth - 40)/2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: 'transparent'
  },
  activeChildCircle: {
    height: 39,
    width: (deviceWidth - 40)/2,
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
  }
});
