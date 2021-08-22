import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const ENDPOINT = process.env.REACT_APP_APOLLO_ENDPOINT;

const httpLink = createHttpLink({
  uri: ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : '',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
