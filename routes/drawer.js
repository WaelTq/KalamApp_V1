import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import ProfileStack from './ProfileStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Profile: {
    screen: ProfileStack,
  },
//   About: {
//     screen: AboutStack,
//   },
});

export default createAppContainer(RootDrawerNavigator);