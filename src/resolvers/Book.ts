import { ApolloError } from 'apollo-server';
import { BookResolvers } from '../generated/graphql';

const resolvers: BookResolvers = {
  author: async (parent, _, context) => {
    const author = await context.dataSources.author.findById(parent.authorId.toString());
    if (!author) {
      throw new ApolloError('Could not find author', 'COULD_NOT_FIND_AUTHOR', { id: parent.authorId });
    }

    return author;
  },
};

export default resolvers;
