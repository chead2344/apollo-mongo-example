import IContext from '../../types/IContext';
import { GraphQLResolveInfo } from 'graphql';
import { IAuthor } from '../models/Author';
import { IBook } from '../models/Book';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Author = {
   __typename?: 'Author',
  id: Scalars['ID'],
  name: Scalars['String'],
  books: Array<Book>,
};

export type Book = {
   __typename?: 'Book',
  id: Scalars['ID'],
  title: Scalars['String'],
  author: Author,
};

export type CreateAuthorInput = {
  name: Scalars['String'],
};

export type CreateBookInput = {
  title: Scalars['String'],
  authorId: Scalars['ID'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createAuthor: Author,
  createBook: Book,
};


export type MutationCreateAuthorArgs = {
  input: CreateAuthorInput
};


export type MutationCreateBookArgs = {
  input: CreateBookInput
};

export type Query = {
   __typename?: 'Query',
  authors: Array<Author>,
  books: Array<Book>,
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  Author: ResolverTypeWrapper<IAuthor>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Book: ResolverTypeWrapper<IBook>,
  Mutation: ResolverTypeWrapper<{}>,
  CreateAuthorInput: CreateAuthorInput,
  CreateBookInput: CreateBookInput,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  Author: IAuthor,
  ID: Scalars['ID'],
  String: Scalars['String'],
  Book: IBook,
  Mutation: {},
  CreateAuthorInput: CreateAuthorInput,
  CreateBookInput: CreateBookInput,
  Boolean: Scalars['Boolean'],
};

export type AuthorResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  books?: Resolver<Array<ResolversTypes['Book']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type BookResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  author?: Resolver<ResolversTypes['Author'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MutationResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAuthor?: Resolver<ResolversTypes['Author'], ParentType, ContextType, RequireFields<MutationCreateAuthorArgs, 'input'>>,
  createBook?: Resolver<ResolversTypes['Book'], ParentType, ContextType, RequireFields<MutationCreateBookArgs, 'input'>>,
};

export type QueryResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  authors?: Resolver<Array<ResolversTypes['Author']>, ParentType, ContextType>,
  books?: Resolver<Array<ResolversTypes['Book']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = IContext> = {
  Author?: AuthorResolvers<ContextType>,
  Book?: BookResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = IContext> = Resolvers<ContextType>;
