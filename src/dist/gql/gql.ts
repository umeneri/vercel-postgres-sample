/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  'mutation CreateUser($newUser: UserCreateInput!) {\n  createUser(newUser: $newUser) {\n    id\n    name\n    email\n  }\n}':
    types.CreateUserDocument,
  'query Posts {\n  posts {\n    id\n    title\n    content\n  }\n}': types.PostsDocument,
  'query Users {\n  users {\n    id\n    name\n    email\n  }\n}': types.UsersDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation CreateUser($newUser: UserCreateInput!) {\n  createUser(newUser: $newUser) {\n    id\n    name\n    email\n  }\n}',
): (typeof documents)['mutation CreateUser($newUser: UserCreateInput!) {\n  createUser(newUser: $newUser) {\n    id\n    name\n    email\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Posts {\n  posts {\n    id\n    title\n    content\n  }\n}',
): (typeof documents)['query Posts {\n  posts {\n    id\n    title\n    content\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Users {\n  users {\n    id\n    name\n    email\n  }\n}',
): (typeof documents)['query Users {\n  users {\n    id\n    name\n    email\n  }\n}']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
