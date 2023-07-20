// server/schema.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    # Add other fields as needed
  }

  type Query {
    getUser(id: ID!): User
    # Add other queries as needed
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    # Add other mutations as needed
  }
`;

module.exports = typeDefs;
