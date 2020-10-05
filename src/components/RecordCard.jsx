import React from 'react';
import Card from './styles/Card';
import Button from '../components/styles/Button';
import Flex from './styles/containers/Flex';
import Avatar from './styles/Avatar';

const formatDate = (date) => {
  if(!date) return;
  
}

export default function RecordCard({record}) {

  return (
    <Card padding style={{ display: 'grid', gridTemplateRows: 'repeat(3, 33%)' }}>
        <b>{record?.date ?? 'Undefined'}</b>
        <p>{record?.org ?? 'Undefined'}</p>
        <DoctorInfo name={record?.doctor.name} prof={record?.doctor.prof} img={record?.doctor.img} />
        <Button style={{ position:'absolute', right: '20px', bottom: '20px' }}>Отменить</Button>
    </Card>
  )
}


function DoctorInfo({name, prof, img}) {
  return (
    <Flex center>
      <Avatar src={img} />
      <div>
        <b>{name ?? 'Undefined'}</b>
        <p>{prof ?? 'Undefined'}</p>
      </div>
    </Flex>
  )
}

