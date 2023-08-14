import React, {useMemo} from 'react';
import * as S from './styles';
import {useFlatList} from '@/presentation/hooks';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from 'styled-components';
import {Alert, TouchableOpacity} from 'react-native';
import {EmptyItem} from '../empty-item';
import {useTemplateList} from '@/presentation/constexts';
type TemplateListsProps = {
  onPressAddTemplate: () => void;
};
export const TemplateLists: React.FC<TemplateListsProps> = ({
  onPressAddTemplate,
}) => {
  const {COLORS} = useTheme();
  const {templateList} = useTemplateList();

  const emptyItem = {
    key: 'TEMPLATE_LISTS_EMPTY_ITEM',
    render: () => <EmptyItem onPress={onPressAddTemplate} />,
  };

  const templateLists = useMemo(() => {
    if (templateList.length === 0) return [emptyItem];

    if (!templateList.map) return [emptyItem];
    return templateList.map(item => ({
      key: item.id,
      render: () => (
        <S.ListItem
          onPress={() => {
            Alert.alert('teste');
          }}>
          <S.ListItemTitle>{item.name}</S.ListItemTitle>
          <S.ListItemQuantity>
            {item.items?.length ?? 0} itens
          </S.ListItemQuantity>
        </S.ListItem>
      ),
    }));
  }, [templateList]);

  const {data, keys} = useFlatList(
    [
      {
        key: 'TEMPLATE_LISTS_TITLE',
        render: () => (
          <S.TitleContainer>
            <S.MainTitleContainer>
              <Feather name="list" size={16} color={COLORS.TEXT.PRIMARY} />
              <S.Title>MEUS TEMPLATES</S.Title>
            </S.MainTitleContainer>
          </S.TitleContainer>
        ),
      },
      ...templateLists,
    ],
    [templateList],
  );

  return (
    <>
      <S.Container
        data={data}
        renderItem={({item}) => item.render()}
        keyExtractor={({key}) => String(key)}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <S.SmallSpacer />}
      />
    </>
  );
};
