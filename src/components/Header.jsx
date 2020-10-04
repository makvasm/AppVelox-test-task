import {Header as Head} from './styles/Header';

import React from 'react'

export default function Header({title}) {
  return (
    <Head>
      <span>{title}</span>
      <div></div>
    </Head>
  )
}
