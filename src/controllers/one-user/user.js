const path = require('path');
const fetchData = require('../fetch');

const userRoute = (req, res) => {
  const url = `https://api.github.com/users/${req.params.username}`;
  fetchData(url)
    .then((data) => {
      if (data.message === 'Not Found') {
        res.sendFile(
          path.join(
            __dirname,
            '..',
            '..',
            '..',
            'public',
            'html',
            'notFound.html'
          )
        );
      } else {
        res.send(data);
      }
    })
    .catch((err) => console.log('errr'));
};

module.exports = userRoute;
