/**
 * Object utiltify
 * @module asobj
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get clone () { return d(require('./clone')) }
}
