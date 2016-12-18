(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http', '$q', '$timeout']
function MenuDataService($http, $q, $timeout) {
  var service = this;
  var items = [];

  service.getAllCategories = function(){
    return $http({
      method: "GET",
      url: 'https://davids-restaurant.herokuapp.com/categories.json'
    }).then(function (result) {
      return result.data;
      });
  };

  service.getItemsForCategory = function(categoryShortName){
    return $http({
      method: "GET",
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category='+categoryShortName
    }).then(function (result) {
      return result.data.menu_items;
      });
  };
}

})();
