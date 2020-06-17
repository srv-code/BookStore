import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../shared/styles/globalStyles';

interface BooksProps {}

export default function books(props: BooksProps) {
  return (
    <View style={globalStyles.container}>
      <Text>Books Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
