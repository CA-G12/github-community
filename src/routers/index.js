const express = require('express');
const router = express.Router();

const {
  userRoute,
  allUsersRoute,
  notFoundRoute,
  serverErrorRoute,
} = require('../controllers');

router.get('/user', userRoute);
router.use(notFoundRoute);
router.use(serverErrorRoute);

module.exports = router;
