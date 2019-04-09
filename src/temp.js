import React, { Component } from 'react';
import { View, Text, Animated, Easing, Image } from 'react-native';
import { cfg } from '../../config';
import OrderList from './OrderList';

const itemWidth = 187;
const logoWidth = 109;
const itemHeight = 119;

class StoreItem extends Component {
  constructor(props) {
    super(props);
    this.renderOrderItem = this.renderOrderItem.bind(this);
  }

  render() {
    const { item } = this.props;
    const storeInfo = cfg().stores.storeInfoMap[item.store_id];
    if (!storeInfo) {
      return <View />;
    }
    return <View style={styles.aki1ajgdz}>
        <View style={styles.a058iaew6}>
          <View style={styles.ap54zm92n}>
            <Image source={storeInfo.logo} style={styles.agugz1iur} />
            <View style={styles.amsfvu3jd}>
              <Text style={styles.awj671r8j}>{storeInfo.en}</Text>
              <Text style={styles.aeuvwdwmv}>{storeInfo.zh}</Text>
            </View>
          </View>
          <View style={styles.a493ltb04}>
            {<OrderList item={item} />}
          </View>
        </View>
        {this.renderDivider()}
      </View>;
  }
}

export default StoreItem;
const styles = StyleSheet.create({
  aki1ajgdz: {},
  a058iaew6: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: itemHeight },
  ap54zm92n: {
    width: logoWidth,
    backgroundColor: '#373D42',
    alignItems: 'center',
    justifyContent: 'center'
  },
  agugz1iur: { width: 60, height: 60 },
  amsfvu3jd: { alignItems: 'center', justifyContent: 'center' },
  awj671r8j: { color: 'white' },
  aeuvwdwmv: { color: 'white' },
  a493ltb04: { flex: 1, alignItems: 'center' }
});