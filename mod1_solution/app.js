(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController ($scope, $filter) {
	$scope.items = "";
	$scope.message = "";

	$scope.messageShow = function (){
		var number = $scope.items.split(',');
		if($scope.items == "")
			$scope.message = "Please enter data first";
		else if(number.length<=3 && number.length>0)
			$scope.message = "Enjoy!";
		else if(number.length>3)
			$scope.message =  "Too much!";
	};
}
 
})();


// browser-sync start --server --directory --files "**/*"