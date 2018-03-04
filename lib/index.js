/**
 * Object utility
 * @module asobj
 */

'use strict'

const d = (module) => module && module.default || module

const assign = d(require('./assign'))
const cleanup = d(require('./cleanup'))
const clone = d(require('./clone'))
const deepEqual = d(require('./deep_equal'))
const dig = d(require('./dig'))
const index = d(require('./index'))
const keyFor = d(require('./key_for'))
const retrieve = d(require('./retrieve'))
const shallowEqual = d(require('./shallow_equal'))

module.exports = {
  assign,
  cleanup,
  clone,
  deepEqual,
  dig,
  index,
  keyFor,
  retrieve,
  shallowEqual
}
