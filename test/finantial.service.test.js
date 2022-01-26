const finantial = require('../services/finantial.service');
const dotenv = require('dotenv').config();

finantial.uf().then(result => {
  console.log(result);
})
