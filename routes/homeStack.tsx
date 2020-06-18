import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/components/header/header';
import Home from '../screens/home';
import Books from '../screens/books';
import { defaultNavigationOptions } from '../shared/styles/globalStyles';

interface NavigationOptionProps {
  navigation: any;
}

const screens = {
  Home: {
    screen: Home,
    navigationOptions: (props: NavigationOptionProps) => {
      return {
        headerTitle: () => (
          <Header title='Home' iconName='home' navigation={props.navigation} />
        ),
      };
    },
  },
  Books: {
    screen: Books,
    navigationOptions: (props: NavigationOptionProps) => {
      return {
        headerTitle: () => (
          <Header title='Books' iconName='book' navigation={props.navigation} />
        ),
      };
    },
  },
};

const homeStack = createStackNavigator(screens, {
  defaultNavigationOptions: defaultNavigationOptions,
});

export default homeStack;
