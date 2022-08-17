const fetchData = require('../fetch');

const searchRoute = (req, res) => {
    const username = req.params.username;
    fetchData(`https://api.github.com/users/${username}`)
        .then(data => res.send(data))
        .catch(err => console.log('Failed to search for a user!'))
}

module.exports = searchRoute;