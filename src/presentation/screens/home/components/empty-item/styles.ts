import {makeMetrics} from '@/main/factories';
import {hexToRgba} from '@/utils';
import styled from 'styled-components/native';
const metrics = makeMetrics();
export const EmptyItemContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${metrics.moderateScale(16)}px;
  border-radius: ${metrics.moderateScale(16)}px;
  border: ${metrics.moderateScale(1)}px dashed
    ${({theme}) => theme.COLORS.TEXT.INACTIVE_100};
  /* background-color: ${({theme}) => theme.COLORS.BACKGROUND_SURFACE}; */
`;
export const Text = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.EFFRA_400};
  color: ${({theme}) => theme.COLORS.TEXT.INACTIVE_500};
  font-size: ${metrics.moderateScale(14)}px;
  margin-top: ${metrics.moderateScale(8)}px;
`;

export const IconContainer = styled.View`
  width: ${metrics.moderateScale(42)}px;
  height: ${metrics.moderateScale(42)}px;
  background-color: ${({theme}) => hexToRgba(theme.COLORS.TEXT.PRIMARY, 60)};
  border-radius: ${metrics.moderateScale(42)}px;

  justify-content: center;
  align-items: center;
`;
