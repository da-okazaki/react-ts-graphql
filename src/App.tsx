import { FC, useMemo, useState, useEffect } from 'react';
import './App.css';

// Apollo
import ApolloClient, { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { GET_REPOSITORY } from "./graphql/schema"

// types
import { Repository } from "./shared/types"

// apollo client
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


const App: FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const fetch = async () => {
    const { data } = await client.query({
      query: GET_REPOSITORY
    });
    setRepositories(data.viewer.repositories.nodes);
  };

  useEffect(() => {
    fetch();
  }, []);


  return (
    <div className="App">
      {repositories.map((repository: Repository) => {
      return (
        <div style={style} key={repository.name}>
          <b>Repository: {repository.name}</b>
          <p>URL: {repository.url}</p>
          <p>Description: {repository.description}</p>
        </div>)
      })}
    </div>
  );
}

const style = {
  margin: '8px auto',
  padding: '8px',
  border: '1px solid #000',
  width: '500px'
}

export default App;
