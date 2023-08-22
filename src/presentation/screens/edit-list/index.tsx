import {View, Text, Touchable, TouchableOpacity} from 'react-native';

import * as S from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {useList} from '@/presentation/hooks';

type Props = {
  listId: string;
};

export const EditListScreen = ({listId}: Props) => {
  const THEME = useTheme();

  const {goBack, canGoBack} = useNavigation();

  const {list} = useList();

  const listData = list.find(item => item.id === listId);

  const handleBack = () => {
    if (canGoBack()) {
      goBack();
    }
  };

  return (
    <>
      <S.Header>
        <TouchableOpacity onPress={handleBack}>
          <Feather
            name="arrow-left"
            color={THEME.COLORS.TEXT.PRIMARY}
            size={24}
          />
        </TouchableOpacity>
        <S.Title>{listData.name}</S.Title>
        <TouchableOpacity>
          <Feather
            name="more-vertical"
            color={THEME.COLORS.TEXT.PRIMARY}
            size={24}
          />
        </TouchableOpacity>
      </S.Header>
      <S.Container data={[]} renderItem={({item}) => item.render()} />
    </>
  );
};
