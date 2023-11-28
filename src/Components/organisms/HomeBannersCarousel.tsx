import React from 'react';
import CarouselCardItem from '../Molecules/CarouselCard';
import {ScrollView} from 'react-native';
import {StyleSheet} from 'react-native';
import AppTheme from '../../Utils/AppTheme';

interface Iprops{
    imageList:Array<any>
}
const HomeBannersCarousel =( props:Iprops):JSX.Element => {
  const {imageList} = props;

  //TODO : Card should snap to start/left
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.carouselContainer}>
      {imageList.map((banner, index) => (
        <CarouselCardItem banner={banner} index={index} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 10,
    marginBottom: 14,
    backgroundColor: AppTheme.white,
  },
});
export default HomeBannersCarousel;
