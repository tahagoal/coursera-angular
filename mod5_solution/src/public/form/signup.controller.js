(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['AllItems','FormService'];
function SignUpController(AllItems, FormService) {
  var $ctrl = this;
  $ctrl.user = {firstname:"", lastname:"", email:"", short_name:"", phone:""};
  $ctrl.AllItems = AllItems.menu_items;
  $ctrl.valid = true;

  $ctrl.submit = function () {
    $ctrl.completed = true;
    FormService.adduser($ctrl.user);

    if($ctrl.list)
    	$ctrl.valid = true;
    
    else
    	$ctrl.valid = false;
  }; 
}


})();