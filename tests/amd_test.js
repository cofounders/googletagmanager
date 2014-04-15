'use strict';

var requirejs = require('requirejs');

requirejs.config({
  baseUrl: __dirname + '/..'
});

exports['AMD compatibility'] = {

  default: function (test) {
    requirejs(['googletagmanager'], function (googletagmanager) {
      test.equal(typeof googletagmanager, 'function');
      test.done();
    });
  }

};
