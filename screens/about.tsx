import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../shared/styles/globalStyles';

interface AboutProps {}

export default function about(props: AboutProps) {
  return (
    <View style={globalStyles.container}>
      <Text>About Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
