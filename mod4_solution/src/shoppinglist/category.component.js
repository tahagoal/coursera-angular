(function () {
'use strict';

angular.module('data')
.component('categoryList', {
  templateUrl: 'src/shoppinglist/templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();
