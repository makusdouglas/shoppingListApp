import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {PublicRoutes} from './public';

export const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <PublicRoutes />
    </NavigationContainer>
  );
};
