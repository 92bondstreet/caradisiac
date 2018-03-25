const getModels = require('../src/get-models');

async function sandbox () {
  const models = await getModels('AUDI');

  console.log(models);
}

sandbox();
