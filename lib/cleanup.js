/**
 * Delete undefined properties.
 * @function cleanup
 * @param {Object} values - Values to cleanup
 * @param {Object} [options] - Optional settings
 * @param {boolean} [options.delNull=false] - Should delete null property
 * @returns {Object} - Clean value
 */
'use strict'

/** @lends cleanup */
function cleanup (values, options = {}) {
  const {delNull = false} = options
  for (const name of Object.keys(values)) {
    const value = values[name]
    const shouldClean = typeof value === 'undefined' || (delNull && value === null)
    if (shouldClean) {
      delete values[name]
    }
  }
  return values
}

module.exports = cleanup
