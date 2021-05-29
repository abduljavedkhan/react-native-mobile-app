import * as React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useState } from 'react';
import { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Home = (props) =>
 { const [catId, setCatId] = useState('');
  const cat = '';
  useEffect(() => {
    setCatId(cat);
  }, []);

  const RenderCategories = () => {
    const renderItem = itemData => {
      const handleInputId = () => {
        setCatId(itemData.item.id);
      }

      return (
        <TouchableOpacity onPress={
          handleInputId
        }
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginRight: 13,
            marginTop: 15,
            marginBottom: 10
          }}>
          <View style={{
            padding: 1,
            backgroundColor: 'grey',
            borderRadius: 60,

          }}>
            <View
              style={{
                width: 75,
                height: 75,
                borderRadius: 150,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: 'white',
                overflow: 'hidden'
              }}>
              <Image
                source={{ uri: `${itemData.item.image}` }}
                resizeMode="contain"
                style={{
                  width: 300,
                  height: 300
                }}
              />
            </View>
          </View>
          <Text
            style={{ marginTop: 10 }}>
            {itemData.item.title}
          </Text>
        </TouchableOpacity>
      )
    }

    return (
      <View>
        <Text style={{fontWeight:'bold', fontSize:20, color:'grey'}} >Popular Categories</Text>
        <View>
          <FlatList
            data={CATEGORIES}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingVertical: 2 }}           >
          </FlatList>
        </View>
      </View>
    )
  }

  const CategoryMealList = () => {
    const Stack = createStackNavigator();
    const renderMealItem = itemData => {
      return (
        <MealItem
          title={itemData.item.title}
          image={itemData.item.imageUrl}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
        onSelectMeal={() => {
           props.navigation.navigate(
          'HomeMealDetails',
           {
            mealId: itemData.item.id
           }
        );
        }}
        />
      );
    };

    const displayedMeals = MEALS.filter(
      meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return (
      <View style={styles.screen}>
        <FlatList
          data={catId === '' ? MEALS : displayedMeals}
          keyExtractor={(item, index) => item.id}
          renderItem={renderMealItem}
          style={{ width: '100%' }}
        />
      </View>
    );
  };

  //homepage return
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <RenderCategories />
        <View>
          <Text style={{fontWeight:'bold', fontSize:20, color:'grey'}}>Meal List</Text>
        </View>
        <CategoryMealList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});

export default Home;
