var client = require('./connection.js');
module.exports = function (args) { }
 

var search = {

Get_Volume: function (jsonreq){
client.search({
  index: 'models',
  type: 'model',
  body: {
         "aggs" : {
        "avg_rating" : {
        "avg" : {"fiedld" : "fields.volume"}
}}
}}).then(function (body) {
  var hits = body.hits.hits;
}, function (error) {
  console.trace(error.message);
});
}
}
search.Get_Volume();
module.exports = search;





