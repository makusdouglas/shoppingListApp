import {customTabBar} from '@/presentation/components';
import {Home} from '@/presentation/screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type BottomTabsRoutes = {
  home: undefined;
  ['active-lists']: undefined;
  configuration: undefined;
};
const {Navigator, Screen} = createBottomTabNavigator<BottomTabsRoutes>();
export const BottomTabs = () => {
  return (
    <Navigator
      tabBar={customTabBar}
      screenOptions={_ => ({
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Screen name="home" component={Home} />
      <Screen name="active-lists" component={Home} />
      <Screen name="configuration" component={Home} />
    </Navigator>
  );
};
