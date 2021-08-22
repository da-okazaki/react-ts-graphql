import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from './graphql/schema';
import { Repository } from './shared/types';
import './App.css';

const App: FC = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    variables: { language: 'japanese' },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className='App'>
      {data.viewer.repositories.nodes.map((repository: Repository) => {
        return (
          <div style={style} key={repository.name}>
            <b>Repository: {repository.name}</b>
            <p>URL: {repository.url}</p>
            <p>Description: {repository.description}</p>
          </div>
        );
      })}
    </div>
  );
};

const style = {
  margin: '8px auto',
  padding: '8px',
  border: '1px solid #000',
  width: '500px',
};

export default App;
