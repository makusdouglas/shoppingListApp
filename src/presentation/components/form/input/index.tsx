import React, {useImperativeHandle, useRef, useState} from 'react';
import {Control, Controller, RegisterOptions} from 'react-hook-form';
import {TextInput, TextInputProps, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// import imask from 'imask';
import * as S from './styles';

type Props = TextInputProps & {
  name: string;
  controller: Control<any>;
  label?: string;
  rules?: RegisterOptions;
  disabled?: boolean;
  masks?: string[];
  customError?: boolean;
};

export const Input = React.forwardRef<TextInput, Props>(
  (
    {
      name,
      controller,
      label,
      rules,
      disabled,
      masks,
      customError = false,
      ...rest
    },
    ref,
  ) => {
    const [isPassword] = useState(rest.secureTextEntry);
    const [passwordVisibility, setPasswordVisisbility] = useState(isPassword);

    const toggleIcon = () => {
      setPasswordVisisbility(state => !state);
    };

    return (
      <Controller
        name={name}
        rules={rules}
        control={controller}
        render={({field: {onChange, value}, fieldState}) => (
          <S.Container>
            {isPassword && (
              <S.IconContainer onPress={toggleIcon}>
                <Icon
                  name={!passwordVisibility ? 'eye-off' : 'eye'}
                  size={24}
                  color="#000"
                />
              </S.IconContainer>
            )}
            {label && <S.Label disabled={disabled}>{label}</S.Label>}
            <TextInput
              ref={ref}
              {...rest}
              secureTextEntry={
                isPassword === passwordVisibility
                  ? isPassword
                  : passwordVisibility
              }
              onChangeText={text => {
                // if (masks?.length) {
                //   const mask = imask.createMask({
                //     mask: masks.map(item => ({
                //       mask: String(item),
                //     })),
                //   });

                //   const newText = mask.resolve(text);

                //   onChange(newText);
                // } else {
                onChange(text);
                // }
              }}
              value={value}
              editable={!disabled}
              selectTextOnFocus={!disabled}
            />
            {!customError && !!fieldState.error?.message && (
              <Text>{fieldState.error?.message}</Text>
            )}
          </S.Container>
        )}
      />
    );
  },
);
