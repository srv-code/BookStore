import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../shared/styles/globalStyles';

interface AboutProps {}

export default function about(props: AboutProps) {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.headerText}>About Book Store</Text>
      <Text style={styles.bodyText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
    fontSize: 28,
    marginVertical: 10,
    color: '#000099',
  },
  bodyText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
});
