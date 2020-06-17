import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/components/header';
import About from '../screens/home';

interface NavigationOptionProps {
  navigation: any;
}

const screens = {
  About: {
    screen: About,
    navigationOptions: (props: NavigationOptionProps) => {
      return {
        headerTitle: () => (
          <Header title='Home' navigation={props.navigation} />
        ),
      };
    },
  },
};

const homeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  },
});

export default homeStack;
