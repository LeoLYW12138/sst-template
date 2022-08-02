export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
