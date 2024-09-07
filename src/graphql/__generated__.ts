import { useQuery, useInfiniteQuery, UseQueryOptions, UseInfiniteQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("http://0.0.0.0:8055/graphql", {
    method: "POST",
    ...({"headers":{"Content-Type":"application/json"}}),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  GraphQLBigInt: { input: any; output: any; }
  GraphQLStringOrFloat: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Query = {
  readonly __typename?: 'Query';
  readonly goods: ReadonlyArray<Goods>;
  readonly goods_aggregated: ReadonlyArray<Goods_Aggregated>;
  readonly goods_by_id: Maybe<Goods>;
  readonly goods_by_version: Maybe<Version_Goods>;
};


export type QueryGoodsArgs = {
  filter: InputMaybe<Goods_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGoods_AggregatedArgs = {
  filter: InputMaybe<Goods_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGoods_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryGoods_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  readonly directus_files_mutated: Maybe<Directus_Files_Mutated>;
  readonly goods_mutated: Maybe<Goods_Mutated>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionGoods_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};

export type Big_Int_Filter_Operators = {
  readonly _between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _eq: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _gt: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _gte: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _lt: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _lte: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _nbetween: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _neq: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type Count_Function_Filter_Operators = {
  readonly count: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  readonly __typename?: 'count_functions';
  readonly count: Maybe<Scalars['Int']['output']>;
};

export type Date_Filter_Operators = {
  readonly _between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _eq: InputMaybe<Scalars['String']['input']>;
  readonly _gt: InputMaybe<Scalars['String']['input']>;
  readonly _gte: InputMaybe<Scalars['String']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _lt: InputMaybe<Scalars['String']['input']>;
  readonly _lte: InputMaybe<Scalars['String']['input']>;
  readonly _nbetween: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _neq: InputMaybe<Scalars['String']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type Datetime_Function_Filter_Operators = {
  readonly day: InputMaybe<Number_Filter_Operators>;
  readonly hour: InputMaybe<Number_Filter_Operators>;
  readonly minute: InputMaybe<Number_Filter_Operators>;
  readonly month: InputMaybe<Number_Filter_Operators>;
  readonly second: InputMaybe<Number_Filter_Operators>;
  readonly week: InputMaybe<Number_Filter_Operators>;
  readonly weekday: InputMaybe<Number_Filter_Operators>;
  readonly year: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  readonly __typename?: 'datetime_functions';
  readonly day: Maybe<Scalars['Int']['output']>;
  readonly hour: Maybe<Scalars['Int']['output']>;
  readonly minute: Maybe<Scalars['Int']['output']>;
  readonly month: Maybe<Scalars['Int']['output']>;
  readonly second: Maybe<Scalars['Int']['output']>;
  readonly week: Maybe<Scalars['Int']['output']>;
  readonly weekday: Maybe<Scalars['Int']['output']>;
  readonly year: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files = {
  readonly __typename?: 'directus_files';
  readonly charset: Maybe<Scalars['String']['output']>;
  readonly created_on: Maybe<Scalars['Date']['output']>;
  readonly created_on_func: Maybe<Datetime_Functions>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly duration: Maybe<Scalars['Int']['output']>;
  readonly embed: Maybe<Scalars['String']['output']>;
  readonly filename_disk: Maybe<Scalars['String']['output']>;
  readonly filename_download: Scalars['String']['output'];
  readonly filesize: Maybe<Scalars['GraphQLBigInt']['output']>;
  readonly focal_point_x: Maybe<Scalars['Int']['output']>;
  readonly focal_point_y: Maybe<Scalars['Int']['output']>;
  readonly folder: Maybe<Scalars['String']['output']>;
  readonly height: Maybe<Scalars['Int']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly location: Maybe<Scalars['String']['output']>;
  readonly metadata: Maybe<Scalars['JSON']['output']>;
  readonly metadata_func: Maybe<Count_Functions>;
  readonly modified_by: Maybe<Scalars['String']['output']>;
  readonly modified_on: Maybe<Scalars['Date']['output']>;
  readonly modified_on_func: Maybe<Datetime_Functions>;
  readonly storage: Scalars['String']['output'];
  readonly tags: Maybe<Scalars['JSON']['output']>;
  readonly tags_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly tus_data: Maybe<Scalars['JSON']['output']>;
  readonly tus_data_func: Maybe<Count_Functions>;
  readonly tus_id: Maybe<Scalars['String']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
  readonly uploaded_by: Maybe<Scalars['String']['output']>;
  readonly uploaded_on: Maybe<Scalars['Date']['output']>;
  readonly uploaded_on_func: Maybe<Datetime_Functions>;
  readonly width: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Directus_Files_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Directus_Files_Filter>>>;
  readonly charset: InputMaybe<String_Filter_Operators>;
  readonly created_on: InputMaybe<Date_Filter_Operators>;
  readonly created_on_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly duration: InputMaybe<Number_Filter_Operators>;
  readonly embed: InputMaybe<String_Filter_Operators>;
  readonly filename_disk: InputMaybe<String_Filter_Operators>;
  readonly filename_download: InputMaybe<String_Filter_Operators>;
  readonly filesize: InputMaybe<Big_Int_Filter_Operators>;
  readonly focal_point_x: InputMaybe<Number_Filter_Operators>;
  readonly focal_point_y: InputMaybe<Number_Filter_Operators>;
  readonly folder: InputMaybe<String_Filter_Operators>;
  readonly height: InputMaybe<Number_Filter_Operators>;
  readonly id: InputMaybe<String_Filter_Operators>;
  readonly location: InputMaybe<String_Filter_Operators>;
  readonly metadata: InputMaybe<String_Filter_Operators>;
  readonly metadata_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly modified_by: InputMaybe<String_Filter_Operators>;
  readonly modified_on: InputMaybe<Date_Filter_Operators>;
  readonly modified_on_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly storage: InputMaybe<String_Filter_Operators>;
  readonly tags: InputMaybe<String_Filter_Operators>;
  readonly tags_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
  readonly tus_data: InputMaybe<String_Filter_Operators>;
  readonly tus_data_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly tus_id: InputMaybe<String_Filter_Operators>;
  readonly type: InputMaybe<String_Filter_Operators>;
  readonly uploaded_by: InputMaybe<String_Filter_Operators>;
  readonly uploaded_on: InputMaybe<Date_Filter_Operators>;
  readonly uploaded_on_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly width: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Files_Mutated = {
  readonly __typename?: 'directus_files_mutated';
  readonly data: Maybe<Directus_Files>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Goods = {
  readonly __typename?: 'goods';
  readonly brand: Maybe<Scalars['String']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly dopDescription: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly mainImage: Maybe<Directus_Files>;
  readonly nds: Maybe<Scalars['Int']['output']>;
  readonly price: Maybe<Scalars['Int']['output']>;
  readonly subtitle: Maybe<Scalars['String']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly year: Maybe<Scalars['Int']['output']>;
};


export type GoodsMainImageArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Goods_Aggregated = {
  readonly __typename?: 'goods_aggregated';
  readonly avg: Maybe<Goods_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Goods_Aggregated_Fields>;
  readonly count: Maybe<Goods_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Goods_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Goods_Aggregated_Fields>;
  readonly min: Maybe<Goods_Aggregated_Fields>;
  readonly sum: Maybe<Goods_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Goods_Aggregated_Fields>;
};

export type Goods_Aggregated_Count = {
  readonly __typename?: 'goods_aggregated_count';
  readonly brand: Maybe<Scalars['Int']['output']>;
  readonly description: Maybe<Scalars['Int']['output']>;
  readonly dopDescription: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly mainImage: Maybe<Scalars['Int']['output']>;
  readonly nds: Maybe<Scalars['Int']['output']>;
  readonly price: Maybe<Scalars['Int']['output']>;
  readonly subtitle: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['Int']['output']>;
  readonly year: Maybe<Scalars['Int']['output']>;
};

export type Goods_Aggregated_Fields = {
  readonly __typename?: 'goods_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly nds: Maybe<Scalars['Float']['output']>;
  readonly price: Maybe<Scalars['Float']['output']>;
  readonly year: Maybe<Scalars['Float']['output']>;
};

export type Goods_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Goods_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Goods_Filter>>>;
  readonly brand: InputMaybe<String_Filter_Operators>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly dopDescription: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly mainImage: InputMaybe<Directus_Files_Filter>;
  readonly nds: InputMaybe<Number_Filter_Operators>;
  readonly price: InputMaybe<Number_Filter_Operators>;
  readonly subtitle: InputMaybe<String_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
  readonly year: InputMaybe<Number_Filter_Operators>;
};

export type Goods_Mutated = {
  readonly __typename?: 'goods_mutated';
  readonly data: Maybe<Goods>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Number_Filter_Operators = {
  readonly _between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _eq: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _gt: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _gte: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _lt: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _lte: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _nbetween: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _neq: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type String_Filter_Operators = {
  readonly _contains: InputMaybe<Scalars['String']['input']>;
  readonly _empty: InputMaybe<Scalars['Boolean']['input']>;
  readonly _ends_with: InputMaybe<Scalars['String']['input']>;
  readonly _eq: InputMaybe<Scalars['String']['input']>;
  readonly _icontains: InputMaybe<Scalars['String']['input']>;
  readonly _iends_with: InputMaybe<Scalars['String']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _istarts_with: InputMaybe<Scalars['String']['input']>;
  readonly _ncontains: InputMaybe<Scalars['String']['input']>;
  readonly _nempty: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nends_with: InputMaybe<Scalars['String']['input']>;
  readonly _neq: InputMaybe<Scalars['String']['input']>;
  readonly _niends_with: InputMaybe<Scalars['String']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _nistarts_with: InputMaybe<Scalars['String']['input']>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nstarts_with: InputMaybe<Scalars['String']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
  readonly _starts_with: InputMaybe<Scalars['String']['input']>;
};

export type Version_Goods = {
  readonly __typename?: 'version_goods';
  readonly brand: Maybe<Scalars['String']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly dopDescription: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly mainImage: Maybe<Scalars['JSON']['output']>;
  readonly nds: Maybe<Scalars['Int']['output']>;
  readonly price: Maybe<Scalars['Int']['output']>;
  readonly subtitle: Maybe<Scalars['String']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly year: Maybe<Scalars['Int']['output']>;
};

export type GetGoodsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGoodsQuery = { readonly __typename?: 'Query', readonly goods: ReadonlyArray<{ readonly __typename?: 'goods', readonly id: string, readonly title: string, readonly subtitle: string, readonly price: number, readonly nds: number, readonly year: number, readonly brand: string, readonly description: string, readonly dopDescription: string, readonly mainImage: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number } }> };

export type MediaFragmentFragment = { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number };


export const MediaFragmentFragmentDoc = `
    fragment MediaFragment on directus_files {
  id
  width
  height
}
    `;
export const GetGoodsDocument = `
    query GetGoods {
  goods {
    id
    title
    subtitle
    price
    nds
    year
    brand
    mainImage {
      ...MediaFragment
    }
    description
    dopDescription
  }
}
    ${MediaFragmentFragmentDoc}`;

export const useGetGoodsQuery = <
      TData = GetGoodsQuery,
      TError = unknown
    >(
      variables?: GetGoodsQueryVariables,
      options?: UseQueryOptions<GetGoodsQuery, TError, TData>
    ) => {
    
    return useQuery<GetGoodsQuery, TError, TData>(
      variables === undefined ? ['GetGoods'] : ['GetGoods', variables],
      fetcher<GetGoodsQuery, GetGoodsQueryVariables>(GetGoodsDocument, variables),
      options
    )};

useGetGoodsQuery.getKey = (variables?: GetGoodsQueryVariables) => variables === undefined ? ['GetGoods'] : ['GetGoods', variables];

export const useInfiniteGetGoodsQuery = <
      TData = GetGoodsQuery,
      TError = unknown
    >(
      variables?: GetGoodsQueryVariables,
      options?: UseInfiniteQueryOptions<GetGoodsQuery, TError, TData>
    ) => {
    
    return useInfiniteQuery<GetGoodsQuery, TError, TData>(
      variables === undefined ? ['GetGoods.infinite'] : ['GetGoods.infinite', variables],
      (metaData) => fetcher<GetGoodsQuery, GetGoodsQueryVariables>(GetGoodsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

useInfiniteGetGoodsQuery.getKey = (variables?: GetGoodsQueryVariables) => variables === undefined ? ['GetGoods.infinite'] : ['GetGoods.infinite', variables];


useGetGoodsQuery.fetcher = (variables?: GetGoodsQueryVariables) => fetcher<GetGoodsQuery, GetGoodsQueryVariables>(GetGoodsDocument, variables);
