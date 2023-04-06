import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export const AddressList = styled.FlatList``;

export const ImageHouse = styled.Image`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  height: 130px;
  width: 100%;
`;

export const AddressItem = styled.TouchableOpacity`
  background-color: #fff;
  margin: 10px 24px;
  border-radius: 8px;
  shadow-opacity: 0.4;
  shadow-radius: 4px;
  shadow-color: #b4afaf;
  shadow-offset: 1px 1px;
  elevation: 20;
`;

export const AddressTitle = styled.Text`
  margin: 8px;
  font-size: 14px;
`;

export const AddressDescription = styled.Text``;

export const Loading = styled.ActivityIndicator.attrs(({theme}) => ({
  color: theme.palette.orange.primary,
}))`
  margin: 20px 0;
`;
