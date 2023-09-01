/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTest0830 = /* GraphQL */ `
  query GetTest0830($ID: ID!) {
    getTest0830(ID: $ID) {
      ID
      Name
      __typename
    }
  }
`;
export const listTest0830s = /* GraphQL */ `
  query ListTest0830s(
    $filter: TableTest0830FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTest0830s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ID
        Name
        __typename
      }
      nextToken
      __typename
    }
  }
`;
