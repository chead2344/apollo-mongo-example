import { DataSource } from 'apollo-datasource';
import DataLoader from 'dataloader';
import mongoose from 'mongoose';
import Author, { IAuthor } from '../models/Author';

export default class AuthorDataSource extends DataSource {
  private byIdLoader!: DataLoader<string, IAuthor | undefined>;

  initialize() {
    this.byIdLoader = new DataLoader(this.batchLoadByIds);
  }

  private batchLoadByIds = async (ids: readonly string[]) => {
    const authors = await Author.find({
      _id: {
        $in: ids.map((id) => mongoose.Types.ObjectId(id)),
      },
    });

    return ids.map((id) => authors.find((author) => author.id === id));
  };

  findById(id: string) {
    return this.byIdLoader.load(id);
  }
}
