import {
  createBottomTabNavigator,
  NavigationContainer,
  NavigationScreenConfig,
  NavigationStackScreenOptions,
  TabViewConfig
} from "react-navigation";
import PollScreen from "../screens/PollScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { ROUTES, Stack } from "../types/stack";

const NavigationOptions: NavigationScreenConfig<
  NavigationStackScreenOptions
> = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  let headerTitle: string = routeName;

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

const TabBarOptions: TabViewConfig["tabBarOptions"] = {
  labelStyle: {
    fontSize: 16,
    padding: 10
  }
};
const HomeTabNavigator = (stack: Stack): NavigationContainer => {
  switch (stack) {
    case ROUTES.RootUnAuth:
      return createBottomTabNavigator(
        {
          [ROUTES.HomePoll]: PollScreen
        },
        {
          navigationOptions: NavigationOptions,
          tabBarOptions: TabBarOptions
        }
      );
    case ROUTES.RootApp:
      return createBottomTabNavigator(
        {
          [ROUTES.HomePoll]: PollScreen,
          [ROUTES.HomeProfile]: ProfileScreen
        },
        {
          navigationOptions: NavigationOptions,
          tabBarOptions: TabBarOptions
        }
      );
  }
};

export default HomeTabNavigator;
