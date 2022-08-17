const path = require('path');

const userRoute = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'user.html'));
};

module.exports = userRoute;
