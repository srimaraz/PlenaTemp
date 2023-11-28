import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CartIcon from '../../../assets/icons/CartIcon';
import AppTheme from '../../Utils/AppTheme';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Medium1420, Regular1012} from '../Atoms/CustomText';
import useCart from '../../State/useCart';

export const ScreenHeaderLeft = () => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      style={styles.headerLeftContainer}
      onPress={() => navigation.goBack()}>
      <Feather name="chevron-left" color={AppTheme.primaryBlue} size={18} />
    </TouchableOpacity>
  );
};
export const ScreenHeaderRight = () => {
  const {cart} = useCart();
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      style={styles.headerRightContainer}
      onPress={() => {
        navigation.navigate('CartScreen');
      }}>
      <CartIcon />
      {cart.length ? (
        <View style={styles.cartIconContainer}>
          <Regular1012
            textStyle={{color: 'white'}}>{`${cart.length}`}</Regular1012>
        </View>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};
export const ScreenHeaderTitle = (): JSX.Element => {
  return <View style={styles.headerTitleContainer} />;
};
export const CartHeaderTitle = (): JSX.Element => {
  const {cart} = useCart();
  return (
    <Medium1420
      textStyle={{
        color: AppTheme.fadeBlack,
      }}>{`Shopping Cart (${cart.length})`}</Medium1420>
  );
};

const styles = StyleSheet.create({
  headerRightContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  headerLeftContainer: {
    height: 50,
    width: 50,
    marginLeft: 10,
    borderRadius: 60,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: AppTheme.primaryOffWhite,
  },
  headerTitleContainer: {
    backgroundColor: 'white',
    flex: 1,
    height: 60,
    width: 800,
  },
  cartIconContainer: {
    position: 'absolute',
    top: -5,
    right: -7,
    height: 16,
    width: 16,
    borderRadius: 20,
    backgroundColor: AppTheme.primaryYellow,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
