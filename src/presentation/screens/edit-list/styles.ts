import {makeMetrics} from '@/main/factories';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';

const metrics = makeMetrics();

export const Container = styled(FlatList<IFlatListItem>)`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
  height: ${metrics.verticalScale(96)}px;
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_SURFACE};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: ${metrics.verticalScale(50)}px ${metrics.horizontalScale(16)}px
    ${metrics.verticalScale(8)}px ${metrics.horizontalScale(16)}px;
`;

export const Title = styled.Text`
  flex: 1;
  font-family: ${({theme}) => theme.fontFamily.LEMON_700};
  font-size: ${metrics.moderateScale(16)}px;
  color: ${({theme}) => theme.COLORS.TEXT.PRIMARY};
  margin-left: ${metrics.horizontalScale(16)}px;
`;
