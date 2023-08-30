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
  DateTime: Date;
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

export type IInputPage = {
  link: Scalars['String'];
  name: Scalars['String'];
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
  __typename?: 'Mutation';
  addPage: IPage;
  addProject: IProject;
  addRoleUser: IUser;
  addSkill: ISkill;
  addSkillsToProject: IProject;
  editPage: IPage;
  editProject: IProject;
  editSkill: ISkill;
  login: IUser;
  logout: Scalars['Boolean'];
  registration: IUser;
  removePage: IPage;
  removeProject: IProject;
  removeSkill: ISkill;
  removeSkillsInProject: IProject;
};


export type IMutationAddPageArgs = {
  link: Scalars['String'];
  name: Scalars['String'];
  status?: InputMaybe<Status>;
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


export type IMutationAddRoleUserArgs = {
  id: Scalars['String'];
  role: Scalars['String'];
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


export type IMutationEditPageArgs = {
  Page: IInputPage;
  id: Scalars['String'];
};


export type IMutationEditProjectArgs = {
  id: Scalars['String'];
  project: IInputProject;
};


export type IMutationEditSkillArgs = {
  id: Scalars['String'];
  skill: IAddSkill;
};


export type IMutationLoginArgs = {
  nickName: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationRegistrationArgs = {
  nickName: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationRemovePageArgs = {
  id: Scalars['String'];
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

export type IPage = {
  __typename?: 'Page';
  _id?: Maybe<Scalars['ID']>;
  link?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  status?: Maybe<Status>;
};

export type IProject = {
  __typename?: 'Project';
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
  __typename?: 'Query';
  getPage: IPage;
  getPages: Array<IPage>;
  getProject: IProject;
  getProjects: Array<IProject>;
  getSkill: ISkill;
  getSkills: Array<ISkill>;
  me: IUser;
};


export type IQueryGetPageArgs = {
  id: Scalars['String'];
};


export type IQueryGetProjectArgs = {
  id: Scalars['String'];
};


export type IQueryGetSkillArgs = {
  id: Scalars['String'];
};

export type IRegisterUser = {
  nickName: Scalars['String'];
  password: Scalars['String'];
};

/** User role */
export enum Role {
  Admin = 'ADMIN',
  Betatester = 'BETATESTER',
  Moderator = 'MODERATOR',
  User = 'USER'
}

export type ISkill = {
  __typename?: 'Skill';
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

export type IUser = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']>;
  nickName: Scalars['String'];
  password: Scalars['String'];
  role?: Maybe<Role>;
};

export type IGetSkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type IGetSkillsQuery = { __typename?: 'Query', getSkills: Array<{ __typename?: 'Skill', _id?: string | null | undefined, name: string, shortName?: string | null | undefined, description?: string | null | undefined, progress?: number | null | undefined, status?: Status | null | undefined, image?: string | null | undefined }> };

export type IEditSkillMutationVariables = Exact<{
  skill: IAddSkill;
  editSkillId: Scalars['String'];
}>;


export type IEditSkillMutation = { __typename?: 'Mutation', editSkill: { __typename?: 'Skill', _id?: string | null | undefined, name: string, shortName?: string | null | undefined, description?: string | null | undefined, progress?: number | null | undefined, status?: Status | null | undefined, image?: string | null | undefined } };

export type IRemoveSkillMutationVariables = Exact<{
  removeSkillId: Scalars['String'];
}>;


export type IRemoveSkillMutation = { __typename?: 'Mutation', removeSkill: { __typename?: 'Skill', _id?: string | null | undefined, name: string, image?: string | null | undefined } };

export type ILoginMutationVariables = Exact<{
  nickName: Scalars['String'];
  password: Scalars['String'];
}>;


export type ILoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', _id?: string | null | undefined } };

export type IMeQueryVariables = Exact<{ [key: string]: never; }>;


export type IMeQuery = { __typename?: 'Query', me: { __typename?: 'User', _id?: string | null | undefined, nickName: string, role?: Role | null | undefined } };

export type ILogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type ILogoutMutation = { __typename?: 'Mutation', logout: boolean };


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
export const EditSkillDocument = gql`
    mutation EditSkill($skill: AddSkill!, $editSkillId: String!) {
  editSkill(skill: $skill, id: $editSkillId) {
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
export type IEditSkillMutationFn = Apollo.MutationFunction<IEditSkillMutation, IEditSkillMutationVariables>;

/**
 * __useEditSkillMutation__
 *
 * To run a mutation, you first call `useEditSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editSkillMutation, { data, loading, error }] = useEditSkillMutation({
 *   variables: {
 *      skill: // value for 'skill'
 *      editSkillId: // value for 'editSkillId'
 *   },
 * });
 */
export function useEditSkillMutation(baseOptions?: Apollo.MutationHookOptions<IEditSkillMutation, IEditSkillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IEditSkillMutation, IEditSkillMutationVariables>(EditSkillDocument, options);
      }
export type EditSkillMutationHookResult = ReturnType<typeof useEditSkillMutation>;
export type EditSkillMutationResult = Apollo.MutationResult<IEditSkillMutation>;
export type EditSkillMutationOptions = Apollo.BaseMutationOptions<IEditSkillMutation, IEditSkillMutationVariables>;
export const RemoveSkillDocument = gql`
    mutation RemoveSkill($removeSkillId: String!) {
  removeSkill(id: $removeSkillId) {
    _id
    name
    image
  }
}
    `;
export type IRemoveSkillMutationFn = Apollo.MutationFunction<IRemoveSkillMutation, IRemoveSkillMutationVariables>;

/**
 * __useRemoveSkillMutation__
 *
 * To run a mutation, you first call `useRemoveSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeSkillMutation, { data, loading, error }] = useRemoveSkillMutation({
 *   variables: {
 *      removeSkillId: // value for 'removeSkillId'
 *   },
 * });
 */
export function useRemoveSkillMutation(baseOptions?: Apollo.MutationHookOptions<IRemoveSkillMutation, IRemoveSkillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IRemoveSkillMutation, IRemoveSkillMutationVariables>(RemoveSkillDocument, options);
      }
export type RemoveSkillMutationHookResult = ReturnType<typeof useRemoveSkillMutation>;
export type RemoveSkillMutationResult = Apollo.MutationResult<IRemoveSkillMutation>;
export type RemoveSkillMutationOptions = Apollo.BaseMutationOptions<IRemoveSkillMutation, IRemoveSkillMutationVariables>;
export const LoginDocument = gql`
    mutation Login($nickName: String!, $password: String!) {
  login(nickName: $nickName, password: $password) {
    _id
  }
}
    `;
export type ILoginMutationFn = Apollo.MutationFunction<ILoginMutation, ILoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      nickName: // value for 'nickName'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<ILoginMutation, ILoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ILoginMutation, ILoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<ILoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<ILoginMutation, ILoginMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    _id
    nickName
    role
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<IMeQuery, IMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMeQuery, IMeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMeQuery, IMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMeQuery, IMeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<IMeQuery, IMeQueryVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type ILogoutMutationFn = Apollo.MutationFunction<ILogoutMutation, ILogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<ILogoutMutation, ILogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ILogoutMutation, ILogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<ILogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<ILogoutMutation, ILogoutMutationVariables>;