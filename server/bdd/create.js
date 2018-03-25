var client = require('./connection.js');

client.bulk({
  body: [
    { index:  { _index: 'models', _type: 'model', _id: 1 } },
  ]
}, function (err, resp) {
    if(err) {
    console.log(err);
  }
  else {
    console.log("create",resp);
  }
});