const axios = require('axios'); // Import external dependency
const moment = require('moment'); // Import external dependency for format date

const uf = async (redis) => {
  try {
    const date = moment().format(process.env.DATE_FORMAT);
    const valDate = await redis.get('date', (err, valDate) => valDate)
    if (valDate != date) {
      const { data } = await axios.get(process.env.URL_API_UF + date);
      const valorUF = data.serie[0].valor;
      redis.set('date', date)
      redis.set('UF', valorUF)
      return valorUF;
    } else {
      return await redis.get('UF', (err, valUF) => valUF)
    }
  } catch (error) {
    return false;
  }
}

module.exports = {
  uf
}
