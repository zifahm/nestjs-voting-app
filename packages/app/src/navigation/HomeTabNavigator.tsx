import {
  createBottomTabNavigator,
  NavigationContainer,
  NavigationScreenConfig,
  NavigationStackScreenOptions
} from "react-navigation";
import PollScreen from "../screens/PollScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { ROUTES, Stack } from "../types/stack";

const NavigationOptions: NavigationScreenConfig<
  NavigationStackScreenOptions
> = ({ navigation }) => {
  let headerTitle: string;

  const { routeName } = navigation.state.routes[navigation.state.index];

  switch (routeName) {
    case ROUTES.HomePoll:
      headerTitle = "Poll";
      break;
    case ROUTES.HomeProfile:
      headerTitle = "Profile";
      break;
  }
  return {
    headerTitle
  };
};

const HomeTabNavigator = (stack: Stack): NavigationContainer => {
  switch (stack) {
    case ROUTES.RootUnAuth:
      return createBottomTabNavigator(
        {
          [ROUTES.HomePoll]: PollScreen
        },
        {
          navigationOptions: NavigationOptions
        }
      );
    case ROUTES.RootApp:
      return createBottomTabNavigator(
        {
          [ROUTES.HomePoll]: PollScreen,
          [ROUTES.HomeProfile]: ProfileScreen
        },
        {
          navigationOptions: NavigationOptions
        }
      );
  }
};

export default HomeTabNavigator;
