import React, { useState } from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';

import { MEALS } from '../data/dummy-data';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../store/actions/cart';
const MealDetailScreen = props => {
  const selectedMeal = MEALS.find(meal => meal.id === props.route.params.mealId);

  //   const selectedMeal = useSelector(
  // state=>    MEALS.find(meal => meal.id === props.route.params.mealId) );
  const dispatch = useDispatch();

  // const intiQty = useSelector(state => state.cart.currentQty);  
  const [currentQty, setCurrentQty] = useState(1);
  let mealPrice = selectedMeal.duration; // taking duration as price
  let itemPrice = mealPrice * currentQty;

  const quantityHandler = (action) => {
    if (action == 'more') {
      setCurrentQty(currentQty + 1);
    } else if (action == 'less') {
      setCurrentQty(currentQty > 1 ? currentQty - 1 : currentQty);
    }
  }

  const dataObj = {
    itemId: selectedMeal.id,
    itemQty: currentQty,
    itemPrice: itemPrice,
    mealPrice: mealPrice,
    itemImage: selectedMeal.imageUrl,
    itemTitle: selectedMeal.title
  }

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View >
        <Text style={styles.title} numberOfLines={1}>
          {selectedMeal.title}
        </Text>
      </View>
      <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', padding: 10 }}>
        <TouchableOpacity onPress={
          () => {
            quantityHandler('less')
            //  dispatch(cartActions.quantityLess(currentQty));
          }
        } style={{ borderWidth: 1, borderColor: '#cccccc', borderTopLeftRadius: 8, borderBottomLeftRadius: 8, justifyContent: 'center' }}>
          <MaterialIcons name="remove" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#cccccc', padding: 8, color: '#000', fontSize: 13, justifyContent: 'center' }}>{currentQty}</Text>
        <TouchableOpacity onPress={
          () => {
            quantityHandler('more')
            //     dispatch(cartActions.quantityMore(currentQty));
          }
        } style={{ borderWidth: 1, borderColor: '#cccccc', borderTopRightRadius: 8, borderBottomRightRadius: 8, justifyContent: 'center' }}>
          <MaterialIcons name="add" size={22} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 4, padding: 1 }}>
        <Text style={{ color: '#000', fontSize: 15, margin: 5, padding: 5 }}>SubTotal:</Text>
        <Text style={{ width: '20%', borderWidth: 1, borderRadius: 10, padding: 6, marginTop: 4, marginBottom: 4, marginRight: 4, marginLeft: 2, borderColor: '#cccccc', color: '#000', fontSize: 15 }}>${itemPrice}.00</Text>
        <View style={{ width: '60%', padding: 5 }} >
          <Button
            color="#9ACD32"
            title="Add to Cart"
            onPress={() => {
              dispatch(cartActions.addToCart(dataObj));
              Alert.alert(
                'Yeah!!!',
                'Item successfully added to your Cart.',
                [
                  {
                    text: 'OK', onPress: () => { }
                    // props.navigation.navigate('Home')
                  },
                ],
                { cancelable: false }
              );

              // props.navigation.navigate(
              //   'Cart'
              //   //,
              //   // {
              //   //   itemId: selectedMeal.id,
              //   //   itemQty: currentQty,
              //   //   itemPrice: itemPrice
              //   // }
              // );
            }}
          />
        </View>
      </View>
    </View>);
};

const styles = StyleSheet.create({
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
});

export default MealDetailScreen;
