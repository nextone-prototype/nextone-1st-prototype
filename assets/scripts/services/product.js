'use strict';

angular.module('frontend')
  .service('Product', function Product($http, HttpReqUtil) {

    /**
     * Get all products
     */
    this.find = function(callback) {

      $http(HttpReqUtil.get('/product'))
        .success(function(data) {
          callback(data);
        })
        .error(function(data, status) {
          console.log(status);
          callback([]);
        });
    };

  });
