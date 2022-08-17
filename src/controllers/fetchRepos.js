const fetchData = require('./fetch.js');

const fetchRepos = (req, res) => {
  const userName = req.params.username;
  fetchData(`https://api.github.com/users/${userName}/repos`)
    .then((data) => res.send(data))
    .catch((err) => console.log('error in fetching repos'));
};

module.exports = fetchRepos;
