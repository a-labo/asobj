#!/usr/bin/env node

/**
 * Build this project.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const {runTasks} = require('ape-tasking')
const filecopy = require('filecopy')
const coz = require('coz')

runTasks('build', [
  () => coz.render([
    '.*.bud',
    'lib/.*.bud',
    'test/.*.bud'
  ]),
  () => filecopy(
    require.resolve('fbjs/lib/shallowEqual'),
    'vendor/fbjs/shallowEqual.js',
    {
      mkdirp: true
    }
  ),
], true)
