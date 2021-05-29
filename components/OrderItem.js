import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList} from 'react-native';
import { Currency } from 'react-intl-number-format';
import Checkbox from 'expo-checkbox';
import OrderCartItem from './OrderCartItem';

import Card from './Card';
import BillAddrItem from '../components/BillAddrItem';


const OrderItem = props => {
  const [showDetails, setShowDetails] = useState(false);
  const [isChecked, setChecked] = useState(false);

  //console.log('payment ' + props.payment.length);


  return (
    <Card style={styles.orderItem}>
      <View style={styles.summary}>
        <View style={styles.summaryItem}>
          <Text style={styles.textLeft}>Order no :</Text><Text style={styles.textRight}> {Math.floor(Math.random() * 100)}</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.textLeft}>Order date:</Text><Text style={styles.textRight}> {props.date}</Text>
        </View>

        {props.payment && props.payment.map((item,index) => (
          <View style={styles.summaryItem} key={index} >
            <Text style={styles.textLeft}>Payment method:</Text><Text style={styles.textRight}> Card ends on 4242 {item.cardNumber}</Text>
          </View>
        ))}
        <View style={styles.summaryItem} >
          <Text style={styles.textLeft}>Payment method:</Text><Text style={styles.textRight}> Card ends on 4242 </Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.textLeft}>Status :</Text><Text style={styles.textRight}> {`CONFIRM`}</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.textLeft}>Tip: </Text><Text style={styles.textRight}> ${props.tip.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.textLeft}>Tax: </Text><Text style={styles.textRight}> ${props.tax.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.textLeft}>Discount: </Text><Text style={styles.textRight}> ${props.discount.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.textLeft}>Order Total: </Text><Text style={styles.textRight}> 
          ${ props.amount}
          {/* <Currency locale="en-US" currency="USD">{props.amount}</Currency> */}
          
          </Text>
        </View>
        <View style={styles.checkSummary}>
          <Checkbox
            style={styles.textLeft}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#9ACD32' : undefined}
          />
          <Text style={styles.textLeft}>Billing Address</Text>
        </View>
        {isChecked && (
          <View style={styles.detailItems}>
            {props.billAddr && props.billAddr.map((billitem, index) => (
              <BillAddrItem key={index}
                fullName={billitem.fullName}
                addr={billitem.addr}
                aptNum={billitem.aptNum}
                city={billitem.city}
                country={billitem.country}
                state={billitem.state}
              />
            ))}
          </View>
        )}

        {/* <Button
        color='#9ACD32'
        title={showDetails ? 'Hide Purchase Details' : 'Purchase Details'}
        onPress={() => {
          setShowDetails(prevState => !prevState);
        }}
      /> */}
        <View style={styles.checkSummary}>
          <Checkbox
            style={styles.textLeft}
            value={showDetails}
            onValueChange={setShowDetails}
            color={showDetails ? '#9ACD32' : undefined}
          /><Text style={styles.textLeft}>Purchase Details</Text>
        </View>
        {showDetails && (
          <View style={styles.detailItems}>
            {props.items.map((item, index) =>
            (
              <OrderCartItem key={index}
                itemId={item.itemId}
                itemQty={item.itemQty}
                itemPrice={item.itemPrice}
                itemImage={item.itemImage}
                itemTitle={item.itemTitle}
              />
            ))}
          </View>
        )}

      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    margin: 15,
    padding: 5,
    alignItems: 'center',
    borderColor: '#9ACD32',
    borderWidth: 2
  },

  checkbox: {
    alignSelf: 'baseline',
  },
  label: {
    margin: 8,
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
  checkSummary: {
    margin: 2,
    padding: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  BillAddr: {
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

export default OrderItem;
