'use strict'

const test = require('tape')
const spok = require('spok')
const { parseHands, extractHands } = require('../../')

const fs = require('fs')
const path = require('path')
const fixtures = path.join(__dirname, '..', 'fixtures')
/* eslint-disable camelcase */
const holdem_ps = path.join(fixtures, 'omaha', 'pokerstars')

test('\nReads file', function(t) {
  const txt = fs.readFileSync(path.join(holdem_ps, 'small-sample.txt'), 'utf8')
  const res = parseHands(txt)
  res.parsedHands.forEach(r => console.log( r.info ))
  // console.log(res)
  spok(t, res.parsedHands.length, 3)

  t.end()
})
