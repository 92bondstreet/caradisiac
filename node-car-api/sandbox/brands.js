const {getBrands} = require('../');

async function sandbox () {
  const brands = await getBrands();

  console.log(brands);
}

sandbox();
