import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, StyleSheet, TextInput,Text, View,ScrollView ,Dimensions } from 'react-native';

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1,marginTop:20 }}>
    <ScrollView >
      <View style={styles.container}>
        <TextInput
          style={styles.textinput_style}
          placeholder="Old Password"
          placeholderTextColor="#42b3f5" />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.textinput_style}
          placeholder="New Password"
          placeholderTextColor="#42b3f5" />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.textinput_style}
          placeholder="Confirm New password"
          placeholderTextColor="#42b3f5" />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color="#9ACD32"
          title="Save"
          onPress={() => { }}
        />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,  
    flex: 1,
    borderColor:'#42b3f5',
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput_style: {
    borderBottomWidth: 1,
    width:"70%",
    paddingLeft:15,
    fontSize:18,
    borderColor:"#42b3f5",
    color:"gray",
    paddingHorizontal:2,
    paddingVertical: 2,
},
  buttonContainer: {
          margin: 20,  
        //width:"75%",
        borderColor:"#6168DB",
        paddingHorizontal:30,
                paddingVertical: 2,
  },
  header:{
     width:'100%',
     height:90,
     paddingTop:36,
     alignItems:'center',
 },
 headerTitle:{
     color:'black',
     fontSize:18
 },
  bottomTitle:{
     color:'black',
     fontSize:15,
          alignItems:'center',
              justifyContent: 'center',
 }
 
}
);
export default Profile;
