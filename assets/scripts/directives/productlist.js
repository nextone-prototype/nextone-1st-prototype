'use strict';

angular.module('frontend')
  .directive('productlist', function (Product, $location) {
    return {

      templateUrl: 'views/directives/productlist.html',

      restrict: 'E',

      link: function postLink(scope, element, attrs) {

        scope.products = [];

        Product.find(function(products) {
          scope.products = products;
        });

      }

    };

  });

