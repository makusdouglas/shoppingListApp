import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabs} from '../stacks/bottom-tabs';

export type PublicRoutes = {
  'bottom-tabs': undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<PublicRoutes>();

export const PublicRoutes = () => {
  return (
    <Navigator
      screenOptions={_ => ({
        headerShown: false,
      })}>
      <Screen name="bottom-tabs" component={BottomTabs} />
    </Navigator>
  );
};
