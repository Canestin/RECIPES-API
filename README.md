# APi-CRUD-FAB
This is an API allowing users to manage recipes and ingredients


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>



[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest



  <p align="center">This application was developed in <a href="http://nestjs.com/" target="_blank">NESTJS </a> (A NodeJS Framework) and mainly the <a href="http://Typeorm.io//" target="_blank"> TypeOrm </a>  module  framework for building efficient and scalable server-side applications following the Data Mapper standard.</p>
    <p align="center">



## Features

- Obtain all available recipes

- Acquire all available ingredients

- Get the ingredients for a given recipe

- Obtain all recipes containing an ingredient  



Prerequisites :  

Download the software. Install it. Connect your local database by modifying the connection credentials in the src/app.module.ts file at the level.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev


```

##  USE



This API works on the REST standard, collecting two main pieces of information: the recipes and the ingredients that go with them.

- The application runs on port 3000 by default.

- The Swagger module is configured on this application. Instead of Postman, you can better document yourself while issuing your HTTP requests. To access Swagger, type on your browser http://localhost:3000/api



## OK ! But concretely, how does it happen ?


### You can perform 4 types of requests ( Create - Read - Update - Delete )

#### With  http://localhost:3000/recipes

 The possible scenarios are:

- GET  :  Get all recipes


- POST  : Send a new item to the database


- PUT  :  Error (No element is specified!) So the ideal would be to add a /idOfTheRecipe


- DELETE  : Error (No item specified)



####  http://localhost:3000/ingredients  


- The logic is the same.


####  http://localhost:3000/recipes/id or http://localhost:3000/ingrediants/id



- GET  : Return the specified item


- POST  : Error(The element that will potentially be created in a few seconds does not yet have an identifier)


- PUT  :  Edit item properties


- DELETE  : Delete item



####  http://localhost:3000/recipes/with/idIngredient



- GET  : Return all recipes made with the specified ingredient 


- POST  : Error (The element that will potentially be created in a few seconds does not yet have an identifier)


- PUT  :  Error


- DELETE  :  Delete them





## License

[MIT licensed](LICENSE)
