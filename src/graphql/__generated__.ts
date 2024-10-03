import {
  useQuery,
  useInfiniteQuery,
  UseQueryOptions,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/graphql`, {
      method: "POST",
      ...{ headers: { "Content-Type": "application/json" } },
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
  GraphQLBigInt: { input: any; output: any };
  GraphQLStringOrFloat: { input: any; output: any };
  JSON: { input: any; output: any };
};

export enum EventEnum {
  Create = "create",
  Delete = "delete",
  Update = "update",
}

export type Query = {
  readonly __typename?: "Query";
  readonly advantages: ReadonlyArray<Advantages>;
  readonly advantages_aggregated: ReadonlyArray<Advantages_Aggregated>;
  readonly advantages_by_id: Maybe<Advantages>;
  readonly advantages_by_version: Maybe<Version_Advantages>;
  readonly goods: ReadonlyArray<Goods>;
  readonly goods_aggregated: ReadonlyArray<Goods_Aggregated>;
  readonly goods_by_id: Maybe<Goods>;
  readonly goods_by_version: Maybe<Version_Goods>;
  readonly mainSlider: ReadonlyArray<MainSlider>;
  readonly mainSlider_aggregated: ReadonlyArray<MainSlider_Aggregated>;
  readonly mainSlider_by_id: Maybe<MainSlider>;
  readonly mainSlider_by_version: Maybe<Version_MainSlider>;
  readonly sectionFormSend: Maybe<SectionFormSend>;
  readonly sectionFormSend_by_version: Maybe<Version_SectionFormSend>;
  readonly sectionMainSlider: Maybe<SectionMainSlider>;
  readonly sectionMainSlider_by_version: Maybe<Version_SectionMainSlider>;
  readonly settingsCalculation: ReadonlyArray<SettingsCalculation>;
  readonly settingsCalculation_aggregated: ReadonlyArray<SettingsCalculation_Aggregated>;
  readonly settingsCalculation_by_id: Maybe<SettingsCalculation>;
  readonly settingsCalculation_by_version: Maybe<Version_SettingsCalculation>;
  readonly successfulCases: ReadonlyArray<SuccessfulCases>;
  readonly successfulCases_aggregated: ReadonlyArray<SuccessfulCases_Aggregated>;
  readonly successfulCases_by_id: Maybe<SuccessfulCases>;
  readonly successfulCases_by_version: Maybe<Version_SuccessfulCases>;
};

export type QueryAdvantagesArgs = {
  filter: InputMaybe<Advantages_Filter>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  search: InputMaybe<Scalars["String"]["input"]>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryAdvantages_AggregatedArgs = {
  filter: InputMaybe<Advantages_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  search: InputMaybe<Scalars["String"]["input"]>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryAdvantages_By_IdArgs = {
  id: Scalars["ID"]["input"];
  version: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAdvantages_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryGoodsArgs = {
  filter: InputMaybe<Goods_Filter>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  search: InputMaybe<Scalars["String"]["input"]>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryGoods_AggregatedArgs = {
  filter: InputMaybe<Goods_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  search: InputMaybe<Scalars["String"]["input"]>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryGoods_By_IdArgs = {
  id: Scalars["ID"]["input"];
  version: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryGoods_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QueryMainSliderArgs = {
  filter: InputMaybe<MainSlider_Filter>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  search: InputMaybe<Scalars["String"]["input"]>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryMainSlider_AggregatedArgs = {
  filter: InputMaybe<MainSlider_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  search: InputMaybe<Scalars["String"]["input"]>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QueryMainSlider_By_IdArgs = {
  id: Scalars["ID"]["input"];
  version: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryMainSlider_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QuerySectionFormSendArgs = {
  version: InputMaybe<Scalars["String"]["input"]>;
};

export type QuerySectionFormSend_By_VersionArgs = {
  version: Scalars["String"]["input"];
};

export type QuerySectionMainSliderArgs = {
  version: InputMaybe<Scalars["String"]["input"]>;
};

export type QuerySectionMainSlider_By_VersionArgs = {
  version: Scalars["String"]["input"];
};

export type QuerySettingsCalculationArgs = {
  filter: InputMaybe<SettingsCalculation_Filter>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  search: InputMaybe<Scalars["String"]["input"]>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QuerySettingsCalculation_AggregatedArgs = {
  filter: InputMaybe<SettingsCalculation_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  search: InputMaybe<Scalars["String"]["input"]>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QuerySettingsCalculation_By_IdArgs = {
  id: Scalars["ID"]["input"];
  version: InputMaybe<Scalars["String"]["input"]>;
};

export type QuerySettingsCalculation_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type QuerySuccessfulCasesArgs = {
  filter: InputMaybe<SuccessfulCases_Filter>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  search: InputMaybe<Scalars["String"]["input"]>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QuerySuccessfulCases_AggregatedArgs = {
  filter: InputMaybe<SuccessfulCases_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  search: InputMaybe<Scalars["String"]["input"]>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type QuerySuccessfulCases_By_IdArgs = {
  id: Scalars["ID"]["input"];
  version: InputMaybe<Scalars["String"]["input"]>;
};

export type QuerySuccessfulCases_By_VersionArgs = {
  id: Scalars["ID"]["input"];
  version: Scalars["String"]["input"];
};

export type Subscription = {
  readonly __typename?: "Subscription";
  readonly advantages_mutated: Maybe<Advantages_Mutated>;
  readonly directus_files_mutated: Maybe<Directus_Files_Mutated>;
  readonly goods_mutated: Maybe<Goods_Mutated>;
  readonly mainSlider_mutated: Maybe<MainSlider_Mutated>;
  readonly sectionFormSend_mutated: Maybe<SectionFormSend_Mutated>;
  readonly sectionMainSlider_mutated: Maybe<SectionMainSlider_Mutated>;
  readonly settingsCalculation_mutated: Maybe<SettingsCalculation_Mutated>;
  readonly successfulCases_mutated: Maybe<SuccessfulCases_Mutated>;
};

export type SubscriptionAdvantages_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};

export type SubscriptionDirectus_Files_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};

export type SubscriptionGoods_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};

export type SubscriptionMainSlider_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};

export type SubscriptionSectionFormSend_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};

export type SubscriptionSectionMainSlider_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};

export type SubscriptionSettingsCalculation_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};

export type SubscriptionSuccessfulCases_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};

export type Advantages = {
  readonly __typename?: "advantages";
  readonly description: Maybe<Scalars["String"]["output"]>;
  readonly icon: Maybe<Directus_Files>;
  readonly id: Scalars["ID"]["output"];
  readonly title: Maybe<Scalars["String"]["output"]>;
};

export type AdvantagesIconArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  search: InputMaybe<Scalars["String"]["input"]>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Advantages_Aggregated = {
  readonly __typename?: "advantages_aggregated";
  readonly avg: Maybe<Advantages_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Advantages_Aggregated_Fields>;
  readonly count: Maybe<Advantages_Aggregated_Count>;
  readonly countAll: Maybe<Scalars["Int"]["output"]>;
  readonly countDistinct: Maybe<Advantages_Aggregated_Count>;
  readonly group: Maybe<Scalars["JSON"]["output"]>;
  readonly max: Maybe<Advantages_Aggregated_Fields>;
  readonly min: Maybe<Advantages_Aggregated_Fields>;
  readonly sum: Maybe<Advantages_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Advantages_Aggregated_Fields>;
};

export type Advantages_Aggregated_Count = {
  readonly __typename?: "advantages_aggregated_count";
  readonly description: Maybe<Scalars["Int"]["output"]>;
  readonly icon: Maybe<Scalars["Int"]["output"]>;
  readonly id: Maybe<Scalars["Int"]["output"]>;
  readonly title: Maybe<Scalars["Int"]["output"]>;
};

export type Advantages_Aggregated_Fields = {
  readonly __typename?: "advantages_aggregated_fields";
  readonly id: Maybe<Scalars["Float"]["output"]>;
};

export type Advantages_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Advantages_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Advantages_Filter>>>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly icon: InputMaybe<Directus_Files_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type Advantages_Mutated = {
  readonly __typename?: "advantages_mutated";
  readonly data: Maybe<Advantages>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars["ID"]["output"];
};

export type Big_Int_Filter_Operators = {
  readonly _between: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["GraphQLBigInt"]["input"]>>
  >;
  readonly _eq: InputMaybe<Scalars["GraphQLBigInt"]["input"]>;
  readonly _gt: InputMaybe<Scalars["GraphQLBigInt"]["input"]>;
  readonly _gte: InputMaybe<Scalars["GraphQLBigInt"]["input"]>;
  readonly _in: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["GraphQLBigInt"]["input"]>>
  >;
  readonly _lt: InputMaybe<Scalars["GraphQLBigInt"]["input"]>;
  readonly _lte: InputMaybe<Scalars["GraphQLBigInt"]["input"]>;
  readonly _nbetween: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["GraphQLBigInt"]["input"]>>
  >;
  readonly _neq: InputMaybe<Scalars["GraphQLBigInt"]["input"]>;
  readonly _nin: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["GraphQLBigInt"]["input"]>>
  >;
  readonly _nnull: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly _null: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Count_Function_Filter_Operators = {
  readonly count: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  readonly __typename?: "count_functions";
  readonly count: Maybe<Scalars["Int"]["output"]>;
};

export type Date_Filter_Operators = {
  readonly _between: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>>
  >;
  readonly _eq: InputMaybe<Scalars["String"]["input"]>;
  readonly _gt: InputMaybe<Scalars["String"]["input"]>;
  readonly _gte: InputMaybe<Scalars["String"]["input"]>;
  readonly _in: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>
  >;
  readonly _lt: InputMaybe<Scalars["String"]["input"]>;
  readonly _lte: InputMaybe<Scalars["String"]["input"]>;
  readonly _nbetween: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>>
  >;
  readonly _neq: InputMaybe<Scalars["String"]["input"]>;
  readonly _nin: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>
  >;
  readonly _nnull: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly _null: InputMaybe<Scalars["Boolean"]["input"]>;
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
  readonly __typename?: "datetime_functions";
  readonly day: Maybe<Scalars["Int"]["output"]>;
  readonly hour: Maybe<Scalars["Int"]["output"]>;
  readonly minute: Maybe<Scalars["Int"]["output"]>;
  readonly month: Maybe<Scalars["Int"]["output"]>;
  readonly second: Maybe<Scalars["Int"]["output"]>;
  readonly week: Maybe<Scalars["Int"]["output"]>;
  readonly weekday: Maybe<Scalars["Int"]["output"]>;
  readonly year: Maybe<Scalars["Int"]["output"]>;
};

export type Directus_Files = {
  readonly __typename?: "directus_files";
  readonly charset: Maybe<Scalars["String"]["output"]>;
  readonly created_on: Maybe<Scalars["Date"]["output"]>;
  readonly created_on_func: Maybe<Datetime_Functions>;
  readonly description: Maybe<Scalars["String"]["output"]>;
  readonly duration: Maybe<Scalars["Int"]["output"]>;
  readonly embed: Maybe<Scalars["String"]["output"]>;
  readonly filename_disk: Maybe<Scalars["String"]["output"]>;
  readonly filename_download: Scalars["String"]["output"];
  readonly filesize: Maybe<Scalars["GraphQLBigInt"]["output"]>;
  readonly focal_point_x: Maybe<Scalars["Int"]["output"]>;
  readonly focal_point_y: Maybe<Scalars["Int"]["output"]>;
  readonly folder: Maybe<Scalars["String"]["output"]>;
  readonly height: Maybe<Scalars["Int"]["output"]>;
  readonly id: Scalars["ID"]["output"];
  readonly location: Maybe<Scalars["String"]["output"]>;
  readonly metadata: Maybe<Scalars["JSON"]["output"]>;
  readonly metadata_func: Maybe<Count_Functions>;
  readonly modified_by: Maybe<Scalars["String"]["output"]>;
  readonly modified_on: Maybe<Scalars["Date"]["output"]>;
  readonly modified_on_func: Maybe<Datetime_Functions>;
  readonly storage: Scalars["String"]["output"];
  readonly tags: Maybe<Scalars["JSON"]["output"]>;
  readonly tags_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars["String"]["output"]>;
  readonly tus_data: Maybe<Scalars["JSON"]["output"]>;
  readonly tus_data_func: Maybe<Count_Functions>;
  readonly tus_id: Maybe<Scalars["String"]["output"]>;
  readonly type: Maybe<Scalars["String"]["output"]>;
  readonly uploaded_by: Maybe<Scalars["String"]["output"]>;
  readonly uploaded_on: Maybe<Scalars["Date"]["output"]>;
  readonly uploaded_on_func: Maybe<Datetime_Functions>;
  readonly width: Maybe<Scalars["Int"]["output"]>;
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
  readonly __typename?: "directus_files_mutated";
  readonly data: Maybe<Directus_Files>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars["ID"]["output"];
};

export type Goods = {
  readonly __typename?: "goods";
  readonly brand: Maybe<Scalars["String"]["output"]>;
  readonly description: Maybe<Scalars["String"]["output"]>;
  readonly dopDescription: Maybe<Scalars["String"]["output"]>;
  readonly guarant: Maybe<Scalars["String"]["output"]>;
  readonly id: Scalars["ID"]["output"];
  readonly mainImage: Maybe<Directus_Files>;
  readonly nds: Maybe<Scalars["Int"]["output"]>;
  readonly price: Maybe<Scalars["Int"]["output"]>;
  readonly subtitle: Maybe<Scalars["String"]["output"]>;
  readonly title: Maybe<Scalars["String"]["output"]>;
  readonly year: Maybe<Scalars["Int"]["output"]>;
};

export type GoodsMainImageArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  search: InputMaybe<Scalars["String"]["input"]>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type Goods_Aggregated = {
  readonly __typename?: "goods_aggregated";
  readonly avg: Maybe<Goods_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Goods_Aggregated_Fields>;
  readonly count: Maybe<Goods_Aggregated_Count>;
  readonly countAll: Maybe<Scalars["Int"]["output"]>;
  readonly countDistinct: Maybe<Goods_Aggregated_Count>;
  readonly group: Maybe<Scalars["JSON"]["output"]>;
  readonly max: Maybe<Goods_Aggregated_Fields>;
  readonly min: Maybe<Goods_Aggregated_Fields>;
  readonly sum: Maybe<Goods_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Goods_Aggregated_Fields>;
};

export type Goods_Aggregated_Count = {
  readonly __typename?: "goods_aggregated_count";
  readonly brand: Maybe<Scalars["Int"]["output"]>;
  readonly description: Maybe<Scalars["Int"]["output"]>;
  readonly dopDescription: Maybe<Scalars["Int"]["output"]>;
  readonly guarant: Maybe<Scalars["Int"]["output"]>;
  readonly id: Maybe<Scalars["Int"]["output"]>;
  readonly mainImage: Maybe<Scalars["Int"]["output"]>;
  readonly nds: Maybe<Scalars["Int"]["output"]>;
  readonly price: Maybe<Scalars["Int"]["output"]>;
  readonly subtitle: Maybe<Scalars["Int"]["output"]>;
  readonly title: Maybe<Scalars["Int"]["output"]>;
  readonly year: Maybe<Scalars["Int"]["output"]>;
};

export type Goods_Aggregated_Fields = {
  readonly __typename?: "goods_aggregated_fields";
  readonly id: Maybe<Scalars["Float"]["output"]>;
  readonly nds: Maybe<Scalars["Float"]["output"]>;
  readonly price: Maybe<Scalars["Float"]["output"]>;
  readonly year: Maybe<Scalars["Float"]["output"]>;
};

export type Goods_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Goods_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Goods_Filter>>>;
  readonly brand: InputMaybe<String_Filter_Operators>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly dopDescription: InputMaybe<String_Filter_Operators>;
  readonly guarant: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly mainImage: InputMaybe<Directus_Files_Filter>;
  readonly nds: InputMaybe<Number_Filter_Operators>;
  readonly price: InputMaybe<Number_Filter_Operators>;
  readonly subtitle: InputMaybe<String_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
  readonly year: InputMaybe<Number_Filter_Operators>;
};

export type Goods_Mutated = {
  readonly __typename?: "goods_mutated";
  readonly data: Maybe<Goods>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars["ID"]["output"];
};

export type MainSlider = {
  readonly __typename?: "mainSlider";
  readonly goods: Maybe<Goods>;
  readonly id: Scalars["ID"]["output"];
  readonly img: Maybe<Directus_Files>;
};

export type MainSliderGoodsArgs = {
  filter: InputMaybe<Goods_Filter>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  search: InputMaybe<Scalars["String"]["input"]>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MainSliderImgArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  search: InputMaybe<Scalars["String"]["input"]>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MainSlider_Aggregated = {
  readonly __typename?: "mainSlider_aggregated";
  readonly avg: Maybe<MainSlider_Aggregated_Fields>;
  readonly avgDistinct: Maybe<MainSlider_Aggregated_Fields>;
  readonly count: Maybe<MainSlider_Aggregated_Count>;
  readonly countAll: Maybe<Scalars["Int"]["output"]>;
  readonly countDistinct: Maybe<MainSlider_Aggregated_Count>;
  readonly group: Maybe<Scalars["JSON"]["output"]>;
  readonly max: Maybe<MainSlider_Aggregated_Fields>;
  readonly min: Maybe<MainSlider_Aggregated_Fields>;
  readonly sum: Maybe<MainSlider_Aggregated_Fields>;
  readonly sumDistinct: Maybe<MainSlider_Aggregated_Fields>;
};

export type MainSlider_Aggregated_Count = {
  readonly __typename?: "mainSlider_aggregated_count";
  readonly goods: Maybe<Scalars["Int"]["output"]>;
  readonly id: Maybe<Scalars["Int"]["output"]>;
  readonly img: Maybe<Scalars["Int"]["output"]>;
};

export type MainSlider_Aggregated_Fields = {
  readonly __typename?: "mainSlider_aggregated_fields";
  readonly goods: Maybe<Scalars["Float"]["output"]>;
  readonly id: Maybe<Scalars["Float"]["output"]>;
};

export type MainSlider_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<MainSlider_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<MainSlider_Filter>>>;
  readonly goods: InputMaybe<Goods_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly img: InputMaybe<Directus_Files_Filter>;
};

export type MainSlider_Mutated = {
  readonly __typename?: "mainSlider_mutated";
  readonly data: Maybe<MainSlider>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars["ID"]["output"];
};

export type Number_Filter_Operators = {
  readonly _between: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>>
  >;
  readonly _eq: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>;
  readonly _gt: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>;
  readonly _gte: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>;
  readonly _in: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>>
  >;
  readonly _lt: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>;
  readonly _lte: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>;
  readonly _nbetween: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>>
  >;
  readonly _neq: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>;
  readonly _nin: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>>
  >;
  readonly _nnull: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly _null: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SectionFormSend = {
  readonly __typename?: "sectionFormSend";
  readonly description: Maybe<Scalars["String"]["output"]>;
  readonly id: Scalars["ID"]["output"];
  readonly title: Maybe<Scalars["String"]["output"]>;
};

export type SectionFormSend_Mutated = {
  readonly __typename?: "sectionFormSend_mutated";
  readonly data: Maybe<SectionFormSend>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars["ID"]["output"];
};

export type SectionMainSlider = {
  readonly __typename?: "sectionMainSlider";
  readonly description: Maybe<Scalars["String"]["output"]>;
  readonly id: Scalars["ID"]["output"];
  readonly title: Maybe<Scalars["String"]["output"]>;
};

export type SectionMainSlider_Mutated = {
  readonly __typename?: "sectionMainSlider_mutated";
  readonly data: Maybe<SectionMainSlider>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars["ID"]["output"];
};

export type SettingsCalculation = {
  readonly __typename?: "settingsCalculation";
  readonly id: Scalars["ID"]["output"];
  readonly marks: Maybe<Scalars["JSON"]["output"]>;
  readonly marks_func: Maybe<Count_Functions>;
  readonly max: Maybe<Scalars["Int"]["output"]>;
  readonly min: Maybe<Scalars["Int"]["output"]>;
  readonly step: Maybe<Scalars["Int"]["output"]>;
  readonly title: Maybe<Scalars["String"]["output"]>;
  readonly type: Maybe<Scalars["String"]["output"]>;
};

export type SettingsCalculation_Aggregated = {
  readonly __typename?: "settingsCalculation_aggregated";
  readonly avg: Maybe<SettingsCalculation_Aggregated_Fields>;
  readonly avgDistinct: Maybe<SettingsCalculation_Aggregated_Fields>;
  readonly count: Maybe<SettingsCalculation_Aggregated_Count>;
  readonly countAll: Maybe<Scalars["Int"]["output"]>;
  readonly countDistinct: Maybe<SettingsCalculation_Aggregated_Count>;
  readonly group: Maybe<Scalars["JSON"]["output"]>;
  readonly max: Maybe<SettingsCalculation_Aggregated_Fields>;
  readonly min: Maybe<SettingsCalculation_Aggregated_Fields>;
  readonly sum: Maybe<SettingsCalculation_Aggregated_Fields>;
  readonly sumDistinct: Maybe<SettingsCalculation_Aggregated_Fields>;
};

export type SettingsCalculation_Aggregated_Count = {
  readonly __typename?: "settingsCalculation_aggregated_count";
  readonly id: Maybe<Scalars["Int"]["output"]>;
  readonly marks: Maybe<Scalars["Int"]["output"]>;
  readonly max: Maybe<Scalars["Int"]["output"]>;
  readonly min: Maybe<Scalars["Int"]["output"]>;
  readonly step: Maybe<Scalars["Int"]["output"]>;
  readonly title: Maybe<Scalars["Int"]["output"]>;
  readonly type: Maybe<Scalars["Int"]["output"]>;
};

export type SettingsCalculation_Aggregated_Fields = {
  readonly __typename?: "settingsCalculation_aggregated_fields";
  readonly id: Maybe<Scalars["Float"]["output"]>;
  readonly max: Maybe<Scalars["Float"]["output"]>;
  readonly min: Maybe<Scalars["Float"]["output"]>;
  readonly step: Maybe<Scalars["Float"]["output"]>;
};

export type SettingsCalculation_Filter = {
  readonly _and: InputMaybe<
    ReadonlyArray<InputMaybe<SettingsCalculation_Filter>>
  >;
  readonly _or: InputMaybe<
    ReadonlyArray<InputMaybe<SettingsCalculation_Filter>>
  >;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly marks: InputMaybe<String_Filter_Operators>;
  readonly marks_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly max: InputMaybe<Number_Filter_Operators>;
  readonly min: InputMaybe<Number_Filter_Operators>;
  readonly step: InputMaybe<Number_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
  readonly type: InputMaybe<String_Filter_Operators>;
};

export type SettingsCalculation_Mutated = {
  readonly __typename?: "settingsCalculation_mutated";
  readonly data: Maybe<SettingsCalculation>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars["ID"]["output"];
};

export type String_Filter_Operators = {
  readonly _contains: InputMaybe<Scalars["String"]["input"]>;
  readonly _empty: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly _ends_with: InputMaybe<Scalars["String"]["input"]>;
  readonly _eq: InputMaybe<Scalars["String"]["input"]>;
  readonly _icontains: InputMaybe<Scalars["String"]["input"]>;
  readonly _iends_with: InputMaybe<Scalars["String"]["input"]>;
  readonly _in: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>
  >;
  readonly _istarts_with: InputMaybe<Scalars["String"]["input"]>;
  readonly _ncontains: InputMaybe<Scalars["String"]["input"]>;
  readonly _nempty: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly _nends_with: InputMaybe<Scalars["String"]["input"]>;
  readonly _neq: InputMaybe<Scalars["String"]["input"]>;
  readonly _niends_with: InputMaybe<Scalars["String"]["input"]>;
  readonly _nin: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>
  >;
  readonly _nistarts_with: InputMaybe<Scalars["String"]["input"]>;
  readonly _nnull: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly _nstarts_with: InputMaybe<Scalars["String"]["input"]>;
  readonly _null: InputMaybe<Scalars["Boolean"]["input"]>;
  readonly _starts_with: InputMaybe<Scalars["String"]["input"]>;
};

export type SuccessfulCases = {
  readonly __typename?: "successfulCases";
  readonly id: Scalars["ID"]["output"];
  readonly img: Maybe<Directus_Files>;
  readonly title: Maybe<Scalars["String"]["output"]>;
};

export type SuccessfulCasesImgArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  search: InputMaybe<Scalars["String"]["input"]>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>;
};

export type SuccessfulCases_Aggregated = {
  readonly __typename?: "successfulCases_aggregated";
  readonly avg: Maybe<SuccessfulCases_Aggregated_Fields>;
  readonly avgDistinct: Maybe<SuccessfulCases_Aggregated_Fields>;
  readonly count: Maybe<SuccessfulCases_Aggregated_Count>;
  readonly countAll: Maybe<Scalars["Int"]["output"]>;
  readonly countDistinct: Maybe<SuccessfulCases_Aggregated_Count>;
  readonly group: Maybe<Scalars["JSON"]["output"]>;
  readonly max: Maybe<SuccessfulCases_Aggregated_Fields>;
  readonly min: Maybe<SuccessfulCases_Aggregated_Fields>;
  readonly sum: Maybe<SuccessfulCases_Aggregated_Fields>;
  readonly sumDistinct: Maybe<SuccessfulCases_Aggregated_Fields>;
};

export type SuccessfulCases_Aggregated_Count = {
  readonly __typename?: "successfulCases_aggregated_count";
  readonly id: Maybe<Scalars["Int"]["output"]>;
  readonly img: Maybe<Scalars["Int"]["output"]>;
  readonly title: Maybe<Scalars["Int"]["output"]>;
};

export type SuccessfulCases_Aggregated_Fields = {
  readonly __typename?: "successfulCases_aggregated_fields";
  readonly id: Maybe<Scalars["Float"]["output"]>;
};

export type SuccessfulCases_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<SuccessfulCases_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<SuccessfulCases_Filter>>>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly img: InputMaybe<Directus_Files_Filter>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type SuccessfulCases_Mutated = {
  readonly __typename?: "successfulCases_mutated";
  readonly data: Maybe<SuccessfulCases>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars["ID"]["output"];
};

export type Version_Advantages = {
  readonly __typename?: "version_advantages";
  readonly description: Maybe<Scalars["String"]["output"]>;
  readonly icon: Maybe<Scalars["JSON"]["output"]>;
  readonly id: Scalars["ID"]["output"];
  readonly title: Maybe<Scalars["String"]["output"]>;
};

export type Version_Goods = {
  readonly __typename?: "version_goods";
  readonly brand: Maybe<Scalars["String"]["output"]>;
  readonly description: Maybe<Scalars["String"]["output"]>;
  readonly dopDescription: Maybe<Scalars["String"]["output"]>;
  readonly guarant: Maybe<Scalars["String"]["output"]>;
  readonly id: Scalars["ID"]["output"];
  readonly mainImage: Maybe<Scalars["JSON"]["output"]>;
  readonly nds: Maybe<Scalars["Int"]["output"]>;
  readonly price: Maybe<Scalars["Int"]["output"]>;
  readonly subtitle: Maybe<Scalars["String"]["output"]>;
  readonly title: Maybe<Scalars["String"]["output"]>;
  readonly year: Maybe<Scalars["Int"]["output"]>;
};

export type Version_MainSlider = {
  readonly __typename?: "version_mainSlider";
  readonly goods: Maybe<Scalars["JSON"]["output"]>;
  readonly id: Scalars["ID"]["output"];
  readonly img: Maybe<Scalars["JSON"]["output"]>;
};

export type Version_SectionFormSend = {
  readonly __typename?: "version_sectionFormSend";
  readonly description: Maybe<Scalars["String"]["output"]>;
  readonly id: Scalars["ID"]["output"];
  readonly title: Maybe<Scalars["String"]["output"]>;
};

export type Version_SectionMainSlider = {
  readonly __typename?: "version_sectionMainSlider";
  readonly description: Maybe<Scalars["String"]["output"]>;
  readonly id: Scalars["ID"]["output"];
  readonly title: Maybe<Scalars["String"]["output"]>;
};

export type Version_SettingsCalculation = {
  readonly __typename?: "version_settingsCalculation";
  readonly id: Scalars["ID"]["output"];
  readonly marks: Maybe<Scalars["JSON"]["output"]>;
  readonly marks_func: Maybe<Count_Functions>;
  readonly max: Maybe<Scalars["Int"]["output"]>;
  readonly min: Maybe<Scalars["Int"]["output"]>;
  readonly step: Maybe<Scalars["Int"]["output"]>;
  readonly title: Maybe<Scalars["String"]["output"]>;
  readonly type: Maybe<Scalars["String"]["output"]>;
};

export type Version_SuccessfulCases = {
  readonly __typename?: "version_successfulCases";
  readonly id: Scalars["ID"]["output"];
  readonly img: Maybe<Scalars["JSON"]["output"]>;
  readonly title: Maybe<Scalars["String"]["output"]>;
};

export type GetAdvantagesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAdvantagesQuery = {
  readonly __typename?: "Query";
  readonly advantages: ReadonlyArray<{
    readonly __typename?: "advantages";
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly icon: {
      readonly __typename?: "directus_files";
      readonly id: string;
      readonly width: number;
      readonly height: number;
    };
  }>;
};

export type GetSettingsCalcQueryVariables = Exact<{ [key: string]: never }>;

export type GetSettingsCalcQuery = {
  readonly __typename?: "Query";
  readonly settingsCalculation: ReadonlyArray<{
    readonly __typename?: "settingsCalculation";
    readonly id: string;
    readonly type: string;
    readonly title: string;
    readonly min: number;
    readonly max: number;
    readonly step: number;
    readonly marks: any;
  }>;
};

export type GetGoodsQueryVariables = Exact<{ [key: string]: never }>;

export type GetGoodsQuery = {
  readonly __typename?: "Query";
  readonly goods: ReadonlyArray<{
    readonly __typename?: "goods";
    readonly id: string;
    readonly title: string;
    readonly subtitle: string;
    readonly price: number;
    readonly nds: number;
    readonly year: number;
    readonly guarant: string;
    readonly brand: string;
    readonly description: string;
    readonly dopDescription: string;
    readonly mainImage: {
      readonly __typename?: "directus_files";
      readonly id: string;
      readonly width: number;
      readonly height: number;
    };
  }>;
};

export type GetMainSliderQueryVariables = Exact<{ [key: string]: never }>;

export type GetMainSliderQuery = {
  readonly __typename?: "Query";
  readonly mainSlider: ReadonlyArray<{
    readonly __typename?: "mainSlider";
    readonly id: string;
    readonly goods: {
      readonly __typename?: "goods";
      readonly id: string;
      readonly title: string;
      readonly subtitle: string;
      readonly price: number;
      readonly nds: number;
      readonly year: number;
      readonly guarant: string;
      readonly brand: string;
      readonly description: string;
      readonly dopDescription: string;
      readonly mainImage: {
        readonly __typename?: "directus_files";
        readonly id: string;
        readonly width: number;
        readonly height: number;
      };
    };
    readonly img: {
      readonly __typename?: "directus_files";
      readonly id: string;
      readonly width: number;
      readonly height: number;
    };
  }>;
};

export type GetSuccessfulCasesQueryVariables = Exact<{ [key: string]: never }>;

export type GetSuccessfulCasesQuery = {
  readonly __typename?: "Query";
  readonly successfulCases: ReadonlyArray<{
    readonly __typename?: "successfulCases";
    readonly id: string;
    readonly title: string;
    readonly img: {
      readonly __typename?: "directus_files";
      readonly id: string;
      readonly width: number;
      readonly height: number;
    };
  }>;
};

export type GoodsFragment = {
  readonly __typename?: "goods";
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly price: number;
  readonly nds: number;
  readonly year: number;
  readonly guarant: string;
  readonly brand: string;
  readonly description: string;
  readonly dopDescription: string;
  readonly mainImage: {
    readonly __typename?: "directus_files";
    readonly id: string;
    readonly width: number;
    readonly height: number;
  };
};

export type MediaFragmentFragment = {
  readonly __typename?: "directus_files";
  readonly id: string;
  readonly width: number;
  readonly height: number;
};

export type GetSectionFormSendQueryVariables = Exact<{ [key: string]: never }>;

export type GetSectionFormSendQuery = {
  readonly __typename?: "Query";
  readonly sectionFormSend: {
    readonly __typename?: "sectionFormSend";
    readonly id: string;
    readonly title: string;
    readonly description: string;
  };
};

export type GetSectionMainSliderQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetSectionMainSliderQuery = {
  readonly __typename?: "Query";
  readonly sectionMainSlider: {
    readonly __typename?: "sectionMainSlider";
    readonly id: string;
    readonly title: string;
    readonly description: string;
  };
};

export const MediaFragmentFragmentDoc = `
    fragment MediaFragment on directus_files {
  id
  width
  height
}
    `;
export const GoodsFragmentDoc = `
    fragment Goods on goods {
  id
  title
  subtitle
  price
  nds
  year
  guarant
  brand
  mainImage {
    ...MediaFragment
  }
  description
  dopDescription
}
    ${MediaFragmentFragmentDoc}`;
export const GetAdvantagesDocument = `
    query GetAdvantages {
  advantages {
    id
    title
    description
    icon {
      ...MediaFragment
    }
  }
}
    ${MediaFragmentFragmentDoc}`;

export const useGetAdvantagesQuery = <
  TData = GetAdvantagesQuery,
  TError = unknown,
>(
  variables?: GetAdvantagesQueryVariables,
  options?: UseQueryOptions<GetAdvantagesQuery, TError, TData>,
) => {
  return useQuery<GetAdvantagesQuery, TError, TData>(
    variables === undefined ? ["GetAdvantages"] : ["GetAdvantages", variables],
    fetcher<GetAdvantagesQuery, GetAdvantagesQueryVariables>(
      GetAdvantagesDocument,
      variables,
    ),
    options,
  );
};

useGetAdvantagesQuery.getKey = (variables?: GetAdvantagesQueryVariables) =>
  variables === undefined ? ["GetAdvantages"] : ["GetAdvantages", variables];

export const useInfiniteGetAdvantagesQuery = <
  TData = GetAdvantagesQuery,
  TError = unknown,
>(
  variables?: GetAdvantagesQueryVariables,
  options?: UseInfiniteQueryOptions<GetAdvantagesQuery, TError, TData>,
) => {
  return useInfiniteQuery<GetAdvantagesQuery, TError, TData>(
    variables === undefined
      ? ["GetAdvantages.infinite"]
      : ["GetAdvantages.infinite", variables],
    (metaData) =>
      fetcher<GetAdvantagesQuery, GetAdvantagesQueryVariables>(
        GetAdvantagesDocument,
        { ...variables, ...(metaData.pageParam ?? {}) },
      )(),
    options,
  );
};

useInfiniteGetAdvantagesQuery.getKey = (
  variables?: GetAdvantagesQueryVariables,
) =>
  variables === undefined
    ? ["GetAdvantages.infinite"]
    : ["GetAdvantages.infinite", variables];

useGetAdvantagesQuery.fetcher = (variables?: GetAdvantagesQueryVariables) =>
  fetcher<GetAdvantagesQuery, GetAdvantagesQueryVariables>(
    GetAdvantagesDocument,
    variables,
  );

export const GetSettingsCalcDocument = `
    query GetSettingsCalc {
  settingsCalculation {
    id
    type
    title
    min
    max
    step
    marks
  }
}
    `;

export const useGetSettingsCalcQuery = <
  TData = GetSettingsCalcQuery,
  TError = unknown,
>(
  variables?: GetSettingsCalcQueryVariables,
  options?: UseQueryOptions<GetSettingsCalcQuery, TError, TData>,
) => {
  return useQuery<GetSettingsCalcQuery, TError, TData>(
    variables === undefined
      ? ["GetSettingsCalc"]
      : ["GetSettingsCalc", variables],
    fetcher<GetSettingsCalcQuery, GetSettingsCalcQueryVariables>(
      GetSettingsCalcDocument,
      variables,
    ),
    options,
  );
};

useGetSettingsCalcQuery.getKey = (variables?: GetSettingsCalcQueryVariables) =>
  variables === undefined
    ? ["GetSettingsCalc"]
    : ["GetSettingsCalc", variables];

export const useInfiniteGetSettingsCalcQuery = <
  TData = GetSettingsCalcQuery,
  TError = unknown,
>(
  variables?: GetSettingsCalcQueryVariables,
  options?: UseInfiniteQueryOptions<GetSettingsCalcQuery, TError, TData>,
) => {
  return useInfiniteQuery<GetSettingsCalcQuery, TError, TData>(
    variables === undefined
      ? ["GetSettingsCalc.infinite"]
      : ["GetSettingsCalc.infinite", variables],
    (metaData) =>
      fetcher<GetSettingsCalcQuery, GetSettingsCalcQueryVariables>(
        GetSettingsCalcDocument,
        { ...variables, ...(metaData.pageParam ?? {}) },
      )(),
    options,
  );
};

useInfiniteGetSettingsCalcQuery.getKey = (
  variables?: GetSettingsCalcQueryVariables,
) =>
  variables === undefined
    ? ["GetSettingsCalc.infinite"]
    : ["GetSettingsCalc.infinite", variables];

useGetSettingsCalcQuery.fetcher = (variables?: GetSettingsCalcQueryVariables) =>
  fetcher<GetSettingsCalcQuery, GetSettingsCalcQueryVariables>(
    GetSettingsCalcDocument,
    variables,
  );

export const GetGoodsDocument = `
    query GetGoods {
  goods {
    ...Goods
  }
}
    ${GoodsFragmentDoc}`;

export const useGetGoodsQuery = <TData = GetGoodsQuery, TError = unknown>(
  variables?: GetGoodsQueryVariables,
  options?: UseQueryOptions<GetGoodsQuery, TError, TData>,
) => {
  return useQuery<GetGoodsQuery, TError, TData>(
    variables === undefined ? ["GetGoods"] : ["GetGoods", variables],
    fetcher<GetGoodsQuery, GetGoodsQueryVariables>(GetGoodsDocument, variables),
    options,
  );
};

useGetGoodsQuery.getKey = (variables?: GetGoodsQueryVariables) =>
  variables === undefined ? ["GetGoods"] : ["GetGoods", variables];

export const useInfiniteGetGoodsQuery = <
  TData = GetGoodsQuery,
  TError = unknown,
>(
  variables?: GetGoodsQueryVariables,
  options?: UseInfiniteQueryOptions<GetGoodsQuery, TError, TData>,
) => {
  return useInfiniteQuery<GetGoodsQuery, TError, TData>(
    variables === undefined
      ? ["GetGoods.infinite"]
      : ["GetGoods.infinite", variables],
    (metaData) =>
      fetcher<GetGoodsQuery, GetGoodsQueryVariables>(GetGoodsDocument, {
        ...variables,
        ...(metaData.pageParam ?? {}),
      })(),
    options,
  );
};

useInfiniteGetGoodsQuery.getKey = (variables?: GetGoodsQueryVariables) =>
  variables === undefined
    ? ["GetGoods.infinite"]
    : ["GetGoods.infinite", variables];

useGetGoodsQuery.fetcher = (variables?: GetGoodsQueryVariables) =>
  fetcher<GetGoodsQuery, GetGoodsQueryVariables>(GetGoodsDocument, variables);

export const GetMainSliderDocument = `
    query GetMainSlider {
  mainSlider {
    id
    goods {
      ...Goods
    }
    img {
      id
      width
      height
    }
  }
}
    ${GoodsFragmentDoc}`;

export const useGetMainSliderQuery = <
  TData = GetMainSliderQuery,
  TError = unknown,
>(
  variables?: GetMainSliderQueryVariables,
  options?: UseQueryOptions<GetMainSliderQuery, TError, TData>,
) => {
  return useQuery<GetMainSliderQuery, TError, TData>(
    variables === undefined ? ["GetMainSlider"] : ["GetMainSlider", variables],
    fetcher<GetMainSliderQuery, GetMainSliderQueryVariables>(
      GetMainSliderDocument,
      variables,
    ),
    options,
  );
};

useGetMainSliderQuery.getKey = (variables?: GetMainSliderQueryVariables) =>
  variables === undefined ? ["GetMainSlider"] : ["GetMainSlider", variables];

export const useInfiniteGetMainSliderQuery = <
  TData = GetMainSliderQuery,
  TError = unknown,
>(
  variables?: GetMainSliderQueryVariables,
  options?: UseInfiniteQueryOptions<GetMainSliderQuery, TError, TData>,
) => {
  return useInfiniteQuery<GetMainSliderQuery, TError, TData>(
    variables === undefined
      ? ["GetMainSlider.infinite"]
      : ["GetMainSlider.infinite", variables],
    (metaData) =>
      fetcher<GetMainSliderQuery, GetMainSliderQueryVariables>(
        GetMainSliderDocument,
        { ...variables, ...(metaData.pageParam ?? {}) },
      )(),
    options,
  );
};

useInfiniteGetMainSliderQuery.getKey = (
  variables?: GetMainSliderQueryVariables,
) =>
  variables === undefined
    ? ["GetMainSlider.infinite"]
    : ["GetMainSlider.infinite", variables];

useGetMainSliderQuery.fetcher = (variables?: GetMainSliderQueryVariables) =>
  fetcher<GetMainSliderQuery, GetMainSliderQueryVariables>(
    GetMainSliderDocument,
    variables,
  );

export const GetSuccessfulCasesDocument = `
    query GetSuccessfulCases {
  successfulCases {
    id
    title
    img {
      ...MediaFragment
    }
  }
}
    ${MediaFragmentFragmentDoc}`;

export const useGetSuccessfulCasesQuery = <
  TData = GetSuccessfulCasesQuery,
  TError = unknown,
>(
  variables?: GetSuccessfulCasesQueryVariables,
  options?: UseQueryOptions<GetSuccessfulCasesQuery, TError, TData>,
) => {
  return useQuery<GetSuccessfulCasesQuery, TError, TData>(
    variables === undefined
      ? ["GetSuccessfulCases"]
      : ["GetSuccessfulCases", variables],
    fetcher<GetSuccessfulCasesQuery, GetSuccessfulCasesQueryVariables>(
      GetSuccessfulCasesDocument,
      variables,
    ),
    options,
  );
};

useGetSuccessfulCasesQuery.getKey = (
  variables?: GetSuccessfulCasesQueryVariables,
) =>
  variables === undefined
    ? ["GetSuccessfulCases"]
    : ["GetSuccessfulCases", variables];

export const useInfiniteGetSuccessfulCasesQuery = <
  TData = GetSuccessfulCasesQuery,
  TError = unknown,
>(
  variables?: GetSuccessfulCasesQueryVariables,
  options?: UseInfiniteQueryOptions<GetSuccessfulCasesQuery, TError, TData>,
) => {
  return useInfiniteQuery<GetSuccessfulCasesQuery, TError, TData>(
    variables === undefined
      ? ["GetSuccessfulCases.infinite"]
      : ["GetSuccessfulCases.infinite", variables],
    (metaData) =>
      fetcher<GetSuccessfulCasesQuery, GetSuccessfulCasesQueryVariables>(
        GetSuccessfulCasesDocument,
        { ...variables, ...(metaData.pageParam ?? {}) },
      )(),
    options,
  );
};

useInfiniteGetSuccessfulCasesQuery.getKey = (
  variables?: GetSuccessfulCasesQueryVariables,
) =>
  variables === undefined
    ? ["GetSuccessfulCases.infinite"]
    : ["GetSuccessfulCases.infinite", variables];

useGetSuccessfulCasesQuery.fetcher = (
  variables?: GetSuccessfulCasesQueryVariables,
) =>
  fetcher<GetSuccessfulCasesQuery, GetSuccessfulCasesQueryVariables>(
    GetSuccessfulCasesDocument,
    variables,
  );

export const GetSectionFormSendDocument = `
    query GetSectionFormSend {
  sectionFormSend {
    id
    title
    description
  }
}
    `;

export const useGetSectionFormSendQuery = <
  TData = GetSectionFormSendQuery,
  TError = unknown,
>(
  variables?: GetSectionFormSendQueryVariables,
  options?: UseQueryOptions<GetSectionFormSendQuery, TError, TData>,
) => {
  return useQuery<GetSectionFormSendQuery, TError, TData>(
    variables === undefined
      ? ["GetSectionFormSend"]
      : ["GetSectionFormSend", variables],
    fetcher<GetSectionFormSendQuery, GetSectionFormSendQueryVariables>(
      GetSectionFormSendDocument,
      variables,
    ),
    options,
  );
};

useGetSectionFormSendQuery.getKey = (
  variables?: GetSectionFormSendQueryVariables,
) =>
  variables === undefined
    ? ["GetSectionFormSend"]
    : ["GetSectionFormSend", variables];

export const useInfiniteGetSectionFormSendQuery = <
  TData = GetSectionFormSendQuery,
  TError = unknown,
>(
  variables?: GetSectionFormSendQueryVariables,
  options?: UseInfiniteQueryOptions<GetSectionFormSendQuery, TError, TData>,
) => {
  return useInfiniteQuery<GetSectionFormSendQuery, TError, TData>(
    variables === undefined
      ? ["GetSectionFormSend.infinite"]
      : ["GetSectionFormSend.infinite", variables],
    (metaData) =>
      fetcher<GetSectionFormSendQuery, GetSectionFormSendQueryVariables>(
        GetSectionFormSendDocument,
        { ...variables, ...(metaData.pageParam ?? {}) },
      )(),
    options,
  );
};

useInfiniteGetSectionFormSendQuery.getKey = (
  variables?: GetSectionFormSendQueryVariables,
) =>
  variables === undefined
    ? ["GetSectionFormSend.infinite"]
    : ["GetSectionFormSend.infinite", variables];

useGetSectionFormSendQuery.fetcher = (
  variables?: GetSectionFormSendQueryVariables,
) =>
  fetcher<GetSectionFormSendQuery, GetSectionFormSendQueryVariables>(
    GetSectionFormSendDocument,
    variables,
  );

export const GetSectionMainSliderDocument = `
    query GetSectionMainSlider {
  sectionMainSlider {
    id
    title
    description
  }
}
    `;

export const useGetSectionMainSliderQuery = <
  TData = GetSectionMainSliderQuery,
  TError = unknown,
>(
  variables?: GetSectionMainSliderQueryVariables,
  options?: UseQueryOptions<GetSectionMainSliderQuery, TError, TData>,
) => {
  return useQuery<GetSectionMainSliderQuery, TError, TData>(
    variables === undefined
      ? ["GetSectionMainSlider"]
      : ["GetSectionMainSlider", variables],
    fetcher<GetSectionMainSliderQuery, GetSectionMainSliderQueryVariables>(
      GetSectionMainSliderDocument,
      variables,
    ),
    options,
  );
};

useGetSectionMainSliderQuery.getKey = (
  variables?: GetSectionMainSliderQueryVariables,
) =>
  variables === undefined
    ? ["GetSectionMainSlider"]
    : ["GetSectionMainSlider", variables];

export const useInfiniteGetSectionMainSliderQuery = <
  TData = GetSectionMainSliderQuery,
  TError = unknown,
>(
  variables?: GetSectionMainSliderQueryVariables,
  options?: UseInfiniteQueryOptions<GetSectionMainSliderQuery, TError, TData>,
) => {
  return useInfiniteQuery<GetSectionMainSliderQuery, TError, TData>(
    variables === undefined
      ? ["GetSectionMainSlider.infinite"]
      : ["GetSectionMainSlider.infinite", variables],
    (metaData) =>
      fetcher<GetSectionMainSliderQuery, GetSectionMainSliderQueryVariables>(
        GetSectionMainSliderDocument,
        { ...variables, ...(metaData.pageParam ?? {}) },
      )(),
    options,
  );
};

useInfiniteGetSectionMainSliderQuery.getKey = (
  variables?: GetSectionMainSliderQueryVariables,
) =>
  variables === undefined
    ? ["GetSectionMainSlider.infinite"]
    : ["GetSectionMainSlider.infinite", variables];

useGetSectionMainSliderQuery.fetcher = (
  variables?: GetSectionMainSliderQueryVariables,
) =>
  fetcher<GetSectionMainSliderQuery, GetSectionMainSliderQueryVariables>(
    GetSectionMainSliderDocument,
    variables,
  );
