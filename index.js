const {fetchBreedDescription} = require('./breedFetcher');


let input = process.argv.slice(2);
let string = input[0];

fetchBreedDescription(string, (error, desc) => {
  if (error) {
    console.log(error);
  } else {
    console.log(desc);
  }
});