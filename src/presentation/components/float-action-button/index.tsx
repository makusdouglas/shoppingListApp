import FeatherIcons from 'react-native-vector-icons/glyphmaps/Feather.json';
import Feather from 'react-native-vector-icons/Feather';
import * as S from './styles';
import {useTheme} from 'styled-components';
import React from 'react';

type FloatActionButtonProps = {
  onPress: () => void;
  iconName: keyof typeof FeatherIcons;
};
export const FloatActionButton: React.FC<FloatActionButtonProps> = ({
  iconName,
  onPress,
}) => {
  const {COLORS} = useTheme();
  return (
    <S.FAB onPress={onPress}>
      <Feather name={iconName} color={COLORS.TEXT.PRIMARY} size={24} />
    </S.FAB>
  );
};
