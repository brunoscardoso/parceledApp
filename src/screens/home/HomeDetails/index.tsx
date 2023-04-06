import React from 'react';

import shareIcon from 'assets/share_icon.png';
import saveIcon from 'assets/save_icon.png';

import * as S from './styles';

export default function HomeDetails({item, urlMap}) {
  return (
    <S.ModalContainer>
      <S.ImageModal resizeMode="cover" source={{uri: item.image}} />

      <S.ContentTextModal>
        <S.TitleModalContainer>
          <S.TitleContainer>
            <S.TypeHouse>{item?.type?.toUpperCase()}</S.TypeHouse>
            <S.ModalTitle>{item.display_name}</S.ModalTitle>
          </S.TitleContainer>

          <S.ButtonsModalContainer>
            <S.Button>
              <S.ButtonImage source={shareIcon} />
            </S.Button>
            <S.Button>
              <S.ButtonImage source={saveIcon} />
            </S.Button>
          </S.ButtonsModalContainer>
        </S.TitleModalContainer>
      </S.ContentTextModal>

      <S.PriceContainer>
        <S.PriceCollumnContainer>
          <S.PriceTitle>Guidance Price</S.PriceTitle>
          <S.PriceText>{item?.guidancePrice}</S.PriceText>
        </S.PriceCollumnContainer>

        <S.PriceCollumnContainer>
          <S.PriceTitle>Bid Price</S.PriceTitle>
          <S.PriceText>{item?.bidPrice}</S.PriceText>
        </S.PriceCollumnContainer>

        <S.PriceCollumnContainer>
          <S.PriceTitle>Bid Cap Rate</S.PriceTitle>
          <S.PriceText>{item?.bidCapRateprice}</S.PriceText>
        </S.PriceCollumnContainer>
      </S.PriceContainer>

      {urlMap && (
        <S.MapView
          source={{
            html: `<iframe width="100%" height="40%" src=${urlMap} frameborder="0" allow="autoplay; encrypted-media"></iframe>`,
          }}
          startInLoadingState={true}
          originWhitelist={['*', 'intent://*']}
        />
      )}
    </S.ModalContainer>
  );
}
