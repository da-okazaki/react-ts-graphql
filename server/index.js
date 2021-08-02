// import { ApolloServer, gql } from "apollo-server";
const { ApolloServer, gql } = require("apollo-server");

// スキーマを定義する
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Date {
    id: String
    image: String
  }

  type Query {
    books: [Book]
    dates: [Date]
  }
`;

// クエリで取得するデータを定数で置いておく
const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crishton"
  }
];

const dates = [
  {
    id: "0001",
    image: "画像1"
  },
  {
    id: "0002",
    image: "画像2"
  }
];


// booksクエリ発行時の処理を指定する
const resolvers = {
  Query: {
    books: () => books,
    dates: () => dates
  }
};

// サーバーを起動する
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
