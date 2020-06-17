import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/components/header';
import About from '../screens/home';

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Home' navigation={navigation} />,
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
