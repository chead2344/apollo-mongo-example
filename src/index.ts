/* eslint-disable no-console */
import { ApolloServer, gql } from 'apollo-server';
import fs from 'fs';
import mongoose from 'mongoose';
import authorResolvers from './resolvers/Author';
import bookResolvers from './resolvers/Book';
import mutationResolvers from './resolvers/Mutation';
import queryResolvers from './resolvers/Query';
import BookDataSource from './datasources/BookDataSource';
import AuthorDataSource from './datasources/AuthorDataSource';

mongoose.connect('mongodb://localhost:27017/hmpo', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', async () => {
  console.log('Database connected');

  const schema = fs.readFileSync('./schema.graphql', 'utf-8');
  const server = new ApolloServer({
    dataSources: () => ({
      author: new AuthorDataSource(),
      book: new BookDataSource(),
    }),
    typeDefs: gql(schema),
    resolvers: {
      Query: queryResolvers,
      Mutation: mutationResolvers,
      Author: authorResolvers,
      Book: bookResolvers,
    } as any,
  });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
});

mongoose.connection.on('error', () => {
  console.error('Database connection error. Ensure you run `docker-compose up -d`');
});
