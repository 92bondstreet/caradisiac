var client = require('./connection.js');
//create _index

client.bulk({
  body: [
    // action description
    { index:  { _index: 'models', _type: 'mytype', _id: 1 } },
     // the document to index
  ]
}, function (err, resp) {
  if(err) {
    console.log(err);
  }
  else {
    console.log("create",resp);
});
