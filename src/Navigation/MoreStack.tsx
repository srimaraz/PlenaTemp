import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ScreenHeaderLeft,
  ScreenHeaderRight,
  ScreenHeaderTitle,
} from '../Components/Molecules/ScreenHeader';
import MoreScreen from '../Screens/MoreScreen';

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
        name="MoreScreen"
        component={MoreScreen}
      />
    </Stack.Navigator>
  );
};

export default FavouriteStack;
