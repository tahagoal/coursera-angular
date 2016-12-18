(function () {
'use strict';

angular.module('data')
.controller('CatShoppingListController', CatShoppingListController);


CatShoppingListController.$inject = ['itemcat'];
function CatShoppingListController(itemcat) {
	var listcat = this;
  	listcat.itemcat = itemcat;
}

})();
