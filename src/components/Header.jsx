import { Header as Head } from './styles/Header';

import React from 'react'
import { Bell, Search, Eye, Expand } from './styles/Icons';
import Flex from './styles/containers/Flex';
import Avatar from './styles/Avatar';

export default function Header({ title }) {
  return (
    <Head>
      <span>{title}</span>
      <Flex justify='flex-end' center style={{ gap: '20px', maxWidth: '50%', textAlign: 'right' }}>
        <Search />
        <Bell />
        <Eye />
        <Flex center style={{gap: '5px', width: 'auto'}}>
          <Avatar src='https://www.kalashnikov.ru/wp-content/uploads/2020/07/placeholder.png' />
          <Expand />
        </Flex>
      </Flex>
    </Head>
  )
}
