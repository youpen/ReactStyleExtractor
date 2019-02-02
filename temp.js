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
    return <View style={styles.ashkemgr6}>
  <View style={styles.anljznfw3}>
  <View style={styles.a7mnw3sak}>
  <Image source={storeInfo.logo} style={styles.agqzn0ena} />
    <View style={styles.apfdabvy1}>
  <Text style={styles.afagrf2ap}>{storeInfo.en}</Text>
    <Text style={styles.akdierlxh}>{storeInfo.zh}</Text>
    </View>
    </View>
    <View style={styles.a5fgc3lix}>
    {<OrderList item={item} />}
    </View>
    </View>
      {this.renderDivider()}
    </View>;
  }

  renderDivider() {
    return <View style={styles.az6ve3hh0} />;
  }

  renderOrderItem(item) {
    return <View style={styles.am2mvz3vz}>
  <Text style={styles.agqj8kymd}>{item}
  </Text>
    </View>;
  }
}

export default StoreItem;
const styles = StyleSheet.create({
  ashkemgr6: {},
  anljznfw3: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: itemHeight },
  a7mnw3sak: {
    width: logoWidth,
    backgroundColor: '#373D42',
    alignItems: 'center',
    justifyContent: 'center'
  },
  agqzn0ena: { width: 60, height: 60 },
  apfdabvy1: { alignItems: 'center', justifyContent: 'center' },
  afagrf2ap: { color: 'white' },
  akdierlxh: { color: 'white' },
  a5fgc3lix: { flex: 1, alignItems: 'center' },
  az6ve3hh0: { height: 1, backgroundColor: '#7C7F86', marginLeft: 15 },
  am2mvz3vz: { height: 139, width: itemWidth, alignItems: 'center', justifyContent: 'center' },
  agqj8kymd: { color: '#FFE39B', fontSize: 35, fontWeight: '900' }
});