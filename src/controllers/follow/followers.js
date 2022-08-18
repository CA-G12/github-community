const fetchData = require('../fetch');

const followersRoute = (req, res) => {
  const username = req.params.username;
  fetchData(`https://api.github.com/users/${username}/followers`).then(
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

module.exports = followersRoute;
