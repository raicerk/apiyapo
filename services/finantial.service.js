const axios = require('axios');

const uf = async () => {
  try {
    const { data } = await axios.get('https://mindicador.cl/api/uf/25-01-2022');
    return data.serie[0].valor;
  } catch (error) {
    return false;
  }
}

uf().then(result => {
  console.log(result);
})
