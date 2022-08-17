const path = require('path');
const fetchData = require('./fetch');

const allUsersRoute = (req, res) => {
  fetchData('https://api.github.com/users').then((data) => {
    let requests = [];
    data.forEach((e, i) => {
      requests.push(fetchData(e.url));
    });

    Promise.all(requests).then((data) => {
      res.send(data);
    });
  });
};

module.exports = allUsersRoute;
