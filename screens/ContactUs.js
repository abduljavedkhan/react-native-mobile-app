import * as React from 'react';
import { Button, View, Text, SafeAreaView,StyleSheet } from 'react-native';
import { Entypo,Fontisto,FontAwesome } from '@expo/vector-icons';
import Card from '../components/Card/'

const ContactUs = props => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
                      <Card style={styles.contactItem}>
      <View style={{ flex: 1, padding: 2,marginBottom:5 }}>
      <View
          style={{
            flex: 0.40,
          }}>
            </View>
        <View
          style={{
            flexDirection:'row',
            justifyContent: 'center',
            alignContent:'center',
            margin:5,
            marginRight:72,
            marginTop:10,
            marginLeft:5,

          }}>
          <FontAwesome
          style={{marginRight:20}}
            name="phone"
            size={30}
            color={'grey'}
          />  
          <Text style={{ fontSize: 18,marginLeft:10, textAlign: 'center', color: 'grey' }}>
          (210) 111 0000
        </Text>
        </View>
     
        <View
          style={{
            flexDirection:'row',
            justifyContent: 'center',
            alignContent:'center'
            ,
            margin:15
          }}>
          <Fontisto
          style={{marginRight:20}}
            name="email"
            size={30}
            color={'grey'}
          />  
          <Text style={{ fontSize: 18,marginLeft:10,textAlign: 'center', color: 'grey' }}>
          restaurant-app@abc.com
        </Text>
        </View>
        <View
          style={{
            flex:1,
            flexDirection:'row',
            justifyContent: 'center',
            alignContent:'center',
            margin:5
          }}>
          <Entypo
          style={{marginRight:20}}
            name="location"
            size={30}
            color={'grey'}
          />
          <View style={{flexDirection:'column'}}>  
          <Text style={{ fontSize: 15,marginLeft:25,textAlign: 'left', color: 'grey' }}>
          5152 Remote Dev Building, 
        </Text>
        <Text style={{ fontSize: 15,marginLeft:20, textAlign: 'left', color: 'grey' }}>
          #125 Village Remote,
        </Text>
        <Text style={{ fontSize: 15,marginLeft:20, textAlign: 'left', color: 'grey' }}>
         IN 78229
        </Text>
        </View>
        </View>   

        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          powered By Javed
        </Text>
      </View>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  contactItem: {
    margin:10,
    marginBottom:10,
    padding: 10,
    alignItems: 'center',
    borderColor: '#42b3f5',
    borderWidth: 2,
    height:'97%',
    overflow:'hidden'
  },
  aboutImage: {
    borderRadius:10,
    height: '58%',
    margin: 2,
    width: '112%',
  }
})


export default ContactUs;
