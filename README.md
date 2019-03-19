# node-restful-errors

[![Build Status](https://travis-ci.org/rockyliyanlok/node-restful-errors.svg?branch=master)](https://travis-ci.org/rockyliyanlok/node-restful-errors) [![Download Stats](https://img.shields.io/npm/dw/restful-errors.svg)](https://github.com/rockyliyanlok/node-restful-errors)

An utility class to generate and handle RESTful api errors in web service.

## Installation

To install the random generator, use [npm](http://github.com/npm/npm):

```
npm install --save restful-errors
```

## Usage

```javascript

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const RestfulErrors = require('restful-errors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/bad-request', (req, res, next) => {
  next(new RestfulErrors.BadRequestError());
})

app.get('/customized-messages', (req, res, next) => {
  next(new RestfulErrors.BadRequestError([
    { 
      location: 'query', 
      param: 'uid', 
      value: undefined, 
      msg: 'The uid field is required.' 
    }, 
    { 
      location: 'body', 
      param: 'name', 
      value: 'A', 
      msg: 'The name field must be between 2 and 255 characters in length.' 
    }
  ]));
})

app.use(RestfulErrors.handler());

const server = http.createServer(app);
server.listen(3000);

module.exports = server;

```

## API

## Tests

```
npm install
npm run test
```

## LICENSE

node-resful-errors is licensed under the MIT license.
