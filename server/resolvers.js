// server/resolvers.js
const { users } = require('./data'); //  data source

const resolvers = {
  Query: {
    getUser: (parent, { id }) => users.find((user) => user.id === id),
    getAllUsers: () => users,
  },
  Mutation: {
    createUser: (parent, { name, email }) => {
      const newUser = { id: String(users.length + 1), name, email };
      users.push(newUser);
      return newUser;
    },
  },
};

module.exports = resolvers;
