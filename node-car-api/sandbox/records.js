const getRecords = require('../src/get-records');

async function sandbox () {
  const records = await getRecords('AUDI');

  console.log(records);
}

sandbox();
