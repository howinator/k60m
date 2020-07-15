'use strict';

const express = require('express');
const axios = require('axios');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

const indexHTML = `
<html>
<head>
  <title>k60m Demo</title>
</head>
<body>
  <h1>Hello ${process.env.USER_NAME}</h1>
  <h2>Enter a search term for twitter below</h2>
  <form action="/search">
    <label for='search'>Search term:</label>
    <input type='text' id='search' name='search'><br/>
    <input type='submit' value='Submit'>
  </form>
</body>
</html>
`

const renderResults = (twitterResults) => `
<html>
<head>
  <title>k60m Demo</title>
</head>
<body>
<h1>Here's the results hopefully.</h1>
<ol>
${twitterResults.statuses.map((status) => (
 `<li>${status.text}</li>`
))}
</ol>
</body>
</html>
`;

const getSearchResults = async (searchTerm) => {
  const axiosOptions = {
    headers:{
      Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
    },
    params: {
      q: searchTerm,
      result_type: 'mixed',
      count: 2
    }
  };
  return await axios.get('https://api.twitter.com/1.1/search/tweets.json', axiosOptions);
  
}

app.get('/', (req, res) => {
  res.send(indexHTML);
});

app.get('/search', async (req, res) => {
  const searchTerm = req.query.search;
  try {
    const searchResults = await getSearchResults(searchTerm);
    return res.send(renderResults(searchResults.data));
  } catch(e) {
    return res.send(e.toString());
  }
});

app.listen(PORT, HOST);

console.log('Serving');
