import React, {useMemo} from 'react';
import {useFlatList, useList} from '@/presentation/hooks';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from 'styled-components';
import {Alert, TouchableOpacity, Vibration} from 'react-native';
import {EmptyItem} from '../empty-item';

import * as S from './styles';
import {useNavigation} from '@react-navigation/native';

type ActiveListsProps = {
  onOpenCreateModal: () => void;
};

export const ActiveLists: React.FC<ActiveListsProps> = ({
  onOpenCreateModal,
}) => {
  const {COLORS} = useTheme();
  const {list} = useList();
  const {navigate} = useNavigation();

  const activeLists = list.filter(item => item?.done !== true);

  const hasActiveLists = activeLists.length > 0;

  const emptyItem: IFlatListItem = {
    key: 'ACTIVE_LISTS_EMPTY_ITEM',
    render: () => (
      <EmptyItem
        onPress={onOpenCreateModal}
        message="Comece adicionando uma lista de itens"
      />
    ),
  };

  const vibrateOnLongPress = () => {
    Vibration.vibrate([0, 10, 0, 10]);
  };
  const onPressListItem = (id: string) => () => {
    navigate('edit-list', {id});
  };

  const activeListsItems: IFlatListItem[] = useMemo(() => {
    return hasActiveLists
      ? activeLists.map(item => ({
          key: item.id,
          render: () => (
            <S.ListItem
              onLongPress={() => Alert.alert('LongPress' + item.id)}
              onPress={onPressListItem(item.id)}>
              <S.LabelsContainer>
                <S.ListItemTitle>{item.name}</S.ListItemTitle>
                <S.ListItemQuantity>
                  {item.items?.length ?? 0} itens
                </S.ListItemQuantity>
              </S.LabelsContainer>
              <Feather
                name="chevron-right"
                color={COLORS.TEXT.PRIMARY}
                size={18}
              />
            </S.ListItem>
          ),
        }))
      : [emptyItem];
  }, [activeLists]);

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
          {/* <TouchableOpacity>
            <S.SeeAll>VER TODAS</S.SeeAll>
          </TouchableOpacity> */}
        </S.TitleContainer>
      ),
    },
    ...activeListsItems,
  ]);
  return (
    <S.Container
      data={data}
      renderItem={({item}) => item.render()}
      keyExtractor={({key}) => String(key)}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <S.SmallSpacer />}
    />
  );
};
