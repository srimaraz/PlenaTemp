import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AppTheme from '../../Utils/AppTheme';
import useCart from '../../State/useCart';
import {Regular1416, SemiBold1420} from '../Atoms/CustomText';
import SizedBox from '../Atoms/SizedBox';

const CartListItem = ({item}: any): JSX.Element => {
  const {id, images, title, price, quantity} = item;
  const {addToCart, removeFromCart} = useCart();

  const incrementHandler = (): void => {
    addToCart(item);
  };

  const decrementHandler = (): void => {
    removeFromCart(item);
  };

  return (
    <View style={styles.cartItemCard} key={id}>
      <Image
        source={
          images?.length
            ? {uri: images?.[0] ?? ''}
            : require('../../../assets/images/FallbackImage.png')
        }
        style={{width: 45, height: 45, borderRadius: 8}}
      />
      <View style={{alignItems: 'flex-start', width: '40%'}}>
        <SemiBold1420 textStyle={{textAlign: 'left'}}>{title}</SemiBold1420>
        <SizedBox height={8} />
        <Regular1416>{`$ ${price}`}</Regular1416>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => decrementHandler()}
          style={styles.cartAmoutButton}>
          <Entypo name="minus" color={AppTheme.primaryBlue} size={14} />
        </TouchableOpacity>
        <SemiBold1420>{quantity}</SemiBold1420>
        <TouchableOpacity
          onPress={() => incrementHandler()}
          style={styles.cartAmoutButton}>
          <Entypo name="plus" color={AppTheme.primaryBlue} size={14} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartListItem;

const styles = StyleSheet.create({
  cartItemCard: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 18,
    marginHorizontal: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    marginRight: 15,
  },
  cartAmoutButton: {
    backgroundColor: AppTheme.primaryOffWhite,
    height: 42,
    width: 42,
    borderRadius: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
