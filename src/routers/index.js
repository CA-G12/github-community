const express = require('express');
const router = express.Router();

const {
  userRoute,
  allUsersRoute,
  notFoundRoute,
  serverErrorRoute,
} = require('../controllers');

router.get('/users', allUsersRoute);
router.get('/users/:username', userRoute);
router.use(notFoundRoute);
router.use(serverErrorRoute);

module.exports = router;
