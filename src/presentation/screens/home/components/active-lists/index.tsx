import React from 'react';
import * as S from './styles';
import {useFlatList} from '@/presentation/hooks';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from 'styled-components';
import {TouchableOpacity} from 'react-native';
export const ActiveLists: React.FC = () => {
  const {COLORS} = useTheme();

  const {data, keys} = useFlatList([
    {
      key: 'ACTIVE_LISTS_TITLE',
      render: () => (
        <S.TitleContainer>
          <S.MainTitleContainer>
            <Feather
              name="shopping-bag"
              size={16}
              color={COLORS.TEXT.PRIMARY}
            />
            <S.Title>LISTAS ATIVAS</S.Title>
          </S.MainTitleContainer>
          <TouchableOpacity>
            <S.SeeAll>VER TODAS</S.SeeAll>
          </TouchableOpacity>
        </S.TitleContainer>
      ),
    },
  ]);
  return (
    <S.Container
      data={data}
      renderItem={({item}) => item.render()}
      keyExtractor={({key}) => String(key)}
      showsVerticalScrollIndicator={false}
    />
  );
};
