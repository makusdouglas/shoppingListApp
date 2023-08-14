import {FlatList} from 'react-native';
import styled from 'styled-components/native';

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.LEMON_700};
  color: ${({theme}) => theme.COLORS.TEXT.PRIMARY};
  font-size: 24px;
  margin: 24px;
`;

export const Screen = styled.ScrollView`
  background: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const Container = styled(FlatList<IFlatListItem>)`
  background: ${({theme}) => theme.COLORS.BACKGROUND};
`;
