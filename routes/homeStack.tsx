import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/components/header/header';
import Home from '../screens/home';

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
};

const homeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  },
});

export default homeStack;
