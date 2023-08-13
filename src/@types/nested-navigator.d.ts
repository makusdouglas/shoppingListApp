import {ParamListBase} from '@react-navigation/native';

declare type NeastedNavigator<T extends ParamListBase> = {
  [K in keyof T]: {screen: K; params?: T[K]};
}[keyof T];
