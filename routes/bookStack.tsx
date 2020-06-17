import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/components/header';
import Books from '../screens/books';

const screens = {
  About: {
    screen: Books,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Books' navigation={navigation} />,
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
