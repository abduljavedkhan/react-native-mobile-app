import React,{useContext} from 'react';
import { Button, StyleSheet, TextInput,Text, View,ScrollView ,Dimensions } from 'react-native';
import { AppContext } from '../Context/AppContext';

const Login = props => {
  const { setSignIn } = useContext(AppContext);

return(
<ScrollView  contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}} >
	<View style={styles.header}>
    <Text style={styles.headerTitle}>Sign In</Text>
	</View>
    <View style={styles.container}>
	<TextInput
	style={styles.textinput_style}
	placeholder="Username"
	placeholderTextColor="#42b3f5" />
	</View>
	    <View style={styles.container}>
	<TextInput
	style={styles.textinput_style}
	placeholder="Password"
	placeholderTextColor="#42b3f5" />
	</View>
	  <View style={styles.buttonContainer}>
              <Button
              color="#9ACD32"
                title="SIGN IN"
              //  onPress={() => {}}
                onPress={()=>{
                  setSignIn(true)
                }}
              />
			      <Text style={styles.bottomTitle} onPress={()=>{props.navigation.navigate('SignUp')}}>  New user ?   <Text style={styles.bottomSignUp} >Sign-Up</Text></Text>
            </View>
	</ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
      margin: 10,  
   //   flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinput_style:{
  borderBottomWidth: 1,
          width:"75%",
          borderColor:"#42b3f5",
          paddingHorizontal:2,
          paddingVertical: 2,
  },
    buttonContainer: {
            margin: 20,  
          //width:"75%",
          borderColor:"#42b3f5",
          paddingHorizontal:30,
                  paddingVertical: 2,
    },
    header:{
       width:'40%',
       height:50,
       paddingTop:20,
       alignItems:'center',
   },
   headerTitle:{
       color:'grey',
       marginLeft:20,
       fontSize:18
   },
    bottomTitle:{
       color:'black',
       fontSize:15,
       marginTop:15,
       color:'grey',
            alignItems:'center',
                justifyContent: 'center',
   },
   bottomSignUp:{
    color:'black',
    fontSize:15,
    marginTop:15,
    marginLeft:15,
    color:'#42b3f5',
         alignItems:'center',
             justifyContent: 'center',
   }
  }
  );

  export default Login;