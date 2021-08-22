// React
import React from 'react';
import ReactDOM from 'react-dom';
// Apollo
import { ApolloProvider } from '@apollo/client';

import { client } from './shared/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
