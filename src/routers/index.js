const express = require('express');
const router = express.Router();

const {
  userRoute,
  allUsersRoute,
  notFoundRoute,
  serverErrorRoute,
  fetchRepos,
  searchRoute,
  followersRoute,
  followingsRoute,
} = require('../controllers');

router.get('/users', allUsersRoute);
router.get('/users/:username', userRoute);
router.get('/user/repos/:username', fetchRepos);
router.get('/users/search/:username', searchRoute);
router.get('/user/:username/followers', followersRoute);
router.get('/user/:username/following', followingsRoute);

router.use(notFoundRoute);
router.use(serverErrorRoute);

module.exports = router;
