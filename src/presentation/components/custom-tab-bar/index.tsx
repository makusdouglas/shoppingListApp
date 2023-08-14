import React from 'react';
import {Home} from '@/presentation/screens';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import * as S from './styles';
import Feather from 'react-native-vector-icons/Feather';

const tabs = [
  {
    name: 'home',
    icon: 'home',
    label: 'Inicio',
    component: Home,
  },
  {
    name: 'active-lists',
    icon: 'shopping-cart',
    label: 'Listas ativas',
    component: () => <></>,
  },
  {
    name: 'configuration',
    icon: 'calendar',
    label: 'Configurações',
    component: () => <></>,
  },
];

export const customTabBar: React.FC<BottomTabBarProps> = ({
  state,
  navigation,
}) => {
  const currentRouteName = state.routeNames[state.index];

  const routesKeyByName = state.routes.reduce(
    (previous, item) => ({
      ...previous,
      [item.name]: item,
    }),
    {},
  );

  return (
    <S.TabsWrapper>
      <S.TabContainer>
        {tabs.map((tab, index) => {
          const route = routesKeyByName[tab.name];

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!event.defaultPrevented) {
              navigation.navigate(tab.name);
            }
          };
          return (
            <S.TabButton
              key={index}
              onPress={onPress}
              isActive={currentRouteName === tab.name}>
              <S.TabIcon
                name={tab.icon}
                isActive={currentRouteName === tab.name}
              />
              {/* <S.TabLabel isActive={currentRouteName === tab.name}>
              {tab.label}
            </S.TabLabel> */}
            </S.TabButton>
          );
        })}
      </S.TabContainer>
    </S.TabsWrapper>
  );
};
