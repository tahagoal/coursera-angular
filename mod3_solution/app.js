(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('listItemDescription', ListItemDescription)
.directive('foundItems', FoundItems);

function FoundItems() {
  var ddo = {
    templateUrl: 'listItem.html'
  };

  return ddo;
}

function ListItemDescription() {
  var ddo = {
    template: '(' + '{{ item.short_name }}' + ') ' +  '{{ item.name }}' + ', des:' + '{{ item.description }}'
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;

  list.searchTerm = "";
  list.items = [];
  list.errorMessage = "Nothing Found!";

  list.getMatchedMenuItems = function () {
    MenuSearchService.getMatchedMenuItems(this.searchTerm);
    list.items = MenuSearchService.getItems();
  };

  list.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  };

}


MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  
  var service = this;
  var foundItems = [];

  service.getMatchedMenuItems = function(searchTerm) {
    foundItems = [];

    return $http({
      method: "GET",
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
    }).then(function (result) {
      var result2 = result.data.menu_items;
      for (var i = 0; i < result2.length; i++) {
        var name = result2[i].description;
        if (name.toLowerCase().indexOf(searchTerm) !== -1) {
          foundItems.push(result2[i]);
        }
      }

      return foundItems;
    });

  }

  service.getItems = function () {
    return foundItems;
  };

  service.removeItem = function (itemIndex) {
    foundItems.splice(itemIndex, 1);
  };

}

})();



// browser-sync start --server --directory --files "**/*"