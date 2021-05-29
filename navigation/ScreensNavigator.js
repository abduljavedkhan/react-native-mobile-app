import 'react-native-gesture-handler';
import React, { useContext } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CommonActions } from '@react-navigation/native'
//icons
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import HeaderButton from '../components/HeaderButton';
import SideMenu from './SideMenu';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';
import Orders from '../screens/Orders';
import ContactUs from '../screens/ContactUs';
import AboutUs from '../screens/AboutUs';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
//import HttpExample from '../screens/old/Http_Example';
import MealDetailScreen from '../screens/MealDetailScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import { StackScreenStyle } from '../components/StackScreenStyle';
import SearchFilter from '../screens/Search';
import SearchBar from '../components/SearchBar';
import BillingAddress from '../screens/BillingAddress';
import Payment from '../screens/Payment';
import OrderDetailScreen from '../screens/OrderDetailScreen';
import ProfileDetails from '../screens/ProfileDetails';
import ChangePassword from '../screens/ChangePassword';
import { AppContext } from '../Context/AppContext';

const ScreensNavigator = () => {

  const ScreenNavigatorDrawer = createDrawerNavigator();
  const Stack = createStackNavigator();
  const { isSignIn } = useContext(AppContext)

  const homeScreenStack = (props) => {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            ),
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Cart"
                  iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                  onPress={() => {
                    props.navigation.dispatch(
                      CommonActions.reset({
                        index: 0,
                        routes: [
                          { name: 'Cart' },
                        ],
                      })
                    )
                  }}
                />
              </HeaderButtons>
            ),
            headerStyle: StackScreenStyle.headerStyle,
            headerTintColor: StackScreenStyle.headerTintColor,
            headerTitleStyle: StackScreenStyle.headerTitleStyle,
            headerTitleAlign: StackScreenStyle.headerTitleAlign
          }}
        />

        <Stack.Screen
          name="HomeMealDetails"
          component={MealDetailScreen}
          options={{
            title: 'Meal Details Screen', //Set Header Title
            headerStyle: StackScreenStyle.headerStyle,
            headerTintColor: StackScreenStyle.headerTintColor,
            headerTitleStyle: StackScreenStyle.headerTitleStyle,
            headerTitleAlign: StackScreenStyle.headerTitleAlign
          }}
        />
      </Stack.Navigator>
    );
  }

  const menuScreenStack = (props) => {
    return (
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            title: 'Menu',
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>),
            headerStyle: StackScreenStyle.headerStyle,
            headerTintColor: StackScreenStyle.headerTintColor,
            headerTitleStyle: StackScreenStyle.headerTitleStyle,
            headerTitleAlign: StackScreenStyle.headerTitleAlign
          }} />
        <Stack.Screen
          name="MenuCategoryMeals"
          component={CategoryMealsScreen}
          options=
          {{
            title: 'Category Meals Screen',
            headerStyle: StackScreenStyle.headerStyle,
            headerTintColor: StackScreenStyle.headerTintColor,
            headerTitleStyle: StackScreenStyle.headerTitleStyle,
            headerTitleAlign: StackScreenStyle.headerTitleAlign
          }} />
        <Stack.Screen
          name="MenuMealDetails"
          component={MealDetailScreen}
          options={{
            title: 'Meal Details Screen', //Set Header Title
            headerStyle: StackScreenStyle.headerStyle,
            headerTintColor: StackScreenStyle.headerTintColor,
            headerTitleStyle: StackScreenStyle.headerTitleStyle,
            headerTitleAlign: StackScreenStyle.headerTitleAlign
          }} />
      </Stack.Navigator>
    );
  }

  const searchScreenStack = (props) => {
    return (
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name="Search"
          component={SearchFilter}
          options={{
            headerTitle: props => (<SearchBar />),
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }} />
              </HeaderButtons>),
            headerStyle: StackScreenStyle.headerStyle,
            //headerTintColor: StackScreenStyle.headerTintColor,
            headerTitleStyle: StackScreenStyle.headerTitleStyle,
            headerTitleAlign: StackScreenStyle.headerTitleAlign
          }} />
        <Stack.Screen
          name="SearchMealDetails"
          component={MealDetailScreen}
          options={{
            title: 'Meal Details Screen', //Set Header Title
            headerStyle: StackScreenStyle.headerStyle,
            headerTintColor: StackScreenStyle.headerTintColor,
            headerTitleStyle: StackScreenStyle.headerTitleStyle,
            headerTitleAlign: StackScreenStyle.headerTitleAlign
          }} />
      </Stack.Navigator>
    );
  }

  const cartScreenStack = (props) => {
    return (
      <Stack.Navigator initialRouteName="Cart"      >
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            title: 'Cart',
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }} />
              </HeaderButtons>),
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <AntDesign
                  name="home"
                  size={22}
                  color="#fff"
                  style={{ marginRight: 5, marginLeft: 5, marginTop: 2 }}
                  onPress={() => {
                    props.navigation.navigate('Home');
                  }
                  }
                />
              </HeaderButtons>),
            headerStyle: StackScreenStyle.headerStyle,
            headerTintColor: StackScreenStyle.headerTintColor,
            headerTitleStyle: StackScreenStyle.headerTitleStyle,
            headerTitleAlign: StackScreenStyle.headerTitleAlign
          }} />
        <Stack.Screen
          name="BillingAddress"
          component={BillingAddress}
          options={{
            title: 'Billing Address', //Set Header Title
            headerStyle: StackScreenStyle.headerStyle,
            headerTintColor: StackScreenStyle.headerTintColor,
            headerTitleStyle: StackScreenStyle.headerTitleStyle,
            headerTitleAlign: StackScreenStyle.headerTitleAlign
          }}
        />
        <Stack.Screen
          name="PaymentDetails"
          component={Payment}
          options={{
            title: 'Payment Details', //Set Header Title
            headerStyle: StackScreenStyle.headerStyle,
            headerTintColor: StackScreenStyle.headerTintColor,
            headerTitleStyle: StackScreenStyle.headerTitleStyle,
            headerTitleAlign: StackScreenStyle.headerTitleAlign
          }}
        />
        <Stack.Screen
          name="OrderDetails"
          component={Orders}
          options={{
            title: 'Order Details', //Set Header Title
            headerStyle: StackScreenStyle.headerStyle,
            headerTintColor: StackScreenStyle.headerTintColor,
            headerTitleStyle: StackScreenStyle.headerTitleStyle,
            headerTitleAlign: StackScreenStyle.headerTitleAlign
          }}
        />
      </Stack.Navigator>
    );
  }

  const orderScreenStack = (props) => {
    return (
      <Stack.Navigator initialRouteName="Orders">
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{
            title: 'My Orders',
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }} />
              </HeaderButtons>),
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <AntDesign
                  name="home"
                  size={25}
                  color="#fff"
                  style={{ marginRight: 15, marginLeft: 2 }}
                  onPress={() => {
                    props.navigation.navigate('Home');
                  }}
                />
              </HeaderButtons>),
            headerStyle: StackScreenStyle.headerStyle,
            headerTintColor: StackScreenStyle.headerTintColor,
            headerTitleStyle: StackScreenStyle.headerTitleStyle,
            headerTitleAlign: StackScreenStyle.headerTitleAlign
          }} />
        <Stack.Screen
          name="OrderDetailScreen"
          component={OrderDetailScreen}
          options={{
            title: 'Order Details', //Set Header Title
            headerStyle: StackScreenStyle.headerStyle,
            headerTintColor: StackScreenStyle.headerTintColor,
            headerTitleStyle: StackScreenStyle.headerTitleStyle,
            headerTitleAlign: StackScreenStyle.headerTitleAlign
          }}
        />
      </Stack.Navigator>
    );
  }

  const profileScreenStack = (props) => {
    return (
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'My Profile',
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }} />
              </HeaderButtons>),
            headerStyle: StackScreenStyle.headerStyle,
            headerTintColor: StackScreenStyle.headerTintColor,
            headerTitleStyle: StackScreenStyle.headerTitleStyle,
            headerTitleAlign: StackScreenStyle.headerTitleAlign
          }} />
        <Stack.Screen
          name="ProfileDetails"
          component={ProfileDetails}
          options={{
            title: 'Profile Details', //Set Header Title
            headerStyle: StackScreenStyle.headerStyle,
            headerTintColor: StackScreenStyle.headerTintColor,
            headerTitleStyle: StackScreenStyle.headerTitleStyle,
            headerTitleAlign: StackScreenStyle.headerTitleAlign
          }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{
            title: 'Change Password', //Set Header Title
            headerStyle: StackScreenStyle.headerStyle,
            headerTintColor: StackScreenStyle.headerTintColor,
            headerTitleStyle: StackScreenStyle.headerTitleStyle,
            headerTitleAlign: StackScreenStyle.headerTitleAlign
          }}
        />

      </Stack.Navigator>
    );
  }

  const aboutUsScreenStack = (props) => {
    return (
      <Stack.Navigator initialRouteName="AboutUs">
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{
            title: 'About Us',
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }} />
              </HeaderButtons>),
            headerStyle: StackScreenStyle.headerStyle,
            headerTintColor: StackScreenStyle.headerTintColor,
            headerTitleStyle: StackScreenStyle.headerTitleStyle,
            headerTitleAlign: StackScreenStyle.headerTitleAlign
          }} />
      </Stack.Navigator>
    );
  }

  const contactUsScreenStack = (props) => {
    return (
      <Stack.Navigator initialRouteName="ContactUs">
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{
            title: 'Contact Us',
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                  onPress={() => {
                    props.navigation.toggleDrawer();
                  }} />
              </HeaderButtons>),
            headerStyle: StackScreenStyle.headerStyle,
            headerTintColor: StackScreenStyle.headerTintColor,
            headerTitleStyle: StackScreenStyle.headerTitleStyle,
            headerTitleAlign: StackScreenStyle.headerTitleAlign
          }} />
      </Stack.Navigator>
    );
  }

  return (
    <ScreenNavigatorDrawer.Navigator drawerContentOptions={{ activeTintColor: '#42b3f5', itemStyle: { marginVertical: 5, marginTop: 15 }, }} drawerContent={(props) => <SideMenu {...props} />}>
      {isSignIn ? (
        <>
          <ScreenNavigatorDrawer.Screen drawericon={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'} name="Home" options={{
            drawerIcon: props => (
              <AntDesign
                name="home"
                size={20}
                color={props.color}
              />
            )
          }} component={homeScreenStack} />
          <ScreenNavigatorDrawer.Screen name="Menu" component={menuScreenStack} options={{
            drawerIcon: props => (
              <MaterialIcons
                name="restaurant-menu"
                size={20}
                color={props.color}
              />
            )
          }} />
          {/* <ScreenNavigatorDrawer.Screen name="Menu" options={{ drawerLabel: 'Menu' }} component={menuScreenStack} /> */}
          <ScreenNavigatorDrawer.Screen name="Search" component={searchScreenStack} options={{
            drawerIcon: props => (
              <EvilIcons
                name="search"
                size={22}
                color={props.color}
              />
            )
          }} />
          <ScreenNavigatorDrawer.Screen name="Cart" options={{
            drawerIcon: props => (
              <Ionicons
                name="cart-outline"
                size={20}
                color={props.color}
              />
            )
          }} component={cartScreenStack} />
          <ScreenNavigatorDrawer.Screen name="My Orders" options={{
            drawerIcon: props => (
              <Ionicons
                name="ios-create-outline"
                size={20}
                color={props.color}
              />
            )
          }} component={orderScreenStack} />
          <ScreenNavigatorDrawer.Screen name="My Profile" options={{
            drawerIcon: props => (
              <FontAwesome
                name="user-o"
                size={20}
                color={props.color}
              />
            )
          }} component={profileScreenStack} />

          <ScreenNavigatorDrawer.Screen name="About Us" options={{
            drawerIcon: props => (
              <Feather
                name="info"
                size={20}
                color={props.color}
              />
            )
          }} component={aboutUsScreenStack} />
          <ScreenNavigatorDrawer.Screen name="Contact Us" options={{
            drawerIcon: props => (
              <Fontisto
                name="email"
                size={20}
                color={props.color}
              />
            )
          }} component={contactUsScreenStack} />
        </>
      ) :
        (
          <>
            <ScreenNavigatorDrawer.Screen name="SignUp" options={{ drawerLabel: 'SignUp' }} component={SignUp} />
            <ScreenNavigatorDrawer.Screen name="Login" options={{ drawerLabel: 'Login' }} component={Login} />
            {/* <ScreenNavigatorDrawer.Screen name="Http_Call" options={{ drawerLabel: 'API_Call_POC' }} component={HttpExample} /> */}
          </>
        )}
    </ScreenNavigatorDrawer.Navigator>
  );
};


export default ScreensNavigator;