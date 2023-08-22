import styled from 'styled-components/native';
import {Input as DefaultInput} from '@/presentation/components/form';
import {makeMetrics} from '@/main/factories';
const metrics = makeMetrics();
export const Container = styled.View`
  padding: ${metrics.moderateScale(24)}px;
  flex: 1;
`;
export const CustomInput = styled(DefaultInput)`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  color: ${({theme}) => theme.COLORS.TEXT.PRIMARY};
  height: 48px;
  padding: 0 ${metrics.moderateScale(16)}px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  border-radius: 8px;
  border: ${metrics.moderateScale(2)}px solid
    ${({theme}) => theme.COLORS.TEXT.PRIMARY};
  height: ${metrics.moderateScale(48)}px;
  padding: ${metrics.moderateScale(12)}px;
  /* flex: 1; */
`;

export const ButtonTitle = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.LEMON_700};
  color: ${({theme}) => theme.COLORS.TEXT.PRIMARY};
  font-size: ${metrics.moderateScale(14)}px;
  text-align: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.LEMON_700};
  color: ${({theme}) => theme.COLORS.TEXT.PRIMARY};
  font-size: ${metrics.moderateScale(14)}px;
`;

export const SmallSpacer = styled.View`
  height: ${metrics.verticalScale(8)}px;
`;

export const MiddleSpacer = styled.View`
  height: ${metrics.verticalScale(16)}px;
`;

export const BigSpacer = styled.View`
  height: ${metrics.verticalScale(24)}px;
`;
