import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import CommonStyles, {
  deviceWidth,
  deviceHeight,
  blueGradient,
  NAV_HEIGHT,
} from '../styles/CommonStyles';

export default class GradientNavigationBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const privateStyles = StyleSheet.create({
      navbar: {
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        alignItems: 'center',
        width: this.props.navbarStyle.width,
        height: this.props.navbarStyle.height,
        paddingLeft: this.props.navbarStyle.paddingLeft,
        paddingRight: this.props.navbarStyle.paddingRight,
        elevation: this.props.navbarStyle.elevation,
      },
      titleText: {
        color: this.props.titleTextStyle.color,
        fontSize: this.props.titleTextStyle.fontSize,
        fontFamily: this.props.titleTextStyle.fontFamily,
      },
    });

    return (
      <View>
        <LinearGradient
          start={this.props.gradientBgStyle.start} end={this.props.gradientBgStyle.end}
          colors={this.props.gradientBgStyle.color}
          style={privateStyles.navbar}>
          <View style={styles.leftCol}>
            {
              (() => {
                if (!this.props.isBack) {
                  return (
                    <TouchableOpacity
                      onPress={this._onClickMenuButton.bind(this)}
                    >
                      <View style={styles.leftButton}>
                        <Image
                          source={require('../../img/healer/menu.png')}
                          style={{width: 26, height: 17}}
                        />
                      </View>
                    </TouchableOpacity>
                  )
                } else {
                  return (
                    <TouchableOpacity
                      onPress={this._onClickBackButton.bind(this)}
                    >
                      <View style={styles.leftButton}>
                        <Icon
                          name="md-arrow-back"
                          size={this.props.backIconStyle.size}
                          color={this.props.backIconStyle.color}
                        />
                        <View style={{
                          marginLeft: 3,
                          width: 5.5,
                          height: 2.5,
                          backgroundColor: this.props.backIconStyle.color}}
                        />
                      </View>
                    </TouchableOpacity>
                  )
                }
              })()
            }
          </View>
          <View style={styles.screenTitleCol}>
            {
              (() => {
                if (this.props.screenTitle !== 'text') {
                  return (
                    <Image
                      source={this.props.titleImg}
                      style={{width: this.props.titleImgStyle.width, height: this.props.titleImgStyle.height}}
                    />
                  )
                } else {
                  return (
                    <Text style={privateStyles.titleText}>
                      {this.props.titleText}
                    </Text>
                  )
                }
              })()
            }
          </View>
          <View style={styles.rightCol}>
            {this.props.rightButtons != null &&
              this.props.rightButtons.map(button => (
                <View key={button.key}>
                  <TouchableOpacity
                    onPress={button.buttonAction}
                  >
                    <View style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      height: NAV_HEIGHT,
                      width: button.buttonWidth + 15,
                    }}>
                      <Image
                        source={button.buttonIcon}
                        style={{width: button.buttonWidth, height: button.buttonHeight}}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              ))
            }
          </View>
        </LinearGradient>
      </View>
    );
  }

  // Handle click menu button
  _onClickMenuButton() {
    this.props.navigator.toggleDrawer({
      side: 'left',
      animated: true
    });
  }

  // Handle click back button
  _onClickBackButton() {
    if (this.props.isModal == true) {
      this.props.navigator.dismissAllModals({
        animationType: 'slide-down'
      });
    } else {
      this.props.navigator.pop({});
    }
  }
}

const styles = StyleSheet.create({
  leftCol: {
    width: deviceWidth * 1/5 - 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 52,
    height: NAV_HEIGHT,
  },
  screenTitleCol: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth * 3/5,
  },
  rightCol: {
    width: deviceWidth * 1/5 - 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

const PropTypes = React.PropTypes;

GradientNavigationBar.propTypes = {
  isBack: PropTypes.bool, // menu icon or back icon in left navbar
  screenTitle: PropTypes.string, // screenTitle to 'text' or 'image'
  navbarStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]), // styles of navbar
  gradientBgStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]), // styles of gradient 
  titleText: PropTypes.string, // text of titleText 
  titleTextStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]), // styles of titleText
  titleImg: PropTypes.number, // imageUrl of titleImg
  titleImgStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]), // styles of titleImg
  backIconStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]), // styles of backIcon 
};

GradientNavigationBar.defaultProps = {
  isBack: true,
  screenTitle: 'text',
  navbarStyle: {
    width: deviceWidth,
    height: NAV_HEIGHT,
    paddingLeft: 15,
    paddingRight: 15,
    elevation: 20,
  },
  gradientBgStyle: { 
    color: blueGradient.colors, 
    start: {x: 0.2, y: 0.4},
    end: {x: 1.2, y: 1.0},
  },
  titleTextStyle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  titleImgStyle: {},
  backIconStyle: {
    size: 28,
    color: '#FFFFFF',
  },
};
