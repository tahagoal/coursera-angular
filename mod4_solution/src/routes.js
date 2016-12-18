(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/shoppinglist/templates/home.template.html',
  })

  .state('catList', {
    url: '/main-list',
    templateUrl: 'src/shoppinglist/templates/category.template.html',
    controller: 'MainShoppingListController as list',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('item', {
    url: '/item/{short_name}',
    templateUrl: 'src/shoppinglist/templates/item.template.html',
    controller: 'CatShoppingListController as listcat',
    resolve: {
      itemcat: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
                  return MenuDataService.getItemsForCategory($stateParams.short_name);
            }]
    },
    params: {
      short_name: null
    }
  });

}

})();
