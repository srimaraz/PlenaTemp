import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ScreenHeaderLeft,
  ScreenHeaderRight,
  ScreenHeaderTitle,
} from '../Components/Molecules/ScreenHeader';
import FavouriteScreen from '../Screens/Favourites';

const Stack = createStackNavigator();
const FavouriteStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: ScreenHeaderLeft,
        headerRight: ScreenHeaderRight,
        headerTitle: ScreenHeaderTitle,
      }}>
      <Stack.Screen
        options={{header: () => <></>}}
        name="FavouriteScreen"
        component={FavouriteScreen}
      />
    </Stack.Navigator>
  );
};

export default FavouriteStack;
