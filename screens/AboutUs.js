import * as React from 'react';
import { Button, View, Text, SafeAreaView,StyleSheet,Image } from 'react-native';
import Card from '../components/Card/'
import AboutUsImg from '../assets/images/aboutus.png'

const AboutUs = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
                <Card style={styles.profileItem}>
      <View style={{ flex: 1, padding: 2,margin:1 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={styles.aboutImage}
            source={AboutUsImg}
          />  
          <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey',marginTop:5,marginBottom:5 }}>
          Welcome to Restaurant App.</Text>
          <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey',marginTop:5,marginBottom:50 }}>
          It is just the practice app .
        </Text>
        </View>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey',marginTop:5,marginBottom:5 }}>
          powered By Javed
        </Text>
      </View>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  profileItem: {
    marginHorizontal: 7,
    marginTop:7,
    marginBottom:10,
    padding: 5,
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

export default AboutUs;
