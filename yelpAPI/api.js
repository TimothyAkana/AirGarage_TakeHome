const API_KEY = require('./apiKey.js');
const axios = require('axios');

module.exports = {
  searchLocation: (req, res) => {
    axios.get(`https://api.yelp.com/v3/businesses/search?term=Parking&location=${req.params.location}`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    })
      .then(results => {
        res.json(results.data);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      })
  }
}