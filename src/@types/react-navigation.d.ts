import {RouteProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp, NavigationProp} from '@react-navigation/stack';

import {PublicRoutes} from '@/main/router/public';

declare module '@react-navigation/native' {
  export type RootStackParamList = PublicRoutes;
  export type RootStackNavigationProp = NavigationProp<RootStackParamList>;
  export type ParamListBase = RootStackParamList;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends PublicRoutes {}
  }
}
