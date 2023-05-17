import userController from "../controllers/userController.js";

const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    users: [User]! # Retrieve information about all users.
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload!
    register(username: String!, email: String!, password: String!): AuthPayload!
  }
`;

const resolvers = {
  Query: {
    users: () => {
      return userController.getUsers();
    },
  },
  Mutation: {
    login: (_, { email, password }) => {
      return userController.authUser({ email, password });
    },
    register: (_, { username, email, password }) => {
      return userController.registerUser({
        username,
        email,
        password,
      });
    },
  },
};

export { typeDefs, resolvers };
