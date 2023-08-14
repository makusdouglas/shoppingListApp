import {TopBar} from '@/presentation/components/top-bar';
import * as S from './styles';
import {useMemo, useRef} from 'react';
import {ActiveLists, TemplateLists} from './components';
import {FloatActionButton} from '@/presentation/components/float-action-button';
import {View} from 'react-native';
import {AddTemplateModal} from './components/add-template-modal';
import BottomSheet from '@gorhom/bottom-sheet';
import {useFlatList} from '@/presentation/hooks';
import {Portal} from 'react-native-portalize';

export const Home = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const openAddTemplateModal = () => {
    bottomSheetRef.current?.expand();
  };

  const {data, keys} = useFlatList([
    {
      key: 'TOP_BAR',
      render: () => <TopBar />,
    },
    {
      key: 'TEMPLATE_LISTS',
      render: () => <TemplateLists onPressAddTemplate={openAddTemplateModal} />,
    },
  ]);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <S.Container
        data={data}
        renderItem={({item}) => item.render()}
        keyExtractor={({key}) => String(key)}
        stickyHeaderIndices={keys}
        showsVerticalScrollIndicator={false}
      />
      <FloatActionButton iconName="plus" onPress={openAddTemplateModal} />
      <Portal>
        <AddTemplateModal ref={bottomSheetRef} onClose={() => {}} />
      </Portal>
    </View>
  );
};
