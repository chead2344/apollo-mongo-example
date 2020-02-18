import { DataSource } from 'apollo-datasource';
import DataLoader from 'dataloader';
import mongoose from 'mongoose';
import Book, { IBook } from '../models/Book';

export default class BookDataSource extends DataSource {
  private byAuthorIdLoader!: DataLoader<string, IBook[]>;

  initialize() {
    this.byAuthorIdLoader = new DataLoader(this.batchLoadByIds);
  }

  private batchLoadByIds = async (authorIds: readonly string[]) => {
    const books = await Book.find({
      authorId: {
        $in: authorIds.map((id) => mongoose.Types.ObjectId(id)),
      },
    });

    return authorIds.map((id) => books.filter((book) => book.authorId.toString() === id));
  };

  findByAuthorId(id: string) {
    return this.byAuthorIdLoader.load(id);
  }
}
