import {makeMetrics} from '@/main/factories';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';

const metrics = makeMetrics();

export const Container = styled(FlatList<IFlatListItem>)`
  background: ${({theme}) => theme.COLORS.BACKGROUND};
  padding: ${metrics.moderateScale(22)}px ${metrics.moderateScale(16)}px;
`;
export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const MainTitleContainer = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.LEMON_700};
  font-size: ${metrics.moderateScale(12)}px;
  color: ${({theme}) => theme.COLORS.TEXT.PRIMARY};
  margin-left: ${metrics.horizontalScale(8)}px;
`;

export const SeeAll = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.EFFRA_400};
  font-size: ${metrics.moderateScale(12)}px;
  color: ${({theme}) => theme.COLORS.TEXT.INACTIVE_500};
  text-transform: uppercase;
`;

export const SmallSpacer = styled.View`
  height: ${metrics.verticalScale(4)}px;
`;

export const ListItem = styled.Pressable`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_SURFACE};
  border-radius: ${metrics.moderateScale(16)}px;
  padding: ${metrics.moderateScale(8)}px ${metrics.moderateScale(16)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${metrics.moderateScale(48)}px;
`;

export const ListItemTitle = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.LEMON_700};
  font-size: ${metrics.moderateScale(14)}px;
  color: ${({theme}) => theme.COLORS.TEXT.PRIMARY};
`;
export const ListItemQuantity = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.EFFRA_400};
  font-size: ${metrics.moderateScale(12)}px;
  color: ${({theme}) => theme.COLORS.TEXT.INACTIVE_500};
`;
