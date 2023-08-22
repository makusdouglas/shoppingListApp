import {TopBar} from '@/presentation/components/top-bar';
import * as S from './styles';
import {useRef} from 'react';
import {ActiveLists, TemplateLists} from './components';
import {FloatActionButton} from '@/presentation/components/float-action-button';
import {View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {useFlatList} from '@/presentation/hooks';
import {Portal} from 'react-native-portalize';
import {CreateListModal} from '@/presentation/modals/create-list-modal';

export const Home = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const openCreateListModal = () => {
    bottomSheetRef.current?.expand();
  };

  const {data, keys} = useFlatList([
    {
      key: 'TOP_BAR',
      render: () => <TopBar />,
    },
    // {
    //   key: 'TEMPLATE_LISTS',
    //   render: () => <TemplateLists onPressAddTemplate={openCreateListModal} />,
    // },
    {
      key: 'ACTIVE_LISTS',
      render: () => <ActiveLists onOpenCreateModal={openCreateListModal} />,
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
      <FloatActionButton iconName="plus" onPress={openCreateListModal} />
      <Portal>
        <CreateListModal ref={bottomSheetRef} onClose={() => {}} />
      </Portal>
    </View>
  );
};
