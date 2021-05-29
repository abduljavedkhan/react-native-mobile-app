import * as React from 'react';
import {
View, SafeAreaView
  , FlatList,
  StyleSheet
} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const Menu = (props) => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        image={itemData.item.image}
      onSelect={() => {
        props.navigation.navigate(
       'MenuCategoryMeals',
        {
          categoryId: itemData.item.id
        }
     );
     }}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={CATEGORIES}
          renderItem={renderGridItem}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Menu;
