import AuthorDataSource from '../src/datasources/AuthorDataSource';
import BookDataSource from '../src/datasources/BookDataSource';

export default interface IContext {
  dataSources: {
    author: AuthorDataSource;
    book: BookDataSource;
  }
}
