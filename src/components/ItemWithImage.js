import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import CommonStyles from '../styles/CommonStyles';

export default class ItemWithImage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={CommonStyles.itemWhiteBox}>
        <TouchableHighlight
          underlayColor='transparent'
          style={styles.highlightBox}
          onPress={this.props.onPressItem}
        >
          <View style={styles.detailItemBox}>
            <View style={styles.leftCol}>
              <View style={styles.icon}>
                <Image
                  source={this.props.itemImg}
                  style={{width:this.props.iconWidth, height:this.props.iconHeight}}
                />  
              </View>
              <View style={{
                width: 0.7,
                height: 30,
                backgroundColor: 'rgb(229,229,229)'}}
              />
            </View>
            <View style={styles.centerInfo}>
              <Text style={[
                CommonStyles.itemHeaderText,
                CommonStyles.greyColor,
                CommonStyles.mediumBold
              ]}>
                {this.props.itemHeaderText}
              </Text>
            </View>
            <View style={styles.rightCol}>
              <Icon
                style={{fontSize: 24, textAlign: 'center'}}
                name="chevron-thin-right"
                color="rgb(105,105,105)"
              />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

 const styles = StyleSheet.create({
  detailItemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 17,
    paddingHorizontal: 19
  },
  highlightBox: {
    borderRadius: 12,
  },
  centerInfo: {
    flex: 1, 
  },
  leftCol: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 61,
  },
  icon: {
    width: 41,
  },
  rightCol: {
    width: 20,
    alignItems: 'center',
  },
});

const PropTypes = React.PropTypes;

ItemWithImage.propTypes = {
  itemImg: PropTypes.number,
  itemHeaderText: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  onPressItem: PropTypes.func,
};
