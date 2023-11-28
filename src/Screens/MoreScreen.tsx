import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { SemiBold1420 } from '../Components/Atoms/CustomText';

const MoreScreen = () => {
  return (
    <View style={styles.container}>
      <SemiBold1420>Coming Soon!</SemiBold1420>
    </View>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
