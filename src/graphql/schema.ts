import { gql } from 'apollo-boost'

export const GET_REPOSITORY = gql`
  query {
    viewer {
      repositories(
        first: 3
        privacy: PUBLIC
        isFork: false
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        nodes {
          name
          url
          description
        }
      }
    }
  }
`
