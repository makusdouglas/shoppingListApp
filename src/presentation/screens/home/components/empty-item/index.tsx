import React from 'react';
import * as S from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from 'styled-components';
import {View} from 'react-native';

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
