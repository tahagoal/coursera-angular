(function () {
'use strict';

angular.module('data')
.component('itemList', {
  templateUrl: 'src/shoppinglist/templates/itemlist.template.html',
  bindings: {
    itemcat: '<'
  }
});

})();
