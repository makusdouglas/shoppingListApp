import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabs, BottomTabsRoutes} from '@/main/router/stacks';
import {NeastedNavigator} from '@/@types/nested-navigator';
import {MakeEditListScreen} from '@/main/factories/screens';

export type PublicRoutes = {
  'bottom-tabs': NeastedNavigator<BottomTabsRoutes>;
  'edit-list': {id: string};
};

const {Navigator, Screen} = createNativeStackNavigator<PublicRoutes>();

export const PublicRoutes = () => {
  return (
    <Navigator
      screenOptions={_ => ({
        headerShown: false,
      })}>
      <Screen name="bottom-tabs" component={BottomTabs} />
      <Screen name="edit-list" component={MakeEditListScreen} />
    </Navigator>
  );
};
