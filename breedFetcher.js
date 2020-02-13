const request = require('request');





const fetchBreedDescription = (breedName, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName.slice(0, 3)}`, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);
      let data2 = null;
      if (data.length > 1) {
        for (let item in data) {
          if (data[item]['name'] === breedName) {
            data2 = data[item];
          }
        }
      }
      if (data2 !== null) {
        callback(null, data2['description']);
      } else {
        callback(error);
      }
    } else {
      callback(error);
    }
    
  });

};

module.exports = {fetchBreedDescription};