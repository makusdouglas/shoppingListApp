import React from 'react';
import * as S from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from 'styled-components';

type EmptyItemProps = {
  onPress: () => void;
};
export const EmptyItem: React.FC<EmptyItemProps> = ({onPress}) => {
  const {COLORS} = useTheme();

  return (
    <S.EmptyItemContainer onPress={onPress}>
      <S.IconContainer>
        <Feather name="plus" color={COLORS.BACKGROUND} size={18} />
      </S.IconContainer>
      <S.Text>Adicione um template</S.Text>
    </S.EmptyItemContainer>
  );
};
