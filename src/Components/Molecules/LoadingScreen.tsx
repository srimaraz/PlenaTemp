import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SemiBold1420} from '../Atoms/CustomText';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <SemiBold1420>Loading...</SemiBold1420>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
