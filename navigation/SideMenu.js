// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const SideMenu = (props) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

  const filteredProps = {
    ...props,
    state: {
      ...props.state,
      routeNames: props.state.routeNames.filter(
        // To hide single option
        // (routeName) => routeName !== 'HiddenPage1',
        // To hide multiple options you can add & condition
        (routeName) => {
          routeName !== 'BillingAddress'
           && routeName !== 'Payment';
        },
      ),
      routes: props.state.routes.filter(
        (route) =>
          route.name !== 'BillingAddress'
           && route.name !== 'Payment',
      ),
    }}

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*Top Large Image */}
      {/* <Image
        source={{ uri: BASE_PATH + proileImage }}
        style={styles.sideMenuProfileIcon}
      /> */}
      {/* <Text style={styles.sideMenuProfileIcon}>        
     </Text> */}
      <DrawerContentScrollView {...filteredProps}>
        <DrawerItemList {...filteredProps} />
        {/* <DrawerItem
          label="Visit Us"
          onPress={() => Linking.openURL('https://aboutreact.com/')}
        />
        <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL('https://aboutreact.com/');
            }}>
            Rate Us
          </Text>
          <Image
            source={{ uri: BASE_PATH + 'star_filled.png' }}
            style={styles.iconStyle}
          />
        </View> */}
      </DrawerContentScrollView>
      {/* <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
        www.insta-app.com
      </Text>
      <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
        App by Tissatech.in
      </Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SideMenu;
