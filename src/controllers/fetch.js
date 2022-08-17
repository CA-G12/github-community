require('dotenv').config();
const apiKey = process.env.API_KEY;
const fetch = require('node-fetch');

const fetchData = (url) => {
  return fetch(url, {
    headers: { authorization: `token ${apiKey}` },
  }).then((response) => response.json());
};

module.exports = fetchData;
