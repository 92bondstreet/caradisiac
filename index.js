/*var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
}); */
var fs =require('fs');
var Brands;

const {getBrands} = require('node-car-api');
const {getModels} = require('node-car-api');
const {getRecords} = require('node-car-api');


function Store(path,myJSON){

fs.appendFile(path, myJSON, function(err) {
    if(err) {
    return console.log(err);
    }
    });
}


async function Get_Brands(){
 Brands = await getBrands();
}




//Get_Brands();
/*

function Get_Test(path){
	fs.readFile(path, 'utf8', function (err, data) {
	  if (err) throw err;
	  Brands = JSON.parse(data);
      Brands.forEach(function(y) 
        { 
          console.log(y);
           Get_Models(y);
        });
        
	});
 
}
*/



async function Get_Models(brand){
const models = await getModels(brand);
var myJSON = JSON.stringify(models);
Store('models.json',myJSON);
console.log(models);

}

async function Get_Records(brand){
const records = await getRecords(brand);
var myJSON = JSON.stringify(records);
   Store('records.json',myJSON);
console.log(records);
}


function Print(){
  Brands.forEach(function(y) 
        { 
          console.log(y);
          Get_Models(y);
        });
}

function Main (){
    
   Get_Brands();
   setTimeout(Print,30000);
    //Get_Test('brands.json');
}

Main();