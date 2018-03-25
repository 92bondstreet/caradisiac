var fs = require('fs');
var client = require('./connection.js');

fs.readFile("../output/models.json", 'utf8', function (err, data) {
	  if (err) throw err;
	  var models = JSON.parse(data);
      for(var i =0; i< models.length;i++){
          client.index({
          index: 'models',
          type: 'models',
          id: i,
          body: {
						 brand : models[i].brand,
						 image :models[i].image,
						 model : models[i].model,
						 volume : models[i].volume,
						 uuid : models[i].uuid,
						 name : models[i].name
          }
        }, function (error, response) {

        });
  }

	    });
