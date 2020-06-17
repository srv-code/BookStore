import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/components/header';
import Books from '../screens/books';

interface NavigationOptionProps {
  navigation: any;
}

const screens = {
  Books: {
    screen: Books,
    navigationOptions: (props: NavigationOptionProps) => {
      return {
        headerTitle: () => (
          <Header title='Books' navigation={props.navigation} />
        ),
      };
    },
  },
};

const booksStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  },
});

export default booksStack;
