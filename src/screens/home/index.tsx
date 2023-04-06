import React, {useState} from 'react';
import axios from 'axios';

import Header from 'components/header';
import Input from 'components/input';
import Button from 'components/button';
import Modal from 'components/modal';

import {houses} from './mock';

import HomeDetails from './HomeDetails';

import * as S from './styles';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState([]);
  const [findAddress, setFindAddress] = useState('');
  const [selectedHouse, setSelectedHouse] = useState<any>('');
  const [showModal, setShowModal] = useState(false);
  const [urlMap, setUrlMap] = useState('');

  async function handleGetAddress() {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://geocode.maps.co/search?q=${findAddress}}`,
      );

      const serializedResponse = response.data.map((item: any) => ({
        ...item,
        title: houses[Math.floor(Math.random() * 8)].title,
        image: houses[Math.floor(Math.random() * 8)].image,
        guidancePrice: houses[Math.floor(Math.random() * 8)].guidancePrice,
        bidPrice: houses[Math.floor(Math.random() * 8)].bidPrice,
        bidCapRateprice: houses[Math.floor(Math.random() * 8)].bidCapRateprice,
      }));

      setAddress(serializedResponse);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSelect(item: any) {
    setSelectedHouse(item);
    setShowModal(true);
    setUrlMap(
      `https://www.google.com/maps?q=${item.lat},${item.boundingbox[3]}&z=21&t=h&controls=0&output=embed`,
    );
  }

  return (
    <S.Container>
      <Header />

      <S.Container>
        <Input
          label="Type your search address"
          value={findAddress}
          onChangeText={setFindAddress}
        />

        <Button
          label="Search"
          onPress={handleGetAddress}
          disabled={!findAddress}
        />
        {loading && <S.Loading size="large" />}

        <S.AddressList
          data={address}
          keyExtractor={(_, idx) => idx.toString()}
          renderItem={({item}: any) => {
            return (
              <S.AddressItem onPress={() => handleSelect(item)}>
                <S.ImageHouse resizeMode="cover" source={{uri: item.image}} />
                <S.AddressTitle>{item.display_name}</S.AddressTitle>
              </S.AddressItem>
            );
          }}
        />
      </S.Container>

      <Modal
        visible={showModal}
        onClose={() => setShowModal(false)}
        title={selectedHouse?.title}>
        <HomeDetails item={selectedHouse} urlMap={urlMap} />
      </Modal>
    </S.Container>
  );
}
