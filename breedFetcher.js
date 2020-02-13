const request = require('request');

let input = process.argv.slice(2);



let string = input[0].slice(0, 3);
//console.log(string);

request(`https://api.thecatapi.com/v1/breeds/search?q=${string}`, (error, response, body) => {
  // console.error('error', error);
  // console.log('status', response && response.statusCode);
  if (!error) {
    const data = JSON.parse(body);
    //console.log(data);
    //console.log(typeof data);
    let data2 = null;
    if (data.length > 1) {
      for (let item in data) {
        //console.log(data[item]);
        if (data[item]['name'] === input[0]) {
          data2 = data[item];
        }
      }
    }
    if (data2 === null) {
      console.log('NO RESULT FOUND');
    } else {
      console.log(data2['description']);
    }
  } else {
    console.error('ERROR', error);
    console.log('STATUS', response && response.statusCode);
  }
  
});