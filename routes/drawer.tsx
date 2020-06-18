import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
// import BooksStack from './booksStack';
import CartStack from './cartStack';
import AboutStack from './aboutStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  // Books: {
  //   screen: BooksStack,
  // },
  Cart: {
    screen: CartStack,
  },
  About: {
    screen: AboutStack,
  },
});

export default createAppContainer(RootDrawerNavigator);
