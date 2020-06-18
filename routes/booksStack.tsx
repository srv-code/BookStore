import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/components/header/header';
import Books from '../screens/books';
import { defaultNavigationOptions } from '../shared/styles/globalStyles';

interface NavigationOptionProps {
  navigation: any;
}

const screens = {
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

const booksStack = createStackNavigator(screens, {
  defaultNavigationOptions: defaultNavigationOptions,
});

export default booksStack;
