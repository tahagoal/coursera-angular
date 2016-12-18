(function () {
'use strict';

angular.module('data')
.controller('MainShoppingListController', MainShoppingListController);


MainShoppingListController.$inject = ['items'];
function MainShoppingListController(items) {
	var list = this;
  	list.items = items;
}

})();
