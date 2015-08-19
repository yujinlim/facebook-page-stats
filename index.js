'use strict';

var Promise = require('bluebird');
var graph   = require('fbgraph');
var assert  = require('assert');
var iso3166 = require('iso-3166-2');

module.exports = function(token, pageId) {
  assert(token && pageId, 'token & page id are required');

  graph.setAccessToken(token);

  return new Promise(function(resolve, reject) {
    var count = 0;

    function handleResponse(error, response) {
      if (error) {
        reject(error);
        return;
      }

      if (response.data && response.data.length) {
        var data   = response.data.pop();
        var result = {};

        if (data.values.length > 0) {
          var stats = data.values.pop().value;
          var codes = Object.keys(stats);

          codes.forEach(function(code) {
            var country = iso3166.country(code);
            result[country.name] = stats[code];
          });
        }

        return resolve(result);
      } else {
        if (count < 10) {
          graph.get(response.paging.previous, handleResponse);
        } else {
          reject(new Error('too many tries'));
        }
      }
    }

    graph.get(pageId + '/insights/page_fans_country/lifetime', handleResponse);
  });
};
