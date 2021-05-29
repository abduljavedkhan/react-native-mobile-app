//import * as React from 'react';
//import { Button, View, Text, SafeAreaView } from 'react-native';
//import { useSelector } from 'react-redux';

import React,{useEffect,useState} from 'react';
import { FlatList, Text, Platform } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import OrderItem from '../components/OrderItem';

const Orders = props => {
  const orderItems = useSelector(state => state.orders.orders);
  const [showOrder, setShowOrder] = useState(false);
  useEffect(() => {
    if (orderItems.length > 0) {
      setShowOrder(true);
    } else {
      setShowOrder(false);
    }
  }, [orderItems]);


  return (
    !showOrder ? 
    (<Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 20, paddingLeft: 50, color: 'gray' }}>Currently, No item in the Order List!</Text>
    )
    : (
    <FlatList
    data={orderItems}
    keyExtractor={item => item.id}
    renderItem={itemData => (

      <OrderItem
        tip={0.00}
        tax={0.80}
        discount={0.00}
        amount={itemData.item.totalAmount}
        date={itemData.item.readableDate}
        items={itemData.item.items}
        billAddr={itemData.item.billAddr}
        payment={itemData.item.payment}
      />
    )}
  />));
};

Orders.navigationOptions = navData => {
  return {
    headerTitle: 'Your Orders',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};


const styles = StyleSheet.create({
  orderItem: {
    margin: 15,
    padding: 5,
    alignItems: 'center',
    borderColor: '#9ACD32',
    borderWidth: 2
  },
  summary: {
    flexDirection: 'column',
    justifyContent: 'space-between',

    width: '100%',
    marginBottom: 5
  },
  summaryItem: {
    margin: 2,
    padding: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textLeft: {
    //  fontFamily: 'open-sans-bold',
    fontSize: 16,
    color: "#9ACD32",
  },
  textRight: {

    //  fontFamily: 'open-sans-bold',
    // alignItems: 'flex-start',
    // justifyContent:'space-evenly',

    fontSize: 16,
    // alignItems: 'flex-start',
  },
  date: {
    fontSize: 16,
    //    fontFamily: 'open-sans',
    //   color: '#888'
    color: '#000'
  },
  detailItems: {
    width: '100%'
  }
});

export default Orders;
