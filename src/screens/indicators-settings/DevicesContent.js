import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableHighlight,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import CommonStyles from '../../styles/CommonStyles';

export default class DevicesContent extends Component {
  constructor(props) {
    super(props);
    this. state = {
      devicesList: [
        {
          id: 0,
          itemImg: require('../../../img/person/appleHealth.png'),
          iconWidth: 40,
          iconHeight: 40,
          itemHeaderText: 'Apple Health'
        },
        {
          id: 1,
          itemImg: require('../../../img/person/type2.png'),
          iconWidth: 40,
          iconHeight: 40,
          itemHeaderText: 'Fitbit'
        },
        {
          id: 2,
          itemImg: require('../../../img/person/type3.png'),
          iconWidth: 40,
          iconHeight: 40,
          itemHeaderText: 'Withings'
        },
        {
          id: 3,
          itemImg: require('../../../img/person/iHealthCompanyLogo.png'),
          iconWidth: 50,
          iconHeight: 16,
          itemHeaderText: 'iHealh'
        },
        {
          id: 4,
          itemImg: require('../../../img/person/xiaomi.png'),
          iconWidth: 40,
          iconHeight: 40,
          itemHeaderText: 'MiBand'
        },
        {
          id: 5,
          itemImg: require('../../../img/person/cernerCorporationLogo.png'),
          iconWidth: 39.9,
          iconHeight: 40,
          itemHeaderText: 'Cerner'
        },
      ]
    }
  }

  render() {
    return (
      <View style={{marginTop: 20}}>
        {
          this.state.devicesList.map((item, index) => (
            <Item
              key={item.id}
              itemImg={item.itemImg}
              iconWidth={item.iconWidth}
              iconHeight={item.iconHeight}
              itemHeaderText={item.itemHeaderText}
            />
          ))
        }
      </View>
    );
  }
}

// Private component
class Item extends React.Component {
  render() {
    const {
      itemImg,
      itemHeaderText,
      iconWidth,
      iconHeight,
    } = this.props;
    return (
      <View style={[
        CommonStyles.itemWhiteBox,
        {flexDirection: 'row', alignItems: 'center', padding: 10}
      ]}>
        <View style={styles.leftCol}>
          <View style={styles.iconBox}>
            <Image
              source={itemImg}
              style={{width:iconWidth, height:iconHeight}}
            />  
          </View>
          <View style={{
            width: 0.7,
            height: 30,
            backgroundColor: 'rgb(229,229,229)'}}
          />
        </View>
        <View style={styles.centerText}>
          <Text style={[
            CommonStyles.itemHeaderText,
            CommonStyles.greyColor,
            CommonStyles.mediumBold
          ]}>
            {itemHeaderText}
          </Text>
        </View>
        <View style={styles.rightCol}>
          <Image
            source={require('../../../img/healer/icChecked.png')}
            style={{width: 42, height: 42}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  leftCol: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 70,
  },
  iconBox: {
    width: 50, 
  },
  centerText: {
    flex: 1, 
  },
  rightCol: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
