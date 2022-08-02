import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCount?: Maybe<Scalars['Int']>;
};


export type MutationAddCountArgs = {
  count?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  tokenAuth: TokenAuth;
};

export type TokenAuth = {
  __typename?: 'TokenAuth';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  first_name: Scalars['String'];
  id: Scalars['String'];
  isStaff?: Maybe<Scalars['Boolean']>;
  language: Scalars['String'];
  username: Scalars['String'];
};

export type GetTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTokenQuery = { __typename?: 'Query', tokenAuth: { __typename?: 'TokenAuth', token?: string | null } };


export const GetTokenDocument = gql`
    query getToken {
  tokenAuth {
    token
  }
}
    `;

/**
 * __useGetTokenQuery__
 *
 * To run a query within a React component, call `useGetTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTokenQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTokenQuery(baseOptions?: Apollo.QueryHookOptions<GetTokenQuery, GetTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTokenQuery, GetTokenQueryVariables>(GetTokenDocument, options);
      }
export function useGetTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTokenQuery, GetTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTokenQuery, GetTokenQueryVariables>(GetTokenDocument, options);
        }
export type GetTokenQueryHookResult = ReturnType<typeof useGetTokenQuery>;
export type GetTokenLazyQueryHookResult = ReturnType<typeof useGetTokenLazyQuery>;
export type GetTokenQueryResult = Apollo.QueryResult<GetTokenQuery, GetTokenQueryVariables>;