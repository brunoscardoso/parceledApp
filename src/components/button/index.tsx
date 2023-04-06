import React from 'react';

import * as S from './styles';

interface IProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

export default function Input({label, onPress, disabled}: IProps) {
  return (
    <S.Container>
      <S.Touchable disabled={disabled} onPress={onPress}>
        <S.Label>{label}</S.Label>
      </S.Touchable>
    </S.Container>
  );
}
