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
    this.positionX = new Animated.Value(0);
  }

  componentDidUpdate() {
    this.animateKey = 0;
  }

  render() {
    const { item } = this.props;
    const storeInfo = cfg().stores.storeInfoMap[item.store_id];
    if (!storeInfo) {
      return <View />;
    }
    return <View style={styles.a982bex8d;}>
  <View style={styles.atocr8au4;}>
  <View style={styles.alqovo3ss;}>
  <Image source={storeInfo.logo} style={styles.a3pqner9y;} />
    <View style={styles.axuq5g9nu;}>
  <Text style={styles.a8voxyjg6;}>{storeInfo.en}</Text>
    <Text style={styles.agkcl0k0u;}>{storeInfo.zh}</Text>
    </View>
    </View>
    <View style={styles.ajzasrt17;}>
    {<OrderList item={item} />}
    </View>
    </View>
      {this.renderDivider()}
    </View>;
  }

  renderDivider() {
    return <View style={styles.ash2lzxq9;} />;
  }

  renderOrderItem(item) {
    return <View style={styles.a65xph0hk;}>
  <Text style={styles.a6887xt55;}>{item}
  </Text>
    </View>;
  }
}

export default StoreItem;
const styles = StyleSheet.create({
  a982bex8d: {},
  atocr8au4: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: itemHeight },
  alqovo3ss: {
    width: logoWidth,
    backgroundColor: '#373D42',
    alignItems: 'center',
    justifyContent: 'center'
  },
  a3pqner9y: { width: 60, height: 60 },
  axuq5g9nu: { alignItems: 'center', justifyContent: 'center' },
  a8voxyjg6: { color: 'white' },
  agkcl0k0u: { color: 'white' },
  ajzasrt17: { flex: 1, alignItems: 'center' },
  ash2lzxq9: { height: 1, backgroundColor: '#7C7F86', marginLeft: 15 },
  a65xph0hk: { height: 139, width: itemWidth, alignItems: 'center', justifyContent: 'center' },
  a6887xt55: { color: '#FFE39B', fontSize: 35, fontWeight: '900' }
});