import { MutationResolvers } from '../generated/graphql';
import Author from '../models/Author';
import Book from '../models/Book';

const resolvers: MutationResolvers = {
  createAuthor: (_, args) => Author.create({ name: args.input.name }),
  createBook: (_, args) => Book.create({ title: args.input.title, authorId: args.input.authorId }),
};

export default resolvers;
