import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  FlatList,
  StatusBar,
} from 'react-native';
import AppTheme from '../Utils/AppTheme';
import ProductItemCard from '../Components/ProductItemCard';
import HomeHeader from '../Components/Molecules/HomeHeader';
import SizedBox from '../Components/Atoms/SizedBox';
import HomeBannersCarousel from '../Components/organisms/HomeBannersCarousel';
import {Regular3038} from '../Components/Atoms/CustomText';
import {HomeBannersList} from '../Utils/constants';
import LoadingScreen from '../Components/Molecules/LoadingScreen';

interface ItemsInterface {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: any;
  rating: any;
  stock: any;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}
const HomeScreen = (): JSX.Element => {
  const [itemsList, setItemsList] = useState<Array<ItemsInterface>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchItems(0);
  }, []);

  async function fetchItems(skip?: number) {
    if (!skip) setLoading(true);
    const resParsed: any = await fetch(
      `https://dummyjson.com/products?skip=${skip ?? 0}`,
    );
    const result = await resParsed.json();
    if (result?.products) {
      skip
        ? setItemsList([...itemsList, ...result.products])
        : setItemsList(result.products);
    }
    setLoading(false);
  }
  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={AppTheme.blue} />
      <HomeHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, padding: 10}}>
        <HomeBannersCarousel imageList={HomeBannersList} />
        <Regular3038>Recommended</Regular3038>
        <FlatList
          data={itemsList}
          scrollEnabled={false}
          keyExtractor={(item: ItemsInterface) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item}: any): JSX.Element => (
            <ProductItemCard item={item} />
          )}
          onEndReached={() => {
            fetchItems(itemsList?.length);
          }}
          ListFooterComponent={() => <SizedBox height={40} />}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: AppTheme.background,
  },
});

export default HomeScreen;
