import React, { useEffect, useState } from 'react';
import Header from '../components/Header.jsx';
import SideMenu from '../components/SideMenu.jsx';
import Container from '../components/styles/containers/Container';
import Flex from '../components/styles/containers/Flex';
import FlexColumn from '../components/styles/containers/FlexColumn';
import RecordCard from '../components/RecordCard.jsx';
import Block from '../components/styles/Block';
import DatePicker from '../components/DatePicker.jsx';
import GetUserRecords from '../utils/GetUserRecords.js';

export default function ProfileDetails() {
  document.title = 'Записи'

  const [records, setRecords] = useState([]);
  useEffect(() => {
    GetUserRecords().then(recs => setRecords(recs));
  }, []);
  const Records = records.length > 0 ? records.map((rec, ind) => <RecordCard key={ind} record={rec} />) : [];

  return (
    <Flex>
      <SideMenu />
      <Container>
        <Header />

        <Block>Записи на приём</Block>
        <Flex>

          <FlexColumn>
            {[...Records]}
          </FlexColumn>

          <FlexColumn>
            <RecordCard img='https://sun9-50.userapi.com/K1XVlsTO5J3Ij083R5BZuvPaWz4eiz50oadMOw/JeETRGhC_eA.jpg' />
            <RecordCard img='https://sun9-50.userapi.com/K1XVlsTO5J3Ij083R5BZuvPaWz4eiz50oadMOw/JeETRGhC_eA.jpg' />
          </FlexColumn>

        </Flex>
      </Container>

    </Flex>
  )
}