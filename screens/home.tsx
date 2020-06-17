import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface HomeProps {}

export default function home(props: HomeProps) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
