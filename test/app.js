'use strict'

const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const RestfulErrors = require('../src')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/bad-request', (req, res, next) => {
  next(new RestfulErrors.BadRequestError())
})

app.get('/unauthorized', (req, res, next) => {
  next(new RestfulErrors.UnauthorizedError())
})

app.get('/forbidden', (req, res, next) => {
  next(new RestfulErrors.ForbiddenError())
})

app.get('/not-found', (req, res, next) => {
  next(new RestfulErrors.NotFoundError())
})

app.get('/method-not-allowed', (req, res, next) => {
  next(new RestfulErrors.MethodNotAllowedError())
})

app.get('/conflict', (req, res, next) => {
  next(new RestfulErrors.ConflictError())
})

app.get('/gone', (req, res, next) => {
  next(new RestfulErrors.GoneError())
})

app.get('/request-entity-too-large', (req, res, next) => {
  next(new RestfulErrors.RequestEntityTooLargeError())
})

app.get('/unsupported-media-type', (req, res, next) => {
  next(new RestfulErrors.UnsupportedMediaTypeError())
})

app.get('/unprocessable-entity', (req, res, next) => {
  next(new RestfulErrors.UnprocessableEntityError())
})

app.get('/too-many-requests', (req, res, next) => {
  next(new RestfulErrors.TooManyRequestsError())
})

app.get('/internal-server', (req, res, next) => {
  next(new RestfulErrors.InternalServerError())
})

app.get('/service-unavailable', (req, res, next) => {
  next(new RestfulErrors.ServiceUnavailableError())
})

app.get('/no-permission', (req, res, next) => {
  next(new RestfulErrors.ForbiddenError('No permission.'))
})

app.get('/customized-messages', (req, res, next) => {
  next(new RestfulErrors.BadRequestError([
    { location: 'query', param: 'uid', value: undefined, msg: RestfulErrors.message.exists('uid') }, 
    { location: 'body', param: 'name', value: undefined, msg: RestfulErrors.message.isLength('name', { min: 2, max: 255 }) }
  ]))
})

app.use(RestfulErrors.handler())

const server = http.createServer(app)
server.listen(3000)

module.exports = server

