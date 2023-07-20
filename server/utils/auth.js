const { AuthenticationError } = require('apollo-server-express');
const jwt = require('jsonwebtoken');

const getUserFromAuthToken = (token) => {
  try {
    if (!token) return null;

    // Replace 'YOUR_SECRET_KEY' with your actual secret key used to sign the token
    const decodedToken = jwt.verify(token, 'YOUR_SECRET_KEY');
    return decodedToken.user;
  } catch (error) {
    // Token verification failed or token is invalid
    return null;
  }
};

const authMiddleware = (req, res, next) => {
  // Extract the JWT token from the request headers
  const token = req.headers.authorization || '';

  // Get the user information from the token using the helper function
  const user = getUserFromAuthToken(token);

  // Attach the user object to the context object to pass to resolvers
  req.context = { user };

  // Continue with the next middleware or resolver
  next();
};

module.exports = authMiddleware;

