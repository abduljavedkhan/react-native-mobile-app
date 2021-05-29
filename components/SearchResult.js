import React from 'react';
import { Image } from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native';


const SearchResult = props => {

  return (
    <View style={styles.screen}>
      <TouchableOpacity
        onPress={
          props.onSelectMeal
        }
      >
        <View style={styles.searchItem}>
          <View style={styles.searchItemDetail}>
            <Text style={styles.searchItemHeader}>{props.title}</Text>
            <Text style={styles.searchItemDesc}>{props.complexity.toUpperCase()}</Text>
            <Text style={styles.searchItemPrice}>${props.duration}</Text>
          </View>
          <Image
            source={{ uri: props.image }}
            style={styles.sideImage}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, flexDirection: 'column', padding: 1, marginLeft: 1,marginRight:1,marginBottom:1,marginTop:1
  },
  searchItem: {
    flex: 1, flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: "center", margin: 1, padding: 3, borderRadius: 10
  },
  searchItemDetail: {
    flex: 1, flexDirection: 'column', height: 100, padding: 5, margin: 5, justifyContent: 'space-between'
  },
  sideImage: {
    width: 120, height: 120, margin: 2, borderRadius: 8
  },
  searchItemHeader: {
    fontWeight: 'bold', fontSize: 15, marginBottom: 2, paddingBottom: 2
  },
  searchItemDesc: {
    fontSize: 12, marginBottom: 2, paddingBottom: 2
  },
  searchItemPrice: {
    fontWeight: 'bold', fontSize: 15, paddingTop: 2
  }
});

export default SearchResult;
