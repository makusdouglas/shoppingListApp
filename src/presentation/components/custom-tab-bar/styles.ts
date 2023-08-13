import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import {IconProps} from 'react-native-vector-icons/Icon';
import {makeMetrics} from '@/main/factories';

type DefaultProps = {
  isActive: boolean;
};
const metrics = makeMetrics();

export const TabsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background: red; */

  position: absolute;
  bottom: 0;
  align-self: center;
`;

export const TabContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding: ${metrics.moderateScale(4)}px;
  border-radius: ${metrics.moderateScale(200)}px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_DARKER_800};
  margin-bottom: ${metrics.moderateScale(12)}px;
`;

export const TabButton = styled.TouchableOpacity<DefaultProps>`
  background-color: ${({isActive, theme}) =>
    isActive ? theme.COLORS.PRIMARY : 'transparent'};
  border-radius: 200px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const TabLabel = styled.Text<DefaultProps>``;
type MergerdProps = DefaultProps & IconProps;
export const TabIcon = styled(Feather).attrs<DefaultProps, MergerdProps>(
  props => ({
    ...props,
    size: 24,
    color: props.isActive
      ? props.theme.COLORS.TEXT.PRIMARY
      : props.theme.COLORS.TEXT.PRIMARY_900,
  }),
)<DefaultProps>``;
