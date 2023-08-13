import {ThemeSwitcher} from '@/infra/theme';
import {Router} from './router';

export const App = () => {
  return (
    <ThemeSwitcher theme="dark">
      <Router />
    </ThemeSwitcher>
  );
};
