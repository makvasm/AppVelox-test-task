import React from 'react';
import { ArrowBack } from '../components/styles/Icons';
import { useHistory } from 'react-router-dom';

export default function GoBack() {
  let history = useHistory();
  return (
    <div onClick={history.goBack} style={{cursor: 'pointer'}}>
      <ArrowBack />
    </div>
  )
}
