# CARADISIAC

> Drive comfortably

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Introduction](#introduction)
- [Objective](#objective)
- [Description](#description)
  - [Client Side](#client)
  - [Server Side](#server)
    -[BDD](#bdd)
- [Installation](#installation)
- [Licence](#licence)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

[caradisiac.com](http://www.caradisiac.com/fiches-techniques) provides a tone of technical records related to car specification.

## Objective - 
**Build an api that get the list of SUV with the higher rate and the higher volume (car boot)**

The api

* must listen port `9292`
* must provide endpoint `/populate` to index records to Elasticsearch
* must provide endpoint `/suv` that return list of paginated higher rate and higher volume suv

## Description

Description of the folder 

### Client Side

The client side is provided by React on port 3000 : we have the list of the model 

### Server Side

The server side is managed with node on port 5000
#### BDD 
ElasticSearch 

## Installation

* Fork the project via `github`
* Run the server side 
* Install nodemon globally and the server dependencies)
```sh
❯ cd /path/to/caradisiac/server 
❯ npm install
❯ npm i nodemon -g

❯ node server.js

```
* Run the bdd 
```sh
❯ cd /path/to/caradisiac/server/bdd 
❯ node init_bd.js
❯ node search.js
❯ node server.js

```
* Run the client side 

```sh
❯ cd /path/to/caradisiac/client
❯ npm start
```
Now go to localhost:3000 ! 

## Licence

[Uncopyrighted](http://zenhabits.net/uncopyright/)
