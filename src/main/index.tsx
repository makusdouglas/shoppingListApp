import {ThemeSwitcher} from '@/infra/theme';
import {Router} from './router';
import {Suspense} from 'react';
import {LoadingScreen} from '@/presentation/components/loading-screen';
import {ContextReducer} from './context-reducer';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Host} from 'react-native-portalize';

export const App = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <GestureHandlerRootView style={{flex: 1}}>
        <ThemeSwitcher theme="dark">
          <ContextReducer>
            <Host style={{flex: 1}}>
              <Router />
            </Host>
          </ContextReducer>
        </ThemeSwitcher>
      </GestureHandlerRootView>
    </Suspense>
  );
};
