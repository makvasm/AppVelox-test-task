import { Header as Head } from './styles/Header';

import React from 'react'
import { Bell, Search, Eye } from './styles/Icons';
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
        <Avatar src='https://www.kalashnikov.ru/wp-content/uploads/2020/07/placeholder.png' />
      </Flex>
    </Head>
  )
}
