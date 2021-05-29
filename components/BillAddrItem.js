import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

const CartItem = props => {

  return (
    <ScrollView>
      <View style={styles.BillAddr}>
        <Text style={styles.BillingAddrLeft}>Details:</Text>
        <View style={styles.BillingAddrRight} >
          <Text style={styles.textRight}> {props.fullName}</Text>
          <Text style={styles.textRight}> {props.addr}</Text>
          <Text style={styles.textRight}> {props.aptNum}</Text>
          <Text style={styles.textRight}> {props.city}</Text>
          <Text style={styles.textRight}> {props.country}</Text>
          <Text style={styles.textRight}> {props.state}</Text>
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
  }, BillAddr: {
    margin: 2,
    padding: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  textLeft: {

    fontSize: 16,
    color: "#9ACD32",
  },
  textRight: {
    fontSize: 16,
  },
  BillingAddrLeft: {
    fontSize: 16,
    color: "#9ACD32",
  },
  BillingAddrRight: {
    fontSize: 16,
    flexDirection: 'column'
  },
});

export default CartItem;
