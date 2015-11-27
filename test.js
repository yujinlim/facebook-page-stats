'use strict';

var assert = require('assert');

describe('#facebook-page-stats', function() {
  var stats,
    token = 'CAACEdEose0cBAJtyK28QzxbQZAujrysHZAtB476LMEqyHbJgWnpYBhRuCb1qwmLW0bv0ZCe2Vkp8PITPZAYigimPK9ceVZBul2Du1PJ1GyVGRYZCkoNgIITeZAdddS99ZA8nCkuuK9tmZB9euevsyZAZCqH3lq7X0mSeZAiyRBjYwsy8G4GAAEQIA8MOsXUXJcAUh4SKgLrEcqCWJgZDZD',
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
