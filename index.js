const {getBrands} = require('node-car-api');
const {getModels} = require('node-car-api');
var express = require('express');
var app = express();
const elasticsearch = require('elasticsearch');

 //UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 75): STATUS_4xx_5xx - 504 - Error: cannot POST /js-dynamic/search_fiches_tech.php (504)


var client = new elasticsearch.Client({
    host: 'localhost:32768'
})

app.listen(9292, function () {
  console.log("Port 9292");
});

async function getModel(model)
{
  const models = await getModels(model);
  return models;
}

async function getBrand()
{
  const brands = await getBrands();
  return brands;
}

app.get('/populate', function (req, res) {
  var brands = getBrand();

  brands.then(function(result)
  {
   client.indices.create({  
      index: 'caradisiac_1'
    },function(err,resp,status) {
      if(err) {
        console.log(err);
      }
      else {
        console.log("create",resp);
      }
    });

    for(var i = 0; i < result.length ; i++)
    {
      console.log(result[i]);
      getModel(result[i]).then(res=>
      {
        if(res.length != 0)
        {
          var id = res[0].uuid;
          var body = res[0];

          client.index({
            index: 'caradisiac_1',
            id: id,
            type: 'model',
            body: body
          }, function(err, resp, status) {
            console.log(resp);
          });
        }
        console.log(res);
      });
    }
  });
});

app.get('/suv', function (req, res) {
  var tab = [];
  client.search({
        index: 'caradisiac_1',
        type: 'model',
        body: {
            query: {
                match_all: {},
            },
            sort: {
                "volume.keyword": {
                    order: "desc" 
                }
            }
        }
    }).then(res => {
      console.log("#### Hits ####");
        res.hits.hits.forEach(model => {
            tab.push(model['_source']);
            console.log(model);
        });
    }).then(() => {
        res.json(tab);
    });;
});



