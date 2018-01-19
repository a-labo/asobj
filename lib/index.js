/**
 * Object utiltify
 * @module asobj
 */

'use strict'

const d = (module) => module && module.default || module

const assign = d(require('./assign'))
const cleanup = d(require('./cleanup'))
const clone = d(require('./clone'))
const deepEqual = d(require('./deep_equal'))
const dig = d(require('./dig'))
const retrieve = d(require('./retrieve'))
const shallowEqual = d(require('./shallow_equal'))

module.exports = {
  assign,
  cleanup,
  clone,
  deepEqual,
  dig,
  retrieve,
  shallowEqual
}


exports.assign = assign
exports.cleanup = cleanup
exports.clone = clone
exports.deepEqual = deepEqual
exports.dig = dig
exports.retrieve = retrieve
exports.shallowEqual = shallowEqual
