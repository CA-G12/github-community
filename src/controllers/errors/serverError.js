const path = require('path');

const serverErrorRoute = (err, req, res, next) => {
  res.sendFile(
    path.join(__dirname, '..', '..', '..', 'public', 'html', 'serverError.html')
  );
};

module.exports = serverErrorRoute;
