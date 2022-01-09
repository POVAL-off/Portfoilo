import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: Date;
  /** The `Upload` scalar type represents a file upload. */
  Upload: File;
};

export type IAddSkill = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  name?: InputMaybe<Scalars['String']>;
  progress?: InputMaybe<Scalars['Int']>;
  shortName?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
};

export type IInputProject = {
  createDate?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  descriptionShort?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  name?: InputMaybe<Scalars['String']>;
  rate?: InputMaybe<Scalars['Float']>;
  stack?: InputMaybe<Array<Scalars['ID']>>;
  status?: InputMaybe<Status>;
};

export type IMutation = {
  addProject: IProject;
  addSkill: ISkill;
  addSkillsToProject: IProject;
  editProject: IProject;
  editSkill: ISkill;
  removeProject: IProject;
  removeSkill: ISkill;
  removeSkillsInProject: IProject;
};


export type IMutationAddProjectArgs = {
  createDate?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  descriptionShort?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  name?: InputMaybe<Scalars['String']>;
  rate?: InputMaybe<Scalars['Float']>;
  stack?: InputMaybe<Array<Scalars['ID']>>;
  status?: InputMaybe<Status>;
};


export type IMutationAddSkillArgs = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  name?: InputMaybe<Scalars['String']>;
  progress?: InputMaybe<Scalars['Int']>;
  shortName?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Status>;
};


export type IMutationAddSkillsToProjectArgs = {
  id: Scalars['String'];
  skillsId: Array<Scalars['String']>;
};


export type IMutationEditProjectArgs = {
  id: Scalars['String'];
  project: IInputProject;
};


export type IMutationEditSkillArgs = {
  id: Scalars['String'];
  skill: IAddSkill;
};


export type IMutationRemoveProjectArgs = {
  id: Scalars['String'];
};


export type IMutationRemoveSkillArgs = {
  id: Scalars['String'];
};


export type IMutationRemoveSkillsInProjectArgs = {
  id: Scalars['String'];
  skillsId: Array<Scalars['String']>;
};

export type IProject = {
  _id: Scalars['ID'];
  createDate?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  descriptionShort?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  rate?: Maybe<Scalars['Float']>;
  stack?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status?: Maybe<Status>;
};

export type IQuery = {
  getProject: IProject;
  getProjects: Array<IProject>;
  getSkill: ISkill;
  getSkills: Array<ISkill>;
};


export type IQueryGetProjectArgs = {
  id: Scalars['String'];
};


export type IQueryGetSkillArgs = {
  id: Scalars['String'];
};

export type ISkill = {
  _id?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  progress?: Maybe<Scalars['Int']>;
  shortName?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
};

/** Status entity */
export enum Status {
  Active = 'ACTIVE',
  Disable = 'DISABLE',
  Hidden = 'HIDDEN',
  Short = 'SHORT'
}

export type IGetSkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type IGetSkillsQuery = { getSkills: Array<{ _id?: string | null | undefined, name: string, shortName?: string | null | undefined, description?: string | null | undefined, progress?: number | null | undefined, status?: Status | null | undefined, image?: string | null | undefined }> };


export const GetSkillsDocument = gql`
    query GetSkills {
  getSkills {
    _id
    name
    shortName
    description
    progress
    status
    image
  }
}
    `;

/**
 * __useGetSkillsQuery__
 *
 * To run a query within a React component, call `useGetSkillsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSkillsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSkillsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSkillsQuery(baseOptions?: Apollo.QueryHookOptions<IGetSkillsQuery, IGetSkillsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IGetSkillsQuery, IGetSkillsQueryVariables>(GetSkillsDocument, options);
      }
export function useGetSkillsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IGetSkillsQuery, IGetSkillsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IGetSkillsQuery, IGetSkillsQueryVariables>(GetSkillsDocument, options);
        }
export type GetSkillsQueryHookResult = ReturnType<typeof useGetSkillsQuery>;
export type GetSkillsLazyQueryHookResult = ReturnType<typeof useGetSkillsLazyQuery>;
export type GetSkillsQueryResult = Apollo.QueryResult<IGetSkillsQuery, IGetSkillsQueryVariables>;