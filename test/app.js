'use strict'

const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const Restful = require('../src')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/bad-request', (req, res, next) => {
  next(new Restful.BadRequestError())
})

app.get('/unauthorized', (req, res, next) => {
  next(new Restful.UnauthorizedError())
})

app.get('/forbidden', (req, res, next) => {
  next(new Restful.ForbiddenError())
})

app.get('/not-found', (req, res, next) => {
  next(new Restful.NotFoundError())
})

app.get('/method-not-allowed', (req, res, next) => {
  next(new Restful.MethodNotAllowedError())
})

app.get('/conflict', (req, res, next) => {
  next(new Restful.ConflictError())
})

app.get('/gone', (req, res, next) => {
  next(new Restful.GoneError())
})

app.get('/request-entity-too-large', (req, res, next) => {
  next(new Restful.RequestEntityTooLargeError())
})

app.get('/unsupported-media-type', (req, res, next) => {
  next(new Restful.UnsupportedMediaTypeError())
})

app.get('/unprocessable-entity', (req, res, next) => {
  next(new Restful.UnprocessableEntityError())
})

app.get('/too-many-requests', (req, res, next) => {
  next(new Restful.TooManyRequestsError())
})

app.get('/internal-server', (req, res, next) => {
  next(new Restful.InternalServerError())
})

app.get('/service-unavailable', (req, res, next) => {
  next(new Restful.ServiceUnavailableError())
})

app.get('/no-permission', (req, res, next) => {
  next(new Restful.ForbiddenError('No permission.'))
})

app.get('/customized-messages', (req, res, next) => {
  next(new Restful.BadRequestError([
    { location: 'query', param: 'uid', value: undefined, msg: 'The uid field is required.' }, 
    { location: 'body', param: 'name', value: undefined, msg: 'The name field must be between 2 and 255 characters in length.' }
  ]))
})

app.use(Restful.errorHandler())

const server = http.createServer(app)
server.listen(3000)

module.exports = server

