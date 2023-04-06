import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  padding: 10px 22px 10px 22px;
`;

export const Label = styled.Text`
  margin-bottom: 6px;
  color: ${({theme}) => theme.palette.orange.primary};
`;

export const InputText = styled.TextInput`
  background-color: ${({theme}) => theme.palette.gray.tertiary};
  border-color: ${({theme}) => theme.palette.orange.primary};
  border-width: 1px;
  padding: 8px;
  font-size: 16px;
  border-radius: 6px;
  height: 50px;
  width: 100%;
`;
