(function () {
'use strict';

angular.module('MenuApp')
.component('menuApp', {
  templateUrl: 'src/shoppinglist/templates/shoppinglist.template.html',
  bindings: {
    items: '<'
  }
});

})();
