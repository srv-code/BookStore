import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/components/header';
import About from '../screens/cart';

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Cart' navigation={navigation} />,
      };
    },
  },
};

const cartStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  },
});

export default cartStack;
