import { AuthorResolvers } from '../generated/graphql';

const resolvers: AuthorResolvers = {
  books: async (parent, _, context) => {
    const books = await context.dataSources.book.findByAuthorId(parent.id.toString());
    return books;
  },
};

export default resolvers;
