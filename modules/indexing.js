var fs = require('fs');
var client = require('./connection.js');

fs.readFile("../movies.json", 'utf8', function (err, data) {
	  if (err) throw err;
	  var movies = JSON.parse(data);
      for(var i =0; i< movies.length;i++){
          client.index({
          index: 'movies',
          type: 'movie',
          id: i,
          body: {
            _id : movies[i]._id.$oid,
						 title : movies[i].title,
						 plot :movies[i].plot,
						 year : movies[i].year,
						 release_date : movies[i].release_date,
						 rank : movies[i].rank,
						 rating : movies[i].rating,
						 directors : movies[i].directors,
						 genres : movies[i].genres,
						 image :movies[i].image,
						 running_time_secs : movies[i].running_time_secs
          }
        }, function (error, response) {

        });
  }

	    });
