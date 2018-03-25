
var fs =require('fs');
var Brands =[];

var essai = ["ABARTH","AIXAM","ALFA ROMEO","ALPINA","ALPINE","ARO","ASTON MARTIN","AUDI","BENTLEY","BMW","BOLLORE","BOOXT","BUGATTI","BURBY S","CADILLAC","CATERHAM","CHATENET","CHEVROLET","CHRYSLER","CITROEN","COURB","DACIA","DAEWOO","DAIHATSU","DE TOMASO","DODGE","DONKERVOORT","DS","ELV","ESTRIMA","FAM AUTOMOBILES","FERRARI","FIAT","FORD","GINETTA","GME","HOMMELL","HONDA","HUMMER","HYUNDAI","INFINITI","ISUZU","IVECO","JAGUAR","JDM SIMPA","JEEP","KIA","KTM","LADA","LAMBORGHINI","LANCIA","LAND ROVER","LEXUS","LIGIER","LOTUS","MAHINDRA","MASERATI","MATRA","MAYBACH","MAZDA","MCLAREN","MEGA","MERCEDES","MERCEDES-AMG","MEV","MG","MIA ELECTRIC","MINI","MITSUBISHI","MORGAN","NISSAN","NOUN ELECTRIC","OPEL","PEUGEOT","PGO","PIAGGIO","PORSCHE","RENAULT","ROLLS ROYCE","ROVER","SAAB","SANTANA","SEAT","SECMA","SKODA","SMART","SOVAMAG","SSANGYONG","SUBARU","SUZUKI","TESLA","THINK","TOYOTA","TRIUMPH","TVR","VOLKSWAGEN","VOLTEIS","VOLVO","WIESMANN","XINYANG"];

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

// get ll the brands and store it to json file 
async function Get_Brands(){
 Brands = await getBrands();
 var myJSON = JSON.stringify(Brands);
 Store('output/brands.json',myJSON);
}

// get all the models accroding a brand and store it to json file 
async function Get_Models(brand){
const models = await getModels(brand);
var myJSON = JSON.stringify(models);
Store('./output/models.json',myJSON);
console.log(models);

}
// get all the records acorfing a brand and store it to json file 
async function Get_Records(brand){
const records = await getRecords(brand);
var myJSON = JSON.stringify(records);
   Store('./output/records.json',myJSON);
console.log(records);
}


// excecute the function to print the model and record according a brand
function Print(){
  essai.forEach(function(y) { 
    console.log(y);
    Get_Models(y);
    Get_Records(y);
});
}

function Main (){
    
   //Get_Brands();
   //setTimeout(Print,30000);
    Print();
}

Main();