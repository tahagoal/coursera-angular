(function () {
"use strict";

angular.module('public')
.service('FormService', FormService);


FormService.$inject = ['$http', 'ApiPath'];
function FormService($http, ApiPath) {
  var service = this;

  var user;

  service.getitems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data.menu_items;
    });
  };

  service.adduser = function (newuser) {
    user = newuser;
  };

  service.getuser = function(){
    return user;
  };

  service.itemfav = function(){
    if(user){
      return $http.get(ApiPath + '/menu_items/' + user.short_name + '.json').then(function (response) {
        return response.data;
      });
    }
    else
      return false;
  
  }
}
})();