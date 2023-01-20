import React from 'react';

import { withProviders } from './providers';

import './index.scss';

export const App = () => (
  <div className='App'>
    <h1>Hello World!</h1>
  </div>
);

withProviders(App);
