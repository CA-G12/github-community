const userRoute = require('./user');
const allUsersRoute = require('./allUsers');
const notFoundRoute = require('./notFound');
const serverErrorRoute = require('./serverError');
const fetchRepos = require('./fetchRepos');

module.exports = {
  userRoute,
  allUsersRoute,
  notFoundRoute,
  serverErrorRoute,
  fetchRepos,
};
