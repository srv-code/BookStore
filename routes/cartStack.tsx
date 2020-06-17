import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/components/header';
import Cart from '../screens/cart';

interface NavigationOptionProps {
  navigation: any;
}

const screens = {
  Cart: {
    screen: Cart,
    navigationOptions: (props: NavigationOptionProps) => {
      return {
        headerTitle: () => (
          <Header title='Cart' navigation={props.navigation} />
        ),
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
