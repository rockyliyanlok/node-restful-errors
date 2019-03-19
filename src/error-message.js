'use strict'

const _ = require('lodash')

const theField = field => {
  return `The ${field} field`
}

const mustBe = field => {
  return `${theField(field)} must be`
}

const mustBeAValid = field => {
  return `${mustBe(field)} a valid`
}

const mustContains = field => {
  return `${theField(field)} must contains`
}

const contains = (field, seed) => {
  return `${mustContains(field)} ${seed}.`
}

const equals = (field, comparison) => {
  return `${theField(field)} must equal to ${comparison}.`
}

const isAfter = (field, date = new Date()) => {
  return `${mustBe(field)} a date after ${_.isDate(date) ? date.toISOString() : date}.`
}

const isAlpha = (field, locale = 'en-US') => {
  return `${mustBe(field)} an alpha string in '${locale}' locale.`
}

const isAlphanumeric = (field, locale = 'en-US') => {
  return `${mustBe(field)} an alphanumeric string in '${locale}' locale.`
}

const isAscii = field => {
  return `${mustBe(field)} an ascii string.`
}

const isBase64 = field => {
  return `${mustBe(field)} a base64 encoded string.`
}

const isBefore = (field, date = new Date()) => {
  return `${mustBe(field)} a date before ${_.isDate(date) ? date.toISOString() : date}.`
}

const isBoolean = field => {
  return `${mustBe(field)} a boolean.`
}

const isByteLength = (field, options = {}) => {
  if (!_.isNil(options.min) && !_.isNil(options.max)) {
    return `The length (in UTF-8 bytes) of ${field} field must between ${options.min} and ${options.max}.`
  } else if (!_.isNil(options.min)) {
    return `The length (in UTF-8 bytes) of ${field} field must be at least ${options.min}.`
  } else if (!_.isNil(options.max)) {
    return `The length (in UTF-8 bytes) of ${field} field cannot exceed ${options.max}.`
  } else {
    return `The length (in UTF-8 bytes) of ${field} field must be larger than 0.`
  }
} 

const isCreditCard = field => {
  return `${mustBeAValid(field)} credit card.`
}

const isCurrency = field => {
  return `${mustBeAValid(field)} currency amount.`
}

const isDataURI = field => {
  return `${theField(field)} must in valid data uri format.`
}

const isMagnetURI = field => {
  return `${theField(field)} must in valid magnet uri format.`
}

const isDecimal = (field, locale = 'en-US') => {
  return `${mustBe(field)} a decimal in ${locale} locale.`
}

const isDivisibleBy = (field, number) => {
  return `${mustBe(field)} a number that is divisible by ${number}.`
}

const isEmail = field => {
  return `${mustBeAValid(field)} email address.`
}

const isEmpty = field => {
  return `${mustBe(field)} a string has zero length.`
}

const isFQDN = field => {
  return `${mustBe(field)} a fully qualified domain name.`
}

const isFloat = (field, options = {}) => {
  options.locale = options.locale || 'en-US'
  if (!_.isNil(options.min) && !_.isNil(options.max)) {
    return `${mustBe(field)} a float with value between ${options.min} and ${options.max}.`
  } else if (!_.isNil(options.min)) {
    return `${mustBe(field)} a float with value at least ${options.min}.`
  } else if (!_.isNil(options.max)) {
    return `${mustBe(field)} a float with value cannot exceed ${options.max}.`
  } else {
    return `${mustBe(field)} a float in ${locale} locale.`
  }
}

const isFullWidth = field => {
  return `${mustContains(field)} a full-width character.`
}

const isHalfWidth = field => {
  return `${mustContains(field)} a half-width character.`
}

const isHash = (field, algorithm = 'md5') => {
  return `${mustBe(field)} a ${algorithm.toUpperCase()} hash.`
}

const isHexColor = field => {
  return `${mustBe(field)} a hexadecimal color.`
}

const isHexadecimal = field => {
  return `${mustBe(field)} a hexadecimal number.`
}

const isIdentityCard = field => {
  return `${mustBeAValid(field)} identity card code.`
}

const isIP = field => {
  return `${mustBe(field)} an IP (version 4 or 6).`
}

const isIPRange = field => {
  return `${mustBe(field)} an IP Range.`
}

const isISBN = field => {
  return `${mustBeAValid(field)} ISBN.`
}

const isISSN = field => {
  return `${mustBeAValid(field)} ISSN.`
}

const isISIN = field => {
  return `${mustBeAValid(field)} ISIN.`
}

const isISO8601 = field => {
  return `${mustBeAValid(field)} ISO 8601 date.`
}

const isRFC3339 = field => {
  return `${mustBeAValid(field)} RFC 3339 date.`
}

const isISO31661Alpha2 = field => {
  return `${mustBeAValid(field)} ISO 3166-1 alpha-2 officially assigned country code.`
}

const isISO31661Alpha3 = field => {
  return `${mustBeAValid(field)} ISO 3166-1 alpha-3 officially assigned country code.`
}

const isISRC = field => {
  return `${mustBe(field)} an ISRC.`
}

const isIn = (field, values) => {
  return `${theField(field)} must be one of [${Array.isArray(values) ? values.join(', ') : values}]`
}

const isInt = (field, options = {}) => {
  if (!_.isNil(options.min) && !_.isNil(options.max)) {
    return `${mustBe(field)} an integer with value between ${options.min} and ${options.max}.`
  } else if (!_.isNil(options.min)) {
    return `${mustBe(field)} an integer with value at least ${options.min}.`
  } else if (!_.isNil(options.max)) {
    return `${mustBe(field)} an integer with value cannot exceed ${options.max}.`
  } else {
    return `${mustBe(field)} an integer.`
  }
}

const isJSON = field => {
  return `${mustBeAValid(field)} JSON.`
}

const isJWT = field => {
  return `${mustBeAValid(field)} JWT token.`
}

const isLatLong = field => {
  return `${mustBeAValid(field)} latitude-longitude coordinate in the format lat,long or lat, long.`
}

const isLength = (field, options = {}) => {
  if (!_.isNil(options.min) && !_.isNil(options.max)) {
    return 'The ' + field + ' field must be between ' + options.min + ' and ' + options.max + ' characters in length.'
  } else if (!_.isNil(options.min)) {
    return 'The ' + field + ' field must be at least ' + options.min + ' characters in length.'
  } else if (!_.isNil(options.max)) {
    return 'The ' + field + ' field cannot exceed ' + options.max + ' characters in length.'
  } else if (!_.isNil(options.exact)) {
    return 'The ' + field + ' field must be ' + options.exact + ' characters in length.'
  } else {
    return 'The ' + field + ' field has invalid length.'
  }
}

const isLowercase = field => {
  return `${mustBe(field)} a lowercase string.`
}

const isMACAddress = field => {
  return `${mustBe(field)} a MAC address.`
}

const isMD5 = field => {
  return `${mustBe(field)} a MD5 hash.`
}

const isMimeType = field => {
  return `${mustBeAValid(field)} MIME type format.`
}

const isMobilePhone = (field, locale) => {
  return `${mustBe(field)} a mobile phone number in ${locale} in locale.`
}

const isMongoId = field => {
  return `${mustBeAValid(field)} hex-encoded representation of a MongoDB ObjectId.`
}

const isMultibyte = field => {
  return `${mustContains(field)} one or more multibyte chars.`
}

const isNumeric = field => {
  return `${mustContains(field)} only numbers.`
}

const isPort = field => {
  return `${mustBeAValid(field)} port number.`
}

const isPostalCode = (field, locale) => {
  return `${mustBe(field)} a postal code in ${locale} in locale.`
}

const isSurrogatePair = field => {
  return `${mustContains(field)} any surrogate pairs chars.`
}

const isURL = field => {
  return `${mustBeAValid(field)} URL.`
}

const isUUID = field => {
  return `${mustBe(field)} an UUID.`
}

const isUppercase = field => {
  return `${mustBe(field)} an uppercase string.`
}

const isVariableWidth = field => {
  return `${mustContains(field)} a mixture of full and half-width chars.`
}

const isWhitelisted = (field, whitelist) => {
  return `All characters in the ${field} field must be appeared in the whitelist [${Array.isArray(whitelist) ? whitelist.join('') : whitelist}].`
}

const matches = (field, pattern) => {
  return `${theField(field)} must matches the pattern '${pattern}'.`
}

const exists = field => {
  return `${theField(field)} is required.`
}

const eitherExists = fields => {
  return `Either the ${_.join(fields, ' field or the ')} field is required.`
}

const valid = (field, value) => {
  return `${mustContains(field)} a valid ${value || 'value'}.`
}

const conflict = (field, column, value) => {
  return `The ${field} ${(!_.isNil(column) && !_.isNil(value)) ? `(${column}=${value})` : ''} has already existed.`
}

const notFound = (field, column, value) => {
  return `The ${field} ${(!_.isNil(column) && !_.isNil(value)) ? `(${column}=${value})` : ''} is not found.`
}

module.exports = { 
  contains, 
  equals, 
  isAfter, 
  isAlpha, 
  isAlphanumeric, 
  isAscii, 
  isBase64, 
  isBefore, 
  isBoolean, 
  isByteLength, 
  isCreditCard, 
  isCurrency, 
  isDataURI, 
  isMagnetURI, 
  isDecimal, 
  isDivisibleBy, 
  isEmail, 
  isEmpty, 
  isFQDN, 
  isFloat, 
  isFullWidth, 
  isHalfWidth, 
  isHash, 
  isHexColor, 
  isHexadecimal, 
  isIdentityCard, 
  isIP, 
  isIPRange, 
  isISBN, 
  isISSN, 
  isISIN, 
  isISO8601, 
  isRFC3339, 
  isISO31661Alpha2, 
  isISO31661Alpha3, 
  isISRC, 
  isIn, 
  isInt, 
  isJSON, 
  isJWT, 
  isLatLong, 
  isLength, 
  isLowercase, 
  isMACAddress, 
  isMD5, 
  isMimeType, 
  isMobilePhone, 
  isMongoId, 
  isMultibyte, 
  isNumeric, 
  isPort, 
  isPostalCode, 
  isSurrogatePair, 
  isURL, 
  isUUID, 
  isUppercase, 
  isVariableWidth, 
  isWhitelisted, 
  matches, 
  exists, 
  eitherExists, 
  valid, 
  conflict, 
  notFound, 
}
