import React, { Suspense } from 'react';
import { render } from 'react-dom';
import Routes from './Routes.jsx';

export default function App() {
  return (
    <Suspense fallback='Loading...'>
      <Routes />
    </Suspense>
  )
}

render(<App />, document.getElementById('app'));