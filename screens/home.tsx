import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../shared/styles/globalStyles';

interface HomeProps {}

export default function home(props: HomeProps) {
  return (
    <View style={globalStyles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
