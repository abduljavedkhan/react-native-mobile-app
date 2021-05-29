import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import ScreensNavigator from './navigation/ScreensNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './Context/AppContext';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';
import searchReducer from './store/reducers/search';
import billingAddressReducer from './store/reducers/billingAddress';
import paymentReducer from './store/reducers/payment';

const rootReducer = combineReducers({
  cart: cartReducer,
  orders: ordersReducer,
  // search: searchReducer,
  billingAddress: billingAddressReducer,
  payment: paymentReducer
});

const store = createStore(rootReducer);


export default function App() {

  return (
    <Provider store={store}>
      <AppProvider>
        <NavigationContainer>
          <ScreensNavigator />
        </NavigationContainer>
      </AppProvider>
    </Provider>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
