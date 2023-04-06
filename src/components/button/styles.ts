import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  padding: 10px 22px 10px 22px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.palette.light.primary};
`;

export const Touchable = styled.TouchableOpacity<{disabled?: boolean}>`
  background-color: ${({theme, disabled}) =>
    disabled ? theme.palette.gray.secondary : theme.palette.orange.primary};
  justify-content: center;
  align-items: center;
  padding: 8px;
  font-size: 16px;
  border-radius: 6px;
  height: 50px;
  width: 100%;
`;
