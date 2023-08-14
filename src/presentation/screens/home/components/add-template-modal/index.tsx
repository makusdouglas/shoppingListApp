import BottomSheet from '@gorhom/bottom-sheet';
import React, {useImperativeHandle, useMemo, useRef} from 'react';
import {useForm} from 'react-hook-form';
import {useTheme} from 'styled-components';
import * as S from './styles';
import {Portal} from 'react-native-portalize';
import {useTemplateList} from '@/presentation/constexts';
import {makeAsyncStorageAdapter} from '@/main/factories/cache';

type AddTemplateModalProps = {
  onClose: () => void;
};

type AddTemplateForm = {
  name: string;
};

export const AddTemplateModal = React.forwardRef<
  BottomSheet,
  AddTemplateModalProps
>(({onClose}, ref) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['30%', '40%'], []);

  useImperativeHandle(ref, () => bottomSheetRef.current!, []);

  const {COLORS} = useTheme();
  const {control, handleSubmit, reset} = useForm<AddTemplateForm>();
  const {addToList} = useTemplateList();

  const submit = () => {
    handleSubmit((data: AddTemplateForm) => {
      const id = Math.random().toString(36).substr(2, 9);
      addToList({id, name: data.name, items: [], type: 'normal'});

      //   makeAsyncStorageAdapter().clear();

      reset();
      bottomSheetRef.current?.close();
    })();
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={-1}
      onClose={onClose}
      handleStyle={{backgroundColor: 'transparent'}}
      backgroundStyle={{backgroundColor: COLORS.BACKGROUND_SURFACE}}
      handleIndicatorStyle={{backgroundColor: COLORS.TEXT.INACTIVE_500}}
      enablePanDownToClose>
      <S.Container>
        <S.Title>Adicionar template</S.Title>
        <S.MiddleSpacer />
        <S.CustomInput
          controller={control}
          placeholder="Insira um nome para o template"
          name="name"
          label="Nome"
        />
        <S.BigSpacer />
        <S.ButtonContainer onPress={submit}>
          <S.ButtonTitle>Continuar</S.ButtonTitle>
        </S.ButtonContainer>
      </S.Container>
    </BottomSheet>
  );
});
