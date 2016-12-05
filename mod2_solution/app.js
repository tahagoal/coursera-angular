(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];


function ToBuyController(ShoppingListCheckOffService){
  var buyList = this;
  buyList.buy = ShoppingListCheckOffService.getbuys();

  var itemAdder = this;
  itemAdder.addItem = function (idx) {
    ShoppingListCheckOffService.addItem(idx);
  }
}



AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var boughtList = this;
  boughtList.bought = ShoppingListCheckOffService.getboughts();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var buy = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Bismol",
      quantity: "300"
    }
  ];

  var bought = [];

  service.addItem = function (idx) {
    bought.push(buy[idx]);
    buy.splice(idx, 1);
  };

  service.getbuys = function () {
    return buy;
  };

  service.getboughts = function () {
    return bought;
  };
}


})();



// browser-sync start --server --directory --files "**/*"