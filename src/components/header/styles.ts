import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Logo = styled.Image`
  height: 40px;
  width: 50px;
  margin-right: 6px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.palette.orange.primary};
  font-size: 20px;
  font-weight: bold;
`;
