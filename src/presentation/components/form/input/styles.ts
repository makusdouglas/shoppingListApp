import {makeMetrics} from '@/main/factories';
import styled from 'styled-components/native';

interface LabelProps {
  disabled: boolean;
}

const metrics = makeMetrics();

export const Label = styled.Text<LabelProps>`
  margin-bottom: ${metrics.verticalScale(8)}px;
  font-size: ${metrics.moderateScale(15)}px;
  line-height: ${metrics.moderateScale(18)}px;
  font-family: ${({theme}) => theme.fontFamily.EFFRA_400};
  color: ${({theme, disabled}) =>
    disabled ? theme.COLORS.TEXT.INACTIVE_500 : theme.COLORS.TEXT.PRIMARY};
`;

export const Container = styled.View`
  width: 100%;
  position: relative;
`;

export const IconContainer = styled.Pressable`
  position: absolute;
  bottom: ${metrics.verticalScale(24)}px;
  right: ${metrics.horizontalScale(16)}px;
  transform: translateY(12px);
  z-index: 10;
`;
