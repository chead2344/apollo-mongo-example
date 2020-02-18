import { QueryResolvers } from '../generated/graphql';
import Author from '../models/Author';
import Book from '../models/Book';

const resolvers: QueryResolvers = {
  authors: async () => Author.find(),
  books: async () => Book.find(),
};

export default resolvers;
