// server/auth.js
const { AuthenticationError } = require('apollo-server-express');

const authenticate = (req, res, next) => {
  // Your authentication logic here
  // Assuming you attach the user object to req.user
  const user = getUserFromAuthToken(req.headers.authorization);

  // If user is not authenticated
  if (!user) {
    // Check if it's a GraphQL request
    if (req.body.operationName) {
      // Throw AuthenticationError for GraphQL requests
      throw new AuthenticationError('User not authenticated for GraphQL.');
    } else {
      // Redirect or respond with an error for non-GraphQL requests
      return res.status(401).json({ error: 'User not authenticated.' });
    }
  }

  req.user = user;
  next();
};

