import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const OrderDetailScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            This is Order Detail Screen
          </Text>
          
          <Button
            onPress={() => navigation.navigate('Home')}
            title="Back to Home Page"
          />
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          Welcome to Restaurant App
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          www.insta-app.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default OrderDetailScreen;

