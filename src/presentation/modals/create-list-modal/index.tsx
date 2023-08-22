import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import React, {useCallback, useImperativeHandle, useMemo, useRef} from 'react';
import {useForm} from 'react-hook-form';
import {useTheme} from 'styled-components';
import * as S from './styles';
import {useList} from '@/presentation/hooks';
import {makeAsyncStorageAdapter} from '@/main/factories/cache';

type CreateListModalProps = {
  onClose: () => void;
};

type AddTemplateForm = {
  name: string;
};

export const CreateListModal = React.forwardRef<
  BottomSheet,
  CreateListModalProps
>(({onClose}, ref) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['30%', '40%'], []);

  useImperativeHandle(ref, () => bottomSheetRef.current!, []);

  const {COLORS} = useTheme();
  const {control, handleSubmit, reset} = useForm<AddTemplateForm>();
  const {createList} = useList();

  const submit = () => {
    handleSubmit((data: AddTemplateForm) => {
      const id = `${Math.random().toString(36).substr(2, 9)}-${Date.now()}`;
      createList({id, name: data.name, items: [], type: 'normal'});

      // makeAsyncStorageAdapter().clear();

      reset();
      bottomSheetRef.current?.close();
    })();
  };

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} enableTouchThrough />
    ),
    [],
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={-1}
      onClose={onClose}
      handleStyle={{backgroundColor: 'transparent'}}
      backgroundStyle={{backgroundColor: COLORS.BACKGROUND_SURFACE}}
      handleIndicatorStyle={{backgroundColor: COLORS.TEXT.INACTIVE_500}}
      enablePanDownToClose
      backdropComponent={renderBackdrop}>
      <S.Container>
        <S.Title>Nova lista</S.Title>
        <S.MiddleSpacer />
        <S.CustomInput
          placeholder="Insira um nome para o a lista"
          name="name"
          label="Nome"
          controller={control}
          rules={{
            required: 'Campo obrigatório',
          }}
        />
        <S.BigSpacer />
        <S.ButtonContainer onPress={submit}>
          <S.ButtonTitle>Continuar</S.ButtonTitle>
        </S.ButtonContainer>
      </S.Container>
    </BottomSheet>
  );
});
