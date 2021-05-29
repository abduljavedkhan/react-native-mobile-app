import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { useSelector } from 'react-redux';

const CartItem = props => 
{
  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginBottom: 5, height: 105, width: 380 }}>
        <View style={{ flexDirection: 'row', flexGrow: 1, flexShrink: 1, alignSelf: 'center' }}>
          <Image source={{ uri: props.itemImage }} style={[styles.centerElement, { height: 90, width: 100, margin: 5, backgroundColor: '#eeeeee' }]} />
          <View style={{ flexGrow: 1, flexShrink: 1, alignSelf: 'center' }}>
            <Text numberOfLines={1} style={{ fontSize: 15, fontStyle: 'normal', marginBottom: 10, fontWeight: 'bold' }}>{props.itemTitle}</Text>
            <Text numberOfLines={1} style={{ color: '#333333', marginBottom: 10 }}>Qty - {props.itemQty}</Text>
            <Text numberOfLines={1} style={{ color: '#333333', marginBottom: 10 }}>SubTotal: ${props.itemPrice}.00</Text>
          </View>
        </View>
        <View style={[styles.centerElement, { width: 5, marginVertical: 30, padding: 8, marginRight: 35 }]}>
        </View>
      </View>
    </ScrollView>);
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 0,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 15
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  quantity: {
    fontFamily: 'open-sans',
    color: '#888',
    fontSize: 16
  },
  mainText: {
    fontFamily: 'open-sans-bold',
    fontSize: 16
  },
  deleteButton: {
    marginLeft: 20
  }
});

export default CartItem;
