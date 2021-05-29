import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import CartItem from '../components/CartItem';
import { ScrollView } from 'react-native-gesture-handler';

const Cart = props => {

  const cartTotalAmount = useSelector(state => state.cart.totalAmount);

  const cartItems = useSelector(state => state.cart.items);

  const [showTotal, setShowTotal] = useState(false);

//  const dispatch = useDispatch();

  useEffect(() => {
    if (cartTotalAmount > 0) {
      setShowTotal(true);
    } else {
      setShowTotal(false);
    }
  }, [cartTotalAmount]);
  return (
    <View style={styles.screen}>
      <ScrollView>
        {cartItems && cartItems.map((item, i) => (
          <CartItem key={i}
            indexId={i}
            itemId={item.itemId}
            itemQty={item.itemQty}
            itemPrice={item.itemPrice}
            itemImage={item.itemImage}
            itemTitle={item.itemTitle}
          />
        ))}
        {!showTotal && <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 20, paddingLeft: 50, color: 'gray' }}>Currently, No item in the Cart!</Text>}
        {showTotal && (
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 4, padding: 1, flexGrow: 1, flexShrink: 1, }}>
            <Text style={{ width: '18%', padding: 5, fontSize: 20 }}>Total:</Text>
            <Text style={{ width: '21%', borderWidth: 1, borderRadius: 8, paddingRight: 2, paddingLeft: 2, paddingBottom: 2, paddingTop: 5, marginTop: 2, marginBottom: 8, marginRight: 10, marginLeft: 2, borderColor: '#cccccc', color: '#000', fontSize: 15 }}> ${cartTotalAmount}.00</Text>
            <View style={{ width: '65%', marginRight: 0, padding: 3 }} >
              <Button
                color="#9ACD32"
                title="Place Order"
                onPress={() => {
                  // dispatch(ordersActions.addOrder(cartItems, cartTotalAmount));
                  props.navigation.navigate(
                    'BillingAddress'
            ,
                    // {
                    //   OrderId: Math.floor(Math.random() * 100)
                    // }
                  );
                }}
              />
            </View>
          </View>)}
      </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create(
  {
  screen: {
    marginTop: 5,
    marginBottom: 7, marginLeft: 15, marginRight: 10
  },
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'serif',
    fontSize: 20,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }, mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '85%'
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%'
  },
  }
);
export default Cart