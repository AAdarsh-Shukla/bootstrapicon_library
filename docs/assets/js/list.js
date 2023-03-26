/* global List:false */

(function () {
  'use strict'

  new List('icons-body', {
    valueNames: [
      'name', {
        data: [
          'tags',
          'categories'
        ]
      }
    ],
    searchDelay: 250,
    indexAsync: true
  })
})()
