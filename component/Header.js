import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/phoenix.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {backgroundColor: '#D1D5DB', padding: 10, alignItems: 'center', position:'relative'},
});

export default Header;
