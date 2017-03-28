angular.module('MyApp')
  .controller('HomeCtrl', function($timeout) {
    var vm = this;
    vm.processing = true;

    $timeout(function(){
      vm.processing = false;
    }, 800);
  });
