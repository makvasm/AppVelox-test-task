import React from 'react';
import Card from './styles/Card';
import Flex from './styles/containers/Flex';

export default function InfoCard(props) {
  return (
    <Card>
      <Flex center>
        {props.children}
      </Flex>
    </Card>
  )
}
