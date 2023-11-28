import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ScreenHeaderLeft,
  ScreenHeaderRight,
  ScreenHeaderTitle,
} from '../Components/Molecules/ScreenHeader';
import Categories from '../Screens/Categories';

const Stack = createStackNavigator();

const CategoriesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: ScreenHeaderLeft,
        headerRight: ScreenHeaderRight,
        headerTitle: ScreenHeaderTitle,
      }}>
      <Stack.Screen
        options={{header: () => <></>}}
        name="Categories"
        component={Categories}
      />
    </Stack.Navigator>
  );
};

export default CategoriesStack;
