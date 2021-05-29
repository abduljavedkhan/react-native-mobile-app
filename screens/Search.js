import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList, } from 'react-native-gesture-handler';
import { AppContext } from '../Context/AppContext';
import { MEALS } from '../data/dummy-data';
import SearchResult from '../components/SearchResult';

//import { useSelector} from 'react-redux';
//import search from '../store/reducers/search';

const SearchFilter = (props) => {
 const { search } = useContext(AppContext);

  //  const { search, setSearch } = useContext(AppContext);
 //   const searchKeyword = useSelector(state => state.search.searchKeyword);



  const displayedMeals = MEALS.filter(
   meal => meal.title.toLowerCase().indexOf(search.toLowerCase()) >= 0);
    //meal => meal.title.toLowerCase().indexOf(searchKeyword.toLowerCase()) >= 0);
  const renderMealItem = itemData => {
    return (
      <SearchResult
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate(
            'SearchMealDetails',
            {
              mealId: itemData.item.id
            }
          );
        }}
      />
    );
  };

  return (

    <View style={styles.screen}>
      <FlatList
        data={search.toLowerCase() === '' ? MEALS : displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );

};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2
  }
});

export default SearchFilter;


