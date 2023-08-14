import {makeMetrics} from '@/main/factories';
import styled from 'styled-components/native';

const metrics = makeMetrics();
export const TopBarContainer = styled.View`
  margin-top: ${metrics.moderateScale(64)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${metrics.moderateScale(16)}px;
`;

export const TopBarTitleContainer = styled.View``;

export const TopBarTitle = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.LEMON_700};
  color: ${({theme}) => theme.COLORS.TEXT.PRIMARY};
  font-size: ${metrics.moderateScale(14)}px;
`;
export const TopBarSubTitle = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.EFFRA_400};
  color: ${({theme}) => theme.COLORS.TEXT.INACTIVE};
  font-size: ${metrics.moderateScale(12)}px;
`;
export const TopBarActionsContainer = styled.View`
  flex-direction: row;
`;
export const TopBarAction = styled.TouchableOpacity`
  margin-left: ${metrics.moderateScale(10)}px;
`;
