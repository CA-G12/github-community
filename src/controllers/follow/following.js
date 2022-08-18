const fetchData = require('../fetch');

const followingRoute = (req, res) => {
  const username = req.params.username;
  fetchData(`https://api.github.com/users/${username}/following`).then(
    (data) => {
      let requests = [];
      data.forEach((e, i) => {
        requests.push(fetchData(e.url));
      });

      Promise.all(requests).then((data) => {
        res.send(data);
      });
    }
  );
};

module.exports = followingRoute;
