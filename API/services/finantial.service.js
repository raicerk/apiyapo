const axios = require('axios'); // Importamos dependencias externas
const moment = require('moment'); // Importamor dependencias externas para el formato de fechas

/**
 * Funcion que retorna el valor de la UF del día, con sistema de cache usando redis
 * @param {*} redis 
 * @returns 
 */
const uf = async (redis) => {
  console.log(redis)
  try {
    const date = moment().format(process.env.DATE_FORMAT);
    const valDate = await redis.get('date', (err, valDate) => valDate)
    if (valDate != date) {
      const valorUF = await getUFval(date)
      redis.set('date', date)
      redis.set('UF', valorUF)
      return valorUF;
    } else {
      return await redis.get('UF', (err, valUF) => valUF)
    }
  } catch (error) {
    throw new Error('Redis error')
  }
}

/**
 * Función que consume un servicio rest para obtener el valor de la UF del día
 * @param {*} date 
 * @returns 
 */
const getUFval = async (date) => {
  try {
    const { data } = await axios.get(process.env.URL_API_UF + date);
    return data.serie[0].valor;
  } catch (error) {
    throw new Error('Axios error')
  }
}

module.exports = {
  uf,
  getUFval
}
