import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  ImageBackground,
  Image
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

const CategoryGridTile = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{
            ...styles.container
            //  ,...{ backgroundColor: props.color }
          }}
        >
          <ImageBackground
            source={{ uri: props.image }}
            style={styles.bgImage
              // {width:175,height:200,justifyContent: 'center'}
            }
          >
            <View>
              <Text style={styles.title} numberOfLines={2}>
                {props.title}
              </Text>
            </View>
          </ImageBackground>
          {/* <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text> */}
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 5,
    height: 130,
    //  borderRadius: 10,
    overflow: 'hidden'
  },
  container: {
    flex: 1,
    // borderRadius: 10,
    //  shadowColor: 'black',
    //  shadowOpacity: 0.26,
    //   shadowOffset: { width: 0, height: 1 },
    //   shadowRadius: 10,
    //   elevation: 3,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: 'center',
    color: 'white',
    opacity: 1
  }, bgImage: {
    shadowOpacity: 0.5,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});

export default CategoryGridTile;
