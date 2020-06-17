import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../shared/styles/globalStyles';

interface CartProps {}

export default function cart(props: CartProps) {
  return (
    <View style={globalStyles.container}>
      <Text>Cart Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
