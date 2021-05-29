import React, { useState } from 'react'
import { SafeAreaView } from 'react-native';
import { Text, View, Alert } from 'react-native'
import { Button, StyleSheet, TextInput, ScrollView, Dimensions } from 'react-native';
import * as paymentActions from '../store/actions/payment';
import * as ordersActions from '../store/actions/orders';
import * as cartActions from '../store/actions/cart';
import { useSelector, useDispatch } from 'react-redux';
import { CommonActions } from '@react-navigation/native'

const Payment = (props) => {
  const [chName, setChName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [spclInst, setSpclInst] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');

  const cartTotalAmount = useSelector(state => state.cart.totalAmount);

  const cartItems = useSelector(state => state.cart.items);
  const billAddr = useSelector(state => state.billingAddress.billAddr);
  const paymentArray = useSelector(state => state.payment.payment);

  const dispatch = useDispatch();

  //const BillAddr = props.route.params.BillAddr;
  //  console.log('BillAddr' + BillAddr);

  const payObj = {
    chName: chName,
    cardNumber: cardNumber,
    securityCode: securityCode,
    expiryDate: expiryDate,
    specialInstruction: spclInst,
    country: country,
    state: state
  }
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <TextInput
            style={styles.textinput_style}
            placeholder="Card Holder Name"
            placeholderTextColor="#42b3f5" onChangeText={text => setChName(text)}
            value={chName}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.textinput_style}
            placeholder="Credit Card Number"
            placeholderTextColor="#42b3f5" onChangeText={text => setCardNumber(text)}
            value={cardNumber}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.textinput_style}
            placeholder="Security Code"
            placeholderTextColor="#42b3f5" onChangeText={text => setSecurityCode(text)}
            value={securityCode}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.textinput_style}
            placeholder="Expiration Date"
            placeholderTextColor="#42b3f5" onChangeText={text => setExpiryDate(text)}
            value={expiryDate}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.textinput_style}
            placeholder="Special Instruction for Order"
            placeholderTextColor="#42b3f5" onChangeText={text => setSpclInst(text)}
            value={spclInst}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.textinput_style}
            placeholder="Country"
            placeholderTextColor="#42b3f5" onChangeText={text => setCountry(text)}
            value={country}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.textinput_style}
            placeholder="State"
            placeholderTextColor="#42b3f5" onChangeText={text => setState(text)}
            value={state}
          />
        </View>
        {/* <View>
           <Text>SubTotal</Text><Text>${3.99}</Text>
           <Text>Tax</Text><Text>${0.00}</Text>
           <Text>Discount</Text><Text>${0.00}</Text>
           </View>
           <View>
               <Text>
                Tip
               </Text>
           </View> */}
        <View style={styles.buttonContainer}>
          <Button
            color="#9ACD32"
            title="Submit"
            onPress={() => {
              dispatch(paymentActions.addPaymentMethod(payObj));
              Alert.alert(
                'Order Placed!!',
                'For more details proceed to  My Orders'
                ,
                [
                  {
                    text: 'OK', onPress: () => {
                      //dispatcher for order.   

                      dispatch(ordersActions.addOrder(cartItems, cartTotalAmount, billAddr, paymentArray));

                      // const resetAction = NavigationActions.reset({
                      //   index: 0,
                      //   actions: [
                      //     NavigationActions.navigate({
                      //       routeName: 'Cart',
                      //       params: {}
                      //     })
                      //   ]
                      // })
                      props.navigation.dispatch(
                        CommonActions.reset({
                          index: 0,
                          routes: [
                            { name: 'Cart' },
                          ],
                        })
                      )
                      props.navigation.navigate('Home');
                    }
                  },
                ],
                { cancelable: false }
              );
            }}
          />
        </View>
      </SafeAreaView>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput_style: {
    /*  paddingHorizontal: 2,
paddingVertical: 5,
borderBottomColor: '#ccc',
borderBottomWidth: 1*/
    borderBottomWidth: 1,
    width: "75%",
    borderColor: "#42b3f5",
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  buttonContainer: {
    marginTop: 45,
    width: "100%",
    borderColor: "#42b3f5",
    paddingHorizontal: 25,
    paddingVertical: 2,
  },
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: 18
  },
  bottomTitle: {
    color: 'black',
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
  }

}
);

export default Payment;
