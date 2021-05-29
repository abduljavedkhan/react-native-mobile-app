import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Button, StyleSheet, TextInput,Text, View,ScrollView ,Dimensions } from 'react-native';

const SignUp = props => {
    return(

<ScrollView >
<KeyboardAvoidingView>
	<View style={styles.header}>
    <Text style={styles.headerTitle}>Sign Up to continue</Text>
	</View>
    <View style={styles.container}>
	<TextInput
	style={styles.textinput_style}
	placeholder="Saluation"
	placeholderTextColor="#42b3f5" />
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
	placeholder="First Name"
	placeholderTextColor="#42b3f5" />
	</View>
	<View style={styles.container}>
	<TextInput
	style={styles.textinput_style}
	placeholder="Last Name"
	placeholderTextColor="#42b3f5" />
	</View>
	    <View style={styles.container}>
		<TextInput
	style={styles.textinput_style}
	placeholder="Email"
	placeholderTextColor="#42b3f5" />
	</View>
	    <View style={styles.container}>
		<TextInput
	style={styles.textinput_style}
	placeholder="Phone Number"
	placeholderTextColor="#42b3f5" />
	</View>
	    <View style={styles.container}>
		<TextInput
	style={styles.textinput_style}
	placeholder="Password"
	placeholderTextColor="#42b3f5" />
    </View>
		    <View style={styles.container}>
		<TextInput
	style={styles.textinput_style}
	placeholder="Confirm password"
	placeholderTextColor="#42b3f5" />
    </View>
	  <View style={styles.buttonContainer}>
              <Button
                title="Sign Up"
                color="#9ACD32"
                onPress={() => props.navigation.navigate('Login')}
              />
			      <Text style={styles.bottomTitle} onPress={()=>{props.navigation.navigate('Login')}}>Already registered ? <Text style={styles.bottomSignUp} > Sign-In </Text></Text>
            </View>
            </KeyboardAvoidingView>
	</ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
      margin: 10,  
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinput_style: {
        borderBottomWidth: 1,
          width:"75%",
          borderColor:"#42b3f5",
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
       paddingTop:40,
       marginTop:30,
       alignItems:'center',
   },
   headerTitle:{
       color:'grey',
       fontSize:18
   },
    bottomTitle:{
       color:'black',
       fontSize:15,
       marginTop:15,       color:'grey',
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

  export default SignUp;