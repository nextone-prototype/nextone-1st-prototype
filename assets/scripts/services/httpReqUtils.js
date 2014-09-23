'use strict';

angular.module('frontend')
  .service('HttpReqUtil', function HttpReqUtil() {

    var API_VERSION = 'v1';

    /**
     * Make GET request.
     */
    this.get = function(url) {
      return {
        method : 'GET',
        url : API_VERSION + url
      };
    };

  });
