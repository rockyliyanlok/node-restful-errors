'use strict'

const decamelize = require('decamelize')
const HttpStatus = require('http-status-codes')
const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const app = require('./app')
chai.use(chaiHttp)

const RestfulErrors = require('../src')

const getGeneralError = code => { 
  return decamelize(HttpStatus.getStatusText(code).replace(/\s/g, ''))
}

const getGeneralErrorDescription = code => {
  return `${HttpStatus.getStatusText(code)}.`
}

const checkGeneralError = async (response, code) => {
  const { body } = response
  expect(response).to.have.status(code)
  expect(body).to.have.property('code')
  expect(body).to.have.property('error')
  expect(body).to.have.property('error_description')
  expect(body.code).to.equal(code)
  expect(body.error).to.equal(getGeneralError(code))
  expect(body.error_description).to.equal(getGeneralErrorDescription(code))
}

describe('general restful errors', () => {

  it(`should returns general BadRequestError`, async () => {
    await checkGeneralError(await chai.request(app).get('/bad-request'), HttpStatus.BAD_REQUEST)
  })

  it(`should returns general UnauthorizedError`, async () => {
    await checkGeneralError(await chai.request(app).get('/unauthorized'), HttpStatus.UNAUTHORIZED)
  })

  it(`should returns general ForbiddenError`, async () => {
    await checkGeneralError(await chai.request(app).get('/forbidden'), HttpStatus.FORBIDDEN)
  })

  it(`should returns general NotFoundError`, async () => {
    await checkGeneralError(await chai.request(app).get('/not-found'), HttpStatus.NOT_FOUND)
  })

  it(`should returns general MethodNotAllowedError`, async () => {
    await checkGeneralError(await chai.request(app).get('/method-not-allowed'), HttpStatus.METHOD_NOT_ALLOWED)
  })

  it(`should returns general ConflictError`, async () => {
    await checkGeneralError(await chai.request(app).get('/conflict'), HttpStatus.CONFLICT)
  })

  it(`should returns general GoneError`, async () => {
    await checkGeneralError(await chai.request(app).get('/gone'), HttpStatus.GONE)
  })

  it(`should returns general RequestEntityTooLargeError`, async () => {
    await checkGeneralError(await chai.request(app).get('/request-entity-too-large'), HttpStatus.REQUEST_TOO_LONG)
  })

  it(`should returns general UnsupportedMediaTypeError`, async () => {
    await checkGeneralError(await chai.request(app).get('/unsupported-media-type'), HttpStatus.UNSUPPORTED_MEDIA_TYPE)
  })

  it(`should returns general UnprocessableEntityError`, async () => {
    await checkGeneralError(await chai.request(app).get('/unprocessable-entity'), HttpStatus.UNPROCESSABLE_ENTITY)
  })

  it(`should returns general TooManyRequestsError`, async () => {
    await checkGeneralError(await chai.request(app).get('/too-many-requests'), HttpStatus.TOO_MANY_REQUESTS)
  })

  it(`should returns general InternalServerError`, async () => {
    await checkGeneralError(await chai.request(app).get('/internal-server'), HttpStatus.INTERNAL_SERVER_ERROR)
  })

  it(`should returns general ServiceUnavailableError`, async () => {
    await checkGeneralError(await chai.request(app).get('/service-unavailable'), HttpStatus.SERVICE_UNAVAILABLE)
  })

})

describe('restful error with customized message', () => {

  it(`should returns general ForbiddenError with customized string message`, async () => {
    const response = await chai.request(app).get('/no-permission')
    const { body } = response
    const code = HttpStatus.FORBIDDEN
    expect(response).to.have.status(code)
    expect(body).to.have.property('code')
    expect(body).to.have.property('error')
    expect(body).to.have.property('error_description')
    expect(body.code).to.equal(code)
    expect(body.error).to.equal(getGeneralError(code))
    expect(body.error_description).to.equal('No permission.')
  })

  it(`should returns general BadRequestError with customized messages`, async () => {
    const response = await chai.request(app).get('/customized-messages')
    const { body } = response
    const code = HttpStatus.BAD_REQUEST
    expect(response).to.have.status(code)
    expect(body).to.have.property('code')
    expect(body).to.have.property('error')
    expect(body).to.have.property('error_description')
    expect(body.code).to.equal(code)
    expect(body.error).to.equal(getGeneralError(code))
    expect(body.error_description).to.equal([
      RestfulErrors.message.exists('uid'), 
      RestfulErrors.message.isLength('name', { min: 2, max: 255 })
    ].join(' '))
  })

})
