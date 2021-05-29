import React,{useContext} from 'react';
import { Button, View, Text, SafeAreaView, Image,StyleSheet,TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Card from '../components/Card/'
import { AppContext } from '../Context/AppContext'

const Profile = ({ navigation }) => {
  const { setSignIn } = useContext(AppContext);
  return (
    <SafeAreaView style={{ flex: 1 }}>
          <Card style={styles.profileItem}>
      <View style={{ flex: 1,marginTop:25,marginBottom:25, padding: 16,flexDirection:'column',justifyContent:'flex-start',paddingBottom:5,width:'100%' }}>
        
 <View style={styles.userRow}>
          <Image
            style={styles.userImage}
            source={{uri: 'http://ircmhealth.com/new/wp-content/uploads/2015/08/person-dummy.jpg'}}
          />
          <View style={styles.userNameRow}>
            <Text style={styles.userNameText}>{`Jack Kallis`}</Text>
          </View>
        </View >
        <View style={{marginBottom:2, marginVertical:5,height:50}}>
           <TouchableHighlight onPress={() => navigation.navigate('ProfileDetails')} style={{height:43, overflow:'hidden',color:'#fff'}} >
          <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:40,backgroundColor:'#9ACD32',padding:1,margin:1,marginBottom:15}}>
            <FontAwesome
            name="user-o"
            size={20}
            color={'#fff'}
          />
           <Text style={{color:'#fff',marginLeft:30,marginRight:50,fontSize:15,paddingHorizontal:10,}}>PROFILE DETAILS</Text>
           </View>
          </TouchableHighlight>
          </View>
          <View style={{marginBottom:2, marginVertical:5,height:50}}>
          <TouchableHighlight onPress={() => navigation.navigate('ChangePassword')} style={{height:43, overflow:'hidden',color:'#fff'}} >
          <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:40,backgroundColor:'#9ACD32',padding:1,margin:1,marginBottom:15}}>
            <FontAwesome
            name="lock"
            size={20}
            color={'#fff'}
          />
           <Text style={{color:'#fff',marginLeft:30,marginRight:20,fontSize:15,paddingHorizontal:10,}}>CHANGE PASSWORD</Text>
           </View>
          </TouchableHighlight>
          </View>
          <View style={{marginBottom:2, marginVertical:5,height:50,borderColor:"#6168DB",paddingVertical:2}}>
          <TouchableHighlight onPress={() => setSignIn(false)} style={{height:43, overflow:'hidden',color:'#fff'}} >
          <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:40,backgroundColor:'#9ACD32',padding:1,margin:1,marginBottom:15}}>
            <SimpleLineIcons
            name="logout"
            size={20}
            color={'#fff'}
          />
           <Text style={{color:'#fff',marginLeft:40,marginRight:100,paddingHorizontal:5, fontSize:15}}>SIGN OUT</Text>
           </View>
          </TouchableHighlight>
          </View>
        </View>
        <View style={{marginVertical:10,height:50,marginTop:25}}>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          Welcome to Restaurant App
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          powered By Javed
        </Text>
        </View>      
        </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
  },
  profileItem: {
    marginHorizontal: 10,
    marginTop:10,
    marginBottom:10,
    padding: 5,
    alignItems: 'center',
    borderColor: '#42b3f5',
    borderWidth: 2,
    height:'97%'
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom: 10,
    marginTop: 45,
  },
  indicatorTab: {
    backgroundColor: 'transparent',
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  sceneContainer: {
    marginTop: 10,
  },
  socialIcon: {
    marginLeft: 14,
    marginRight: 14,
  },
  socialRow: {
    flexDirection: 'row',
  },
  tabBar: {
    backgroundColor: '#EEE',
  },
  tabContainer: {
    flex: 1,
    marginBottom: 12,
  },
  tabLabelNumber: {
    color: 'gray',
    fontSize: 12.5,
    textAlign: 'center',
  },
  tabLabelText: {
    color: 'black',
    fontSize: 22.5,
    fontWeight: '600',
    textAlign: 'center',
  },
  userBioRow: {
    marginLeft: 40,
    marginRight: 40,
  },
  userBioText: {
    color: 'gray',
    fontSize: 13.5,
    textAlign: 'center',
  },
  userImage: {
    borderRadius:100,
    height: 190,
    marginBottom: 10,
    width: 190,
    borderWidth:1,
    borderColor: '#42b3f5',
  },
  userNameRow: {
    marginBottom: 10,
  },
  userNameText: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 12,
  },
})

export default Profile;
