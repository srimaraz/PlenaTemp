import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import AppTheme from '../../Utils/AppTheme';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.75);

const CarouselCardItem = ({banner, index}: any) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={banner} style={styles.image} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppTheme.background,
    overflow: 'hidden',
    height: Dimensions.get('window').height / 5,
    width:ITEM_WIDTH
  },
  image: {
    backgroundColor: AppTheme.background,
    height: '100%',
    width: '100%',
  },
});

export default CarouselCardItem;
