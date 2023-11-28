import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import AppTheme from '../Utils/AppTheme';
import {
  Bold4458,
  Regular1214,
  Regular1618,
  SemiBold1420,
  Medium4260,
} from '../Components/Atoms/CustomText';
import SizedBox from '../Components/Atoms/SizedBox';
import useCart from '../State/useCart';
import useFavourite from '../State/useFavourites';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProductDetails = ({route, navigation}: any): React.JSX.Element => {
  const {item} = route.params;
  const {addToCart} = useCart();
  const {favouriteProducts, addFavProduct, removeFavProduct} = useFavourite();
  const isInWishlist = favouriteProducts.includes(item.id);

  const wishlistHandler = (id: string): void => {
    isInWishlist ? removeFavProduct(id) : addFavProduct(id);
  };

  const handleBuyNow = (): void => {
    navigation.navigate('CheckoutScreen');
  };

  return (
    <View style={styles.screenContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Medium4260>{item.brand}</Medium4260>
          <Bold4458>{item.title}</Bold4458>
        </View>
        <View style={styles.ratingsContainer}>
          <StarRating
            disabled={true}
            maxStars={5}
            fullStarColor={AppTheme.yellow}
            emptyStarColor={AppTheme.black}
            rating={item.rating}
            starSize={18}
          />
          <Regular1214 textStyle={{textAlignVertical: 'center', marginLeft: 8}}>
            120 reviews
          </Regular1214>
        </View>

        <View style={{marginTop: 24}}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.carouselContainer}>
            {item.images?.map((banner: any, index: any) => (
              <View style={styles.container} key={index}>
                <Image
                  source={
                    banner
                      ? {uri: banner}
                      : require('../../assets/images/FallbackImage.png')
                  }
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity
            style={styles.heartContainer}
            onPress={() => wishlistHandler(item.id)}>
            <AntDesign
              name={isInWishlist ? 'heart' : 'hearto'}
              color={isInWishlist ? '#FF8181' : 'black'}
              size={24}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.priceNdiscount}>
          <SemiBold1420
            textStyle={{
              color: AppTheme.primaryBlue,
            }}>{`$ ${item.price}`}</SemiBold1420>
          <View style={styles.discountContainer}>
            <Regular1214
              textStyle={
                styles.discountText
              }>{`${item.discountPercentage} % OFF`}</Regular1214>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.cartbuttonStyle}
            onPress={() => addToCart(item)}>
            <SemiBold1420 textStyle={{color: AppTheme.primaryBlue}}>
              Add To Cart
            </SemiBold1420>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buybuttonStyle}
            onPress={handleBuyNow}>
            <SemiBold1420 textStyle={{color: 'white'}}>Buy Now</SemiBold1420>
          </TouchableOpacity>
        </View>

        <View style={styles.details}>
          <Regular1618>Details</Regular1618>
          <SizedBox height={10} />
          <Regular1618 textStyle={{color: AppTheme.grayText}}>
            {item.description}
          </Regular1618>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 10,
  },
  backButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 25,
  },
  carouselContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
  },
  container: {
    backgroundColor: 'red',
    borderRadius: 12,
    overflow: 'hidden',
    flex: 1,
    marginRight: 10,
  },
  image: {
    backgroundColor: AppTheme.background,
    height: 250,
    width: Dimensions.get('window').width - 40,
  },
  title: {
    fontSize: 50,
    fontFamily: 'Manrope-regular',
    color: AppTheme.black,
  },
  buybuttonStyle: {
    height: 56,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppTheme.blue,
    borderRadius: 20,
  },
  cartbuttonStyle: {
    height: 56,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppTheme.primaryWhite,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: AppTheme.blue,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  heartContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    elevation: 2,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppTheme.background,
  },
  ratingsContainer: {flexDirection: 'row', alignItems: 'center', marginTop: 10},
  details: {marginTop: 15, paddingVertical: 20},
  priceNdiscount: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  discountContainer: {
    backgroundColor: AppTheme.blue,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  discountText: {
    color: AppTheme.white,
    textAlignVertical: 'center',
    textAlign: 'center',
    marginTop: 2,
  },
});

export default ProductDetails;
