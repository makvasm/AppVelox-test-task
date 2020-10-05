import React, { useEffect, useState } from 'react';
import Header from '../components/Header.jsx';
import SideMenu from '../components/SideMenu.jsx';
import Container from '../components/styles/containers/Container';
import Flex from '../components/styles/containers/Flex';
import RecordCard from '../components/RecordCard.jsx';
import Block from '../components/styles/Block';
import Grid from '../components/styles/containers/Grid';
import Card from '../components/styles/Card';
import * as icons from '../components/styles/Icons';
import CardIcon from '../components/styles/CardIcon';
import SplitLine from '../components/styles/SplitLine.js';
import GetUserRecords from '../utils/GetUserRecords.js';
import InfoCard from '../components/InfoCard.jsx';

export default function Profile() {
  document.title = 'Профиль'

  // получить список записей
  useEffect(() => {
    GetUserRecords().then(recs => setRecords(recs));
  }, []);

  const [records, setRecords] = useState([]);

  // рендер первых двух записей
  const Records = () => {
    let forRender = [];
    for (let i = 0; i < 2; i++) {
      if (records[i]) forRender.push(<RecordCard key={i} record={records[i]} />)
    }
    return forRender;
  };

  return (
    <Container>
        <SideMenu />
          <Header title='Мой профиль' />

          <Block>Записи на приём</Block>
          <Flex center padding>
            {Records()}
            <div style={{ padding: '20px', textAlign: 'center' }}>
              {records.length > 2 ? <p>Ещё {records.length - 2} записи</p> : null}
              <a href='/profile/details'>Подробнее</a>
            </div>
          </Flex>

          <Block>Электронная карта</Block>
          <Grid padding cols={2}>

            <InfoCard>
                <CardIcon>
                  {icons.PatientInfo()}
                </CardIcon>
                <Block padding='20px'>
                  <h1>Информация о пациенте</h1>
                  <SplitLine />
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                  </ul>
                </Block>
            </InfoCard>
            <InfoCard>
                <CardIcon>
                  {icons.TestResult()}
                </CardIcon>
                <Block padding='20px'>
                  <h1>Результаты анализов</h1>
                  <SplitLine />
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                  </ul>
                </Block>
            </InfoCard>
            <InfoCard>
                <CardIcon>
                  {icons.AddInfo()}
                </CardIcon>
                <Block padding='20px'>
                  <h1>Добавить информацию</h1>
                  <SplitLine />
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                  </ul>
                </Block>
            </InfoCard>
            <InfoCard>
                <CardIcon>
                  {icons.History()}
                </CardIcon>
                <Block padding='20px'>
                  <h1>История приёмов</h1>
                  <SplitLine />
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>1</li>
                  </ul>
                </Block>
            </InfoCard>

          </Grid>
    </Container>
  )
}
