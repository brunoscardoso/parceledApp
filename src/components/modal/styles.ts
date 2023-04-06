import styled from 'styled-components/native';

import {Dimensions} from 'react-native';
import * as Animatable from 'react-native-animatable';

import closeIcon from 'assets/close_icon.png';

const {width, height} = Dimensions.get('screen');

export const View = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
`;

export const Container = styled(Animatable.View)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  background-color: #00000080;
`;

export const background = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  width: ${width}px;
  height: ${height}px;
`;

export const ModalScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  justifyContent: 'flex-start',
})`
  flex: 1;
  height: auto;
  margin-bottom: 26px;
`;

export const Modal = styled(Animatable.View)`
  justify-content: space-between;
  width: 100%;
  height: 85%;
`;

export const ContainerModal = styled.View`
  position: relative;
  background: #fff;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background: #fff;
`;

export const HeaderContent = styled.View`
  margin: 24px 24px 0 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalTitle = styled.Text`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`;

export const ViewModal = styled.View<{
  showHeader?: boolean;
  applyInternalPadding?: boolean;
}>`
  flex: 1;
`;

export const CloseIcon = styled.Image.attrs({
  source: closeIcon,
})``;

export const ButtonContainer = styled.View``;

export const Button = styled.TouchableOpacity``;

export const CloseButton = styled.TouchableOpacity`
  height: 50px;
  width: 20px;
`;
