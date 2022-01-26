const axios = require('axios'); // Import external dependency
const moment = require('moment'); // Import external dependency for format date

const uf = async () => {
  try {
    const { data } = await axios.get(process.env.URL_API_UF + moment().format(process.env.DATE_FORMAT));
    return data.serie[0].valor;
  } catch (error) {
    return false;
  }
}

module.exports = {
  uf
}
