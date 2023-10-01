/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any }
}

export type Mutation = {
  __typename?: 'Mutation'
  createPost: Post
  createUser: User
}

export type MutationCreatePostArgs = {
  authorId: Scalars['String']['input']
  content: Scalars['String']['input']
  title: Scalars['String']['input']
}

export type MutationCreateUserArgs = {
  newUser: UserCreateInput
}

export type Post = {
  __typename?: 'Post'
  author: User
  authorId: Scalars['String']['output']
  content: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  deletedAt?: Maybe<Scalars['DateTime']['output']>
  id: Scalars['ID']['output']
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  title: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type PostCreateManyAuthorInput = {
  content: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>
  id: Scalars['String']['input']
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  title: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type PostCreateManyAuthorInputEnvelope = {
  data: Array<PostCreateManyAuthorInput>
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>
}

export type PostCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutAuthorInput>>
  create?: InputMaybe<Array<PostCreateWithoutAuthorInput>>
  createMany?: InputMaybe<PostCreateManyAuthorInputEnvelope>
}

export type PostCreateOrConnectWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput
  where: PostWhereUniqueInput
}

export type PostCreateWithoutAuthorInput = {
  content: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>
  id: Scalars['String']['input']
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  title: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>
}

export type Query = {
  __typename?: 'Query'
  posts: Array<Post>
  users: Array<User>
}

export type User = {
  __typename?: 'User'
  _count: UserCount
  createdAt: Scalars['DateTime']['output']
  deletedAt?: Maybe<Scalars['DateTime']['output']>
  email: Scalars['String']['output']
  id: Scalars['ID']['output']
  name?: Maybe<Scalars['String']['output']>
  posts?: Maybe<Array<Post>>
  updatedAt: Scalars['DateTime']['output']
}

export type UserCount = {
  __typename?: 'UserCount'
  posts: Scalars['Int']['output']
}

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>
  email: Scalars['String']['input']
  id: Scalars['String']['input']
  name?: InputMaybe<Scalars['String']['input']>
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type CreateUserMutationVariables = Exact<{
  newUser: UserCreateInput
}>

export type CreateUserMutation = {
  __typename?: 'Mutation'
  createUser: { __typename?: 'User'; id: string; name?: string | null; email: string }
}

export type PostsQueryVariables = Exact<{ [key: string]: never }>

export type PostsQuery = {
  __typename?: 'Query'
  posts: Array<{ __typename?: 'Post'; id: string; title: string; content: string }>
}

export type UsersQueryVariables = Exact<{ [key: string]: never }>

export type UsersQuery = {
  __typename?: 'Query'
  users: Array<{ __typename?: 'User'; id: string; name?: string | null; email: string }>
}

export const CreateUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'newUser' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UserCreateInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'newUser' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'newUser' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>
export const PostsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Posts' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'posts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PostsQuery, PostsQueryVariables>
export const UsersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Users' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>
