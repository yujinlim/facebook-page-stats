'use strict';

var assert = require('assert');

describe('#facebook-page-stats', function() {
  var stats,
    token = 'CAACEdEose0cBAAaKUcVhAocJBZBYOuWHSRvFzFSxKKkJyzgYpnX9YHmKclQXmm12V8yPiBcgA3ZB1EczO2uZCxq9f2QrZCNaxIirLpi02AqqnZCmvvWSC1qqvimBEWE0j0lDEq5ZClsb12U9zqGGyhJmZC5ZCf8Mssd6J8IFMZCywCJrDoxoZCPRJdKQtibbPaWk3sLbqFZA9SmCwZDZD',
    pageId = 'Engineering'; // facebook page stats

  before(function() {
    stats = require('./');
  });

  it('should return list of fans by country', function(done) {
    stats(token, pageId)
      .then(function(response) {
        assert(response);
        done();
      })
      .catch(done);
  });

  it('should throws error', function() {
    assert.throws(stats, /token & page id are required/);
  });

  it('should fails on api call', function(done) {
    stats(token, 'test-facebook-page')
      .then(function() {
        done('should fail');
      })
      .catch(function(err) {
        assert(err);
        done();
      });
  });
});
