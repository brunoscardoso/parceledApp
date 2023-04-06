import React, {useEffect, useRef, useState} from 'react';
import {Dimensions} from 'react-native';

import {Portal} from '@gorhom/portal';

import * as S from './styles';

const {height} = Dimensions.get('screen');

export interface IModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children?: any;
}

const Modal: React.FC<IModalProps> = ({children, title, visible, onClose}) => {
  const animationDuration = 400;
  const [modalVisible, setModalVisible] = useState(false);

  const modalAnimatedRef = useRef(null);
  const containerAnimatedRef = useRef(null);

  useEffect(() => {
    if (visible) {
      setModalVisible(true);
    } else {
      modalAnimatedRef?.current?.transition(
        {transform: [{translateY: 0}]},
        {transform: [{translateY: height}]},
        animationDuration,
      );
      containerAnimatedRef?.current?.transition(
        {backgroundColor: '#00000080'},
        {backgroundColor: '#00000000'},
        animationDuration,
      );
    }
  }, [visible]);

  const modalAnimation = {
    from: {transform: [{translateY: height}]},
    to: {transform: [{translateY: 0}]},
  };

  const containerAnimation = {
    from: {backgroundColor: '#00000000'},
    to: {backgroundColor: '#00000080'},
  };

  if (!modalVisible) {
    return null;
  }

  return (
    <Portal>
      <S.Container
        ref={containerAnimatedRef}
        animation={containerAnimation}
        duration={animationDuration}
        easing="ease">
        <S.Modal
          ref={modalAnimatedRef}
          animation={modalAnimation}
          duration={animationDuration}
          easing="ease"
          onTransitionEnd={() => setModalVisible(false)}>
          <S.View>
            <S.ContainerModal>
              <S.HeaderContent>
                <S.ModalTitle>{title}</S.ModalTitle>
                <S.CloseButton onPress={onClose}>
                  <S.CloseIcon />
                </S.CloseButton>
              </S.HeaderContent>

              <S.ViewModal>{children}</S.ViewModal>
            </S.ContainerModal>
          </S.View>
        </S.Modal>
      </S.Container>
    </Portal>
  );
};

export default Modal;
