import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from 'styled-components';
import * as S from './styles';

type EmptyItemProps = {
  onPress: () => void;
  message?: string;
};
export const EmptyItem: React.FC<EmptyItemProps> = ({onPress, message}) => {
  const {COLORS} = useTheme();

  return (
    <S.EmptyItemContainer onPress={onPress}>
      <S.IconContainer>
        <Feather name="plus" color={COLORS.BACKGROUND} size={18} />
      </S.IconContainer>
      <S.Text>{message}</S.Text>
    </S.EmptyItemContainer>
  );
};
