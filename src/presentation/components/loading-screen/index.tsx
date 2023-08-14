import {ActivityIndicator} from 'react-native';
import * as S from './styles';

export const LoadingScreen = () => {
  return (
    <S.Container>
      <ActivityIndicator size="small" color="#fff" />
    </S.Container>
  );
};
