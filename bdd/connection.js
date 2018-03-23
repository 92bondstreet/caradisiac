var elasticsearch = require('elasticsearch');

//create connection
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});


function Test_Co(){ 
client.ping({
  // ping usually has a 3000ms timeout
  requestTimeout: 3000
}, function (error) {
  if (error) {
    console.trace('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});
}
module.exports = client;