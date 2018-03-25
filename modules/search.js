var client = require('./connection.js');
module.exports = function (args) { }

/*
//pour la requete en dur, l'utilisateur rentrera sa requete sous forme de texte en format json
var user_input ="";
client.search({
  index: 'movies',
  type: 'movie',
  user_input
}).then(function (body) {
  var hits = body.hits.hits;
}, function (error) {
  console.trace(error.message);
});*/


//var input ="George Clooney";
//pour la barre de recherche, juste faire varier george clooney pour rechercher partout
var search = {
  Search_Movie: function(){
client.search({
  index: 'movies',
  type: 'movie',
  q: 'George Clooney'
}).then(function (body) {
      var hits = body.hits.hits;
    }, function (error) {
      console.trace(error.message);
    });
  }
}
module.exports = search;


//POUR LE formulaire, faire varier fields.title et star wars

function Search_Form (title){
client.search({
  index: 'movies',
  type: 'movie',
  body: {
        query: {
            match: {
                "fields.title": title
            }
        }
    }
}).then(function (body) {
  var hits = body.hits.hits;
}, function (error) {
  console.trace(error.message);
});
}



