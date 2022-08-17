const userRoute = require('./one-user/user');
const allUsersRoute = require('./all-users/allUsers');
const notFoundRoute = require('./errors/notFound');
const serverErrorRoute = require('./errors/serverError');
const fetchRepos = require('./one-user/fetchRepos');
const searchRoute = require('./all-users/searchRoute')

module.exports = {
  userRoute,
  allUsersRoute,
  notFoundRoute,
  serverErrorRoute,
  fetchRepos,
  searchRoute,
};
