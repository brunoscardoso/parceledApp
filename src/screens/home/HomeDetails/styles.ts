import styled from 'styled-components/native';
import {WebView} from 'react-native-webview';

export const ModalContainer = styled.View`
  flex: 1;
`;

export const ImageModal = styled.Image`
  height: 150px;
  width: 100%;
`;

export const TypeHouse = styled.Text`
  font-size: 16px;
  color: #0073e6;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const ModalTitle = styled.Text`
  font-size: 16px;
`;

export const ContentTextModal = styled.View`
  margin: 10px 22px;
`;

export const TitleModalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleContainer = styled.View`
  width: 50%;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const PriceCollumnContainer = styled.View`
  padding: 9px;
  margin-top: 16px;
  width: 33.99%;
  border-width: 0.5px;
  border-color: #cfcfcf;
  justify-content: center;
  align-items: center;
`;

export const PriceTitle = styled.Text`
  font-weight: 500;
  color: #a0a0a0;
  margin-bottom: 8px;
`;

export const PriceText = styled.Text``;

export const ButtonsModalContainer = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  margin-right: 6px;
`;

export const ButtonImage = styled.Image``;

export const MapView = styled(WebView)``;
