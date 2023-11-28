import {StyleSheet} from 'react-native';
import React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import ProductDetails from '../Screens/ProductDetails';
import {createStackNavigator} from '@react-navigation/stack';
import CheckoutScreen from '../Screens/CheckoutScreen';
import {
  CartHeaderTitle,
  ScreenHeaderLeft,
  ScreenHeaderRight,
  ScreenHeaderTitle,
} from '../Components/Molecules/ScreenHeader';
import CartScreen from '../Screens/Cart';
const Stack = createStackNavigator();

const HomeStack = ({route, navigation}: any) => {
  //TODO : Better solution for it is to flip the nav structucture, STACK>TAB  instead of TAB>STACK
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'ProductDetails' || routeName === 'CartScreen') {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
      navigation.getParent()?.setOptions({headerShown: false});
      navigation
        .getParent()
        ?.getParent()
        ?.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarStyle: styles.tabBarStyle,
      });
      navigation.getParent()?.setOptions({headerShown: true});
      navigation
        .getParent()
        ?.getParent()
        ?.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: ScreenHeaderLeft,
        headerRight: ScreenHeaderRight,
        headerTitle: ScreenHeaderTitle,
      }}>
      <Stack.Screen
        options={{header: () => <></>}}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
      <Stack.Screen
        options={{
          headerLeft: ScreenHeaderLeft,
          headerTitle: CartHeaderTitle,
          headerRight: () => <></>,
        }}
        name="CartScreen"
        component={CartScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    marginBottom: 10,
    marginTop: 2,
    fontFamily: 'Manrope-SemiBold',
    fontSize: 12,
  },
  tabBarStyle: {
    position: 'absolute',
    bottom: 15,
    width: '95%',
    left: 10,
    borderRadius: 20,
    height: 70,
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: 'black',
  },
});

export default HomeStack;
