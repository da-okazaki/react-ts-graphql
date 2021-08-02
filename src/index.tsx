// React
import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
// Apollo
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
// Import Files
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Apollo Client
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: (operation: any) => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
      }
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
