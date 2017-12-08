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

export default class TypesContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{marginTop: 20}}>
        <Item
          itemImg={require('../../../img/healer/desinfectant.png')}
          iconWidth={17}
          iconHeight={22}
          itemHeaderText='Desinfectant'
          itemContent='Many people experience neck and back injuries'
        />
        <Item
          itemImg={require('../../../img/healer/transfusion.png')}
          iconWidth={17}
          iconHeight={22}
          itemHeaderText='Transfusion'
          itemContent='For many years, when people thought of alcohol and drug'
        />
        <Item
          itemImg={require('../../../img/healer/scale.png')}
          iconWidth={22}
          iconHeight={22}
          itemHeaderText='Weight'
          itemContent='Many people experience neck and back injuries'
        />
        <Item
          itemImg={require('../../../img/healer/desinfectant.png')}
          iconWidth={17}
          iconHeight={22}
          itemHeaderText='Desinfectant'
          itemContent='Many people experience neck and back injuries'
        />
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
      itemContent,
      iconWidth,
      iconHeight,
    } = this.props;
    return (
      <View style={[
        CommonStyles.itemWhiteBox,
        {
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 14,
          paddingHorizontal: 20,
        }
      ]}>
        <View style={styles.leftCol}>
          <View style={styles.iconBox}>
            <Image
              source={itemImg}
              style={{width:iconWidth, height:iconHeight}}
            />  
          </View>
          <View style={{
            width: 0.5,
            height: 78,
            backgroundColor: 'rgb(229,229,229)'}}
          />
        </View>
        <View style={styles.centerText}>
          <Text style={[
            CommonStyles.itemHeaderText,
            CommonStyles.blackColor,
            CommonStyles.mediumBold,
            {marginBottom: 5}
          ]}>
            {itemHeaderText}
          </Text>
          <Text style={[
            CommonStyles.shortSmallText,
            CommonStyles.greyColor,
            CommonStyles.regularBold,
          ]}>
            {itemContent}
          </Text>
        </View>
        <View style={styles.rightCol}>
          <Image
            source={require('../../../img/healer/icUncheck.png')}
            style={{width: 30, height: 30}}
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
    width: 59,
  },
  iconBox: {
    width: 39, 
  },
  centerText: {
    flex: 1, 
    paddingRight: 10,
  },
  rightCol: {
    alignItems: 'center',
  },
});
