/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./api/context/index"
import type { core, connectionPluginCore } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * The `BigInt` scalar type represents non-fractional signed whole numeric values.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
     */
    bigInt<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "BigInt";
    /**
     * The `Byte` scalar type represents byte value as a Buffer
     */
    bytes<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Bytes";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
    /**
     * An arbitrary-precision Decimal type
     */
    decimal<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Decimal";
    /**
     * The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Json";
    /**
     * Must and only use for input
     */
    relayId<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "RelayId";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * The `BigInt` scalar type represents non-fractional signed whole numeric values.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
     */
    bigInt<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "BigInt";
    /**
     * The `Byte` scalar type represents byte value as a Buffer
     */
    bytes<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Bytes";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
    /**
     * An arbitrary-precision Decimal type
     */
    decimal<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Decimal";
    /**
     * The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Json";
    /**
     * Must and only use for input
     */
    relayId<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "RelayId";
    /**
     * Adds a Relay-style connection to the type, with numerous options for configuration
     *
     * @see https://nexusjs.org/docs/plugins/connection
     */
    connectionField<FieldName extends string>(
      fieldName: FieldName,
      config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName>
    ): void
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CommentCreateInput: { // input type
    content: string; // String!
    postId: NexusGenScalars['RelayId']; // RelayId!
  }
  PostConnectionWhere: { // input type
    published?: boolean | null; // Boolean
  }
  PostCreateInput: { // input type
    body: string; // String!
    published: boolean; // Boolean!
    title: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  BigInt: any
  Bytes: any
  DateTime: any
  Decimal: any
  Json: any
  RelayId: any
}

export interface NexusGenObjects {
  Comment: { // root type
    content: string; // String!
  }
  CommentConnection: { // root type
    edges: NexusGenRootTypes['CommentEdge'][]; // [CommentEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  CommentCreatePayload: { // root type
    comment: NexusGenRootTypes['Comment']; // Comment!
  }
  CommentEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Comment']; // Comment!
  }
  Mutation: {};
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Post: { // root type
    body: string; // String!
    published: boolean; // Boolean!
    title: string; // String!
  }
  PostConnection: { // root type
    edges: NexusGenRootTypes['PostEdge'][]; // [PostEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  PostCreatePayload: { // root type
    post: NexusGenRootTypes['Post']; // Post!
  }
  PostEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Post']; // Post!
  }
  Query: {};
}

export interface NexusGenInterfaces {
  Node: NexusGenRootTypes['Comment'] | NexusGenRootTypes['Post'];
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenInterfaces & NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Comment: { // field return type
    content: string; // String!
    id: string; // ID!
    post: NexusGenRootTypes['Post'] | null; // Post
  }
  CommentConnection: { // field return type
    edges: NexusGenRootTypes['CommentEdge'][]; // [CommentEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  CommentCreatePayload: { // field return type
    comment: NexusGenRootTypes['Comment']; // Comment!
  }
  CommentEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Comment']; // Comment!
  }
  Mutation: { // field return type
    commentCreate: NexusGenRootTypes['CommentCreatePayload']; // CommentCreatePayload!
    postCreate: NexusGenRootTypes['PostCreatePayload']; // PostCreatePayload!
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Post: { // field return type
    body: string; // String!
    comments: NexusGenRootTypes['CommentConnection']; // CommentConnection!
    id: string; // ID!
    published: boolean; // Boolean!
    title: string; // String!
  }
  PostConnection: { // field return type
    edges: NexusGenRootTypes['PostEdge'][]; // [PostEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  PostCreatePayload: { // field return type
    post: NexusGenRootTypes['Post']; // Post!
  }
  PostEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Post']; // Post!
  }
  Query: { // field return type
    node: NexusGenRootTypes['Node'] | null; // Node
    posts: NexusGenRootTypes['PostConnection']; // PostConnection!
  }
  Node: { // field return type
    id: string; // ID!
  }
}

export interface NexusGenFieldTypeNames {
  Comment: { // field return type name
    content: 'String'
    id: 'ID'
    post: 'Post'
  }
  CommentConnection: { // field return type name
    edges: 'CommentEdge'
    pageInfo: 'PageInfo'
  }
  CommentCreatePayload: { // field return type name
    comment: 'Comment'
  }
  CommentEdge: { // field return type name
    cursor: 'String'
    node: 'Comment'
  }
  Mutation: { // field return type name
    commentCreate: 'CommentCreatePayload'
    postCreate: 'PostCreatePayload'
  }
  PageInfo: { // field return type name
    endCursor: 'String'
    hasNextPage: 'Boolean'
    hasPreviousPage: 'Boolean'
    startCursor: 'String'
  }
  Post: { // field return type name
    body: 'String'
    comments: 'CommentConnection'
    id: 'ID'
    published: 'Boolean'
    title: 'String'
  }
  PostConnection: { // field return type name
    edges: 'PostEdge'
    pageInfo: 'PageInfo'
  }
  PostCreatePayload: { // field return type name
    post: 'Post'
  }
  PostEdge: { // field return type name
    cursor: 'String'
    node: 'Post'
  }
  Query: { // field return type name
    node: 'Node'
    posts: 'PostConnection'
  }
  Node: { // field return type name
    id: 'ID'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    commentCreate: { // args
      input: NexusGenInputs['CommentCreateInput']; // CommentCreateInput!
    }
    postCreate: { // args
      input: NexusGenInputs['PostCreateInput']; // PostCreateInput!
    }
  }
  Post: {
    comments: { // args
      after?: string | null; // String
      first: number; // Int!
    }
  }
  Query: {
    node: { // args
      id: string; // ID!
    }
    posts: { // args
      after?: string | null; // String
      first: number; // Int!
      where?: NexusGenInputs['PostConnectionWhere'] | null; // PostConnectionWhere
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  Node: "Comment" | "Post"
}

export interface NexusGenTypeInterfaces {
  Comment: "Node"
  Post: "Node"
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = keyof NexusGenInterfaces;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = "Node";

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}