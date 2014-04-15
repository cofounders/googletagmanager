'use strict';

exports['CommonJS compatibility'] = {

  default: function (test) {
    test.equal(typeof require('../googletagmanager'), 'function');
    test.done();
  }

};
