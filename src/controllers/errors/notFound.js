const path = require('path');

const notFoundRoute = (req, res) => {
  res.sendFile(
    path.join(__dirname, '..', '..', '..', 'public', 'html', 'notFound.html')
  );
};

module.exports = notFoundRoute;
