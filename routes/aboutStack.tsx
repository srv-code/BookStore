import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/components/header/header';
import About from '../screens/about';
import { defaultNavigationOptions } from '../shared/styles/globalStyles';

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
  defaultNavigationOptions: defaultNavigationOptions,
});

export default aboutStack;
