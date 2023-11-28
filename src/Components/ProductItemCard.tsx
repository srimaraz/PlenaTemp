import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AppTheme from '../Utils/AppTheme';
import {Regular1214, SemiBold1420} from './Atoms/CustomText';
import SizedBox from './Atoms/SizedBox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import useFavourite from '../State/useFavourites';
import useCart from '../State/useCart';

const ProductItemCard = ({item}: any): JSX.Element => {
  const navigation = useNavigation<any>();
  const {addFavProduct, favouriteProducts, removeFavProduct} = useFavourite();
  const {addToCart} = useCart();
  const isFavourite = favouriteProducts.includes(item.id);

  return (
    <TouchableOpacity
      style={styles.ProductCardContainer}
      onPress={() => {
        navigation.navigate('ProductDetails', {item: item});
      }}>
      <TouchableOpacity
        style={styles.favouriteButton}
        onPress={() => {
          isFavourite ? removeFavProduct(item.id) : addFavProduct(item.id);
        }}>
        <AntDesign
          style={{elevation: 10}}
          name={isFavourite ? 'heart' : 'hearto'}
          size={18}
          color={isFavourite ? '#FF8181' : 'black'}
        />
      </TouchableOpacity>

      <Image
        style={styles.productImage}
        source={
          item.thumbnail
            ? {uri: item.thumbnail}
            : require('../../assets/images/FallbackImage.png')
        }
        resizeMode="cover"
      />

      <View style={styles.productContentConntainer}>
        <View style={{width: '80%'}}>
          <SemiBold1420>{`$ ${item.price}`}</SemiBold1420>
          <SizedBox height={10} />
          <Regular1214>{item.title}</Regular1214>
        </View>
        <TouchableOpacity
          onPress={() => {
            addToCart(item);
          }}>
          <AntDesign name="pluscircle" size={18} color={AppTheme.blue} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItemCard;

const styles = StyleSheet.create({
  ProductCardContainer: {
    backgroundColor: AppTheme.primaryOffWhite,
    borderRadius: 12,
    padding: 0,
    overflow: 'hidden',
    marginHorizontal: 8,
    marginTop: 14,
    flex: 1,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 140,
    flex: 1,
  },
  productContentConntainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 14,
    paddingHorizontal: 10,
  },
  favouriteButton: {position: 'absolute', top: 10, zIndex: 2, left: 10},
});
