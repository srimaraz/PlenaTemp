import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';
import AppTheme from '../Utils/AppTheme';
import useCart from '../State/useCart';
import CartListItem from '../Components/Molecules/CartListItem';
import LoadingScreen from '../Components/Molecules/LoadingScreen';
import {SemiBold1420} from '../Components/Atoms/CustomText';

const CartScreen = ({navigation}: any) => {
  const {cart} = useCart();
  const [totalBill, setTotalBill] = useState<number>(0);
  const [loadingCart, setLoadingCart] = useState<boolean>(false);

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  async function calculateTotal() {
    let total = 0;
    setLoadingCart(true);
    try {
      const responses = await Promise.all(
        cart.map(async ({id, quantity}) => {
          const res = await fetch(`https://dummyjson.com/products/${id}`); // Send request for each product
          const resJson = await res.json();
          total += resJson.price * quantity;
        }),
      );
      setTotalBill(total);
    } catch {
      Alert.alert('Failed to fetch Product details');
    } finally {
      setLoadingCart(false);
    }
  }

  if (loadingCart) {
    return <LoadingScreen />;
  }
  return (
    <View style={styles.CartScreenContainer}>
      <View style={{height: '100%'}}>
        <View style={styles.cartItemCardContainer}>
          <FlatList
            data={cart}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({item}) => <CartListItem item={item} />}
          />
        </View>
        <View style={styles.billInfoContainer}>
          <View style={styles.footerContainer}>
            <Text style={styles.leftPrice}>Subtotal</Text>
            <Text style={styles.rightPrice}>$ {totalBill}</Text>
          </View>

          <View style={styles.footerContainer}>
            <Text style={styles.leftPrice}>Delivery</Text>
            <Text style={styles.rightPrice}>$ 2.00</Text>
          </View>

          <View style={styles.footerContainer}>
            <Text style={styles.leftPrice}>Total</Text>
            <Text style={styles.rightPrice}>$ {totalBill + 2}</Text>
          </View>

          <TouchableOpacity
            style={styles.checkOutButton}
            onPress={() => navigation.navigate('CheckOutScreen')}>
            <SemiBold1420 textStyle={{color: AppTheme.white}}>
              Proceed To Checkout
            </SemiBold1420>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  CartScreenContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 14,
  },
  billInfoContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: AppTheme.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 18,
    paddingTop: 24,
  },

  cartItemCardContainer: {
    marginTop: 10,
    paddingVertical: 20,
  },

  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  leftPrice: {
    fontSize: 14,
    fontFamily: 'Manrope-Regular',
    color: AppTheme.primaryGray,
  },
  rightPrice: {
    fontSize: 14,
    fontFamily: 'Manrope-SemiBold',
    color: AppTheme.black,
  },
  checkOutButton: {
    height: 56,
    width: '100%',
    marginTop: 32,
    marginBottom: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppTheme.blue,
    borderRadius: 20,
  },
  separator: {
    backgroundColor: AppTheme.gray,
    height: 1,
    opacity: 0.3,
    width: '100%',
  },
});
