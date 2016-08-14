/**
 * Object utiltify
 * @module asobj
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get clone () { return d(require('./clone')) },
  get deepEqual () { return d(require('./deep_equal')) },
  get shallowEqual () { return d(require('./shallow_equal')) }
}
