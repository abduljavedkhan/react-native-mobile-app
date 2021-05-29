import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
//import axios from 'axios';

class HttpExample extends Component {
   state = {
      data: ''
   }
   componentDidMount = () => {
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log('response: ',responseJson);
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }

   // componentDidMount  = () => {
   //    axios({
   //      "method": "GET",
   //      "url": "https://jsonplaceholder.typicode.com/posts/1",
   //    //   "headers": {
      //     "content-type": "application/octet-stream",
      //     "x-rapidapi-host": "quotes15.p.rapidapi.com",
      //     "x-rapidapi-key": "yourapikey",
      //     "useQueryString": true
      //   }, "params": {
      //     "language_code": "en"
      //   }
   //    })
   //       .then((response) => {
   //          console.log('axios response: ',response.data);
   //          this.setState({
   //                    data: response.data
   //                 })
   //    })
   //      .catch((error) => {
   //        console.log(error)
   //      })
   //  }

   render() {
      return (
         <View style={styles.header}>
                 <Text style={styles.headerTitle} >API Data Response</Text>
                 <View style={{
            backgroundColor:'white',
            overflow: 'hidden',
            marginLeft: 10,
            marginTop: 10
          }}>
            <Text style={styles.headerTitle}>
               {`UserId :  ${this.state.data.userId}`}
            </Text>
            <Text style={styles.headerTitle}>
            {`Title :  ${this.state.data.title}`}
            </Text>
            <Text style={styles.headerTitle}>
            {`Body :   ${this.state.data.body}`}
            </Text>
            </View>
         </View>
         
      )
   }
}
const styles = StyleSheet.create({
    container: {
      margin: 10,  
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinput_style:{
          /*  paddingHorizontal: 2,
      paddingVertical: 5,
      borderBottomColor: '#ccc',
      borderBottomWidth: 1*/
  borderBottomWidth: 1,
          width:"75%",
          borderColor:"#6168DB",
          paddingHorizontal:2,
          paddingVertical: 2,
  },
    buttonContainer: {
            margin: 20,  
          //width:"75%",
          borderColor:"#6168DB",
          paddingHorizontal:50,
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
  
export default HttpExample;