# Apollo Mongo Example

This is a simple Apollo GraphQL application using MongoDB.

To start the database, run:

```
docker-compose up -d
```

This will run the MongoDB instance in the background. You can then run `yarn dev` and navigate to `http://localhost:4000`.

TypeScript types for the GraphQL schema are generated using `graphql-codegen` by running `yarn generate`.
