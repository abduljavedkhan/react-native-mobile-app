import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView,
  Image,
  Alert
} from 'react-native';
import { MaterialIcons, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../store/actions/cart';

const CartItem = props => {
  const cartItems = useSelector(state => state.cart.items);
  const currentQty = useSelector(state => state.cart.currentQty);  
  const dispatch = useDispatch();
	deleteHandler = (index) => {
		Alert.alert(
			'Are you sure you want to delete this item from your cart?',
			'',
			[
				{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
				{text: 'Delete', onPress: () => {
					let updatedCart = cartItems; /* Clone it first */
					updatedCart.splice(index, 1); /* Remove item from the cloned cart state */
				//	this.setState(updatedCart); /* Update the state */
				}},
			],
			{ cancelable: false }
		);
	}

  
  return (
	<ScrollView>	
    <View style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 5, height: 105,width:380}}>
      <View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
          <Image source={{uri: props.itemImage}} style={[styles.centerElement, {height: 90, width: 100,margin:5, backgroundColor: '#eeeeee'}]} />
        <View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
          <Text numberOfLines={1} style={{fontSize: 15,fontStyle:'normal',marginBottom:10, fontWeight: 'bold'}}>{props.itemTitle}</Text>
          <Text numberOfLines={1} style={{color: '#333333', marginBottom: 10}}>Qty - {props.itemQty}</Text>
          <Text numberOfLines={1} style={{color: '#333333', marginBottom: 10}}>SubTotal: ${props.itemPrice}.00</Text>
          
        </View>      
      </View>
      <View style={[styles.centerElement, {width: 5,marginVertical:30,padding:8,marginRight:35}]}>
        <TouchableOpacity style={[styles.centerElement, {width: 32, height: 32}]} onPress={() => {
          	Alert.alert(
              'Are you sure you want to delete this item from your cart?',
              '',
              [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Delete', onPress: () => {
                  dispatch(cartActions.removeFromCart(props.indexId));
                }},
              ],
              { cancelable: false }
            );
        }}>
          <Ionicons name="md-trash" size={25} color="#ee4d2d" />
        </TouchableOpacity>
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
