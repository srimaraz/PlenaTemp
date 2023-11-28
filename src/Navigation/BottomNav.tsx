import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import HomeStack from './HomeStack';
import CategoriesStack from './CategoriesStack';
import FavouritesStack from './FavouritesStack';
import MoreStack from './MoreStack';
import {View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppTheme from '../Utils/AppTheme';
import {StyleSheet} from 'react-native';

const BottomTabConfig = [
  {
    name: 'HomeStack',
    label: 'Home',
    component: HomeStack,
    tabBarIcon: ({focused}: any) => {
      return (
        <View style={focused ? styles.focusedTab : {}}>
          <Entypo
            name="home"
            size={focused ? 25 : 32}
            color={focused ? '#f0c537' : 'black'}
          />
        </View>
      );
    },
  },
  {
    name: 'CategoriesStack',
    label: 'Categories',
    component: CategoriesStack,
    tabBarIcon: ({focused}: any) => {
      return (
        <View style={focused ? styles.focusedTab : {}}>
          <MaterialIcons
            name="category"
            size={focused ? 25 : 30}
            color={focused ? '#f0c537' : 'black'}
          />
        </View>
      );
    },
  },
  {
    name: 'FavouritesStack',
    label: 'Favourites',
    component: FavouritesStack,
    tabBarIcon: ({focused}: any) => {
      return (
        <View style={focused ? styles.focusedTab : {}}>
          <AntDesign
            name="heart"
            size={focused ? 25 : 28}
            color={focused ? '#f0c537' : 'black'}
          />
        </View>
      );
    },
  },
  {
    name: 'MoreStack',
    label: 'More',
    component: MoreStack,
    tabBarIcon: ({focused}: any) => {
      return (
        <View style={focused ? styles.focusedTab : {}}>
          <Entypo
            name="dots-three-vertical"
            size={focused ? 25 : 28}
            color={focused ? '#f0c537' : 'black'}
          />
        </View>
      );
    },
  },
];

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {

  return (
    <NavigationContainer
      >
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarStyle: styles.tabBarStyle,
        }}>
        {BottomTabConfig.map((item, index) => {
          return (
            <Tab.Screen
              key={item.name}
              name={item.label}
              component={item.component}
              options={{
                tabBarIcon: item.tabBarIcon,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default BottomTabNavigator;
const styles = StyleSheet.create({
  focusedTab: {
    position: 'absolute',
    bottom: 2,
    padding: 14,
    borderRadius: 60,
    backgroundColor: 'black',
    borderWidth: 6,
    elevation: 4,
    borderColor: AppTheme.background,
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
  tabBarLabel: {
    marginBottom: 10,
    marginTop: 2,
    fontFamily: 'Manrope-SemiBold',
    fontSize: 12,
  },
});
