import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppTheme from '../../Utils/AppTheme';
import {
  Bold1214,
  Medium1420,
  Regular1012,
  SemiBold2428,
} from '../Atoms/CustomText';
import CartIcon from '../../../assets/icons/CartIcon';
import SearchIcon from '../../../assets/icons/SearchIcon';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import useCart from '../../State/useCart';

function HomeHeader() {
  const navigation = useNavigation<any>();
  const {cart} = useCart();
  const userName = 'Srimaraj';
  const location = 'Indiranagar, Bengaluru';

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <SemiBold2428
          textStyle={{
            color: AppTheme.white,
          }}>{`Hey, ${userName}`}</SemiBold2428>

        <TouchableOpacity
          style={{}}
          onPress={() => {
            navigation.navigate('CartScreen');
          }}>
          <CartIcon />
          {cart.length ? (
            <View
              style={styles.cartIconContainer}>
              <Regular1012
                textStyle={{color: 'white'}}>{`${cart.length}`}</Regular1012>
            </View>
          ) : (
            <></>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.headerInput}>
        <View style={styles.imageContainer}>
          <SearchIcon />
        </View>
        <View style={styles.inputPlaceHolder}>
          <TextInput
            placeholder="Search Products or Store"
            placeholderTextColor="#8891A5"
            style={{color: AppTheme.white, fontSize: 14}}
          />
        </View>
      </View>

      <View style={styles.userInformationContainer}>
        <View>
          <Bold1214 textStyle={{opacity: 0.5, color: AppTheme.white}}>
            DELIVERY TO
          </Bold1214>
          <View style={{flexDirection: 'row'}}>
            <Medium1420 textStyle={{color: AppTheme.white}}>
              {location}
            </Medium1420>
            <EvilIcons name="chevron-down" color={AppTheme.white} size={26} />
          </View>
        </View>
        <View>
          <Bold1214 textStyle={{opacity: 0.5, color: AppTheme.white}}>
            WITHIN
          </Bold1214>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Medium1420 textStyle={{color: AppTheme.white}}>1 Hour</Medium1420>
            <EvilIcons name="chevron-down" color={AppTheme.white} size={22} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default HomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: AppTheme.blue,
    paddingHorizontal: 20,
  },
  headerContent: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartImage: {
    width: 20,
    height: 20,
  },
  headerInput: {
    height: 50,
    marginTop: 20,
    borderRadius: 28,
    flexDirection: 'row',
    backgroundColor: AppTheme.primaryBlue,
  },
  imageContainer: {
    justifyContent: 'center',
    padding: 18,
  },
  inputPlaceHolder: {
    color: AppTheme.primaryWhite,
    backgroundColor: AppTheme.primaryBlue,
    borderRadius: 28,
    justifyContent: 'center',
  },
  searchIcon: {
    width: 15,
    height: 15,
  },
  userInformationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  cartIconContainer:{
    position: 'absolute',
    top: -5,
    right: -7,
    height: 16,
    width: 16,
    borderRadius: 20,
    backgroundColor: AppTheme.primaryYellow,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
