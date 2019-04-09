export const demoCodeString = `import React, {Component} from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  Image,
} from 'react-native';
import {cfg} from '../../config'
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
    const {item} = this.props;
    const storeInfo = cfg().stores.storeInfoMap[item.store_id];
    if (!storeInfo) {
      return <View/>
    }
    return (
      <View style={{}}>
        <View
          style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: itemHeight}}
        >
          <View style={{
            width: logoWidth,
            backgroundColor: '#373D42',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Image source={storeInfo.logo}
                   style={{width: 60, height: 60}}/>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: 'white'}}>{storeInfo.en}</Text>
              <Text style={{color: 'white'}}>{storeInfo.zh}</Text>
            </View>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            { <OrderList item={item}/> }
          </View>
        </View>
        {this.renderDivider()}
      </View>
    );
  }
}

export default StoreItem;

`;
