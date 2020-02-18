import { QueryResolvers } from '../generated/graphql';
import Author from '../models/Author';
import Book from '../models/Book';

const resolvers: QueryResolvers = {
  author: async (_, { id }) => Author.findById(id),
  authors: async () => Author.find(),
  book: async (_, { id }) => Book.findById(id),
  books: async () => Book.find(),
};

export default resolvers;
