import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/components/header/header';
import About from '../screens/about';

interface NavigationOptionProps {
  navigation: any;
}

const screens = {
  About: {
    screen: About,
    navigationOptions: (props: NavigationOptionProps) => {
      return {
        headerTitle: () => (
          <Header
            title='About'
            iconName='md-information-circle'
            navigation={props.navigation}
          />
        ),
      };
    },
  },
};

const aboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  },
});

export default aboutStack;
