(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['userInfo', 'FormService'];
function InfoController(userInfo, FormService) {
  var info = this;
  info.userInfo = userInfo;
  info.user = FormService.getuser();
  var item = info.userInfo;

  info.validate = true;
  if(info.userInfo == false){
  	info.validate = false;
  }
}

})();
