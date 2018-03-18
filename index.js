var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});
var fs =require('fs');

const {getBrands} = require('node-car-api');
const {getModels} = require('node-car-api');
const {getRecords} = require('node-car-api');


async function Get_Brands(){
const brands = await getBrands();
console.log(brands);

}

async function Get_Models(){

const models = await getModels('PEUGEOT');
console.log(models);

}

async function Get_Records(){
const records = await getRecords('PEUGEOT');
console.log(records);
}

Get_Brands();