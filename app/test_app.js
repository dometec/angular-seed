'use strict';

var app = angular.module('myApp', []);

app.directive('draggable', function() {
  return function(scope, element) {
    var el = element[0];
    el.draggable = true;
    el.addEventListener('dragstart', function(e) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('ID', "id: " + scope.child.name);
      return false;
    }, false);
  }
});

app.directive('droppable', function() {
  return {
    scope: {},
    link: function(scope, element) {
      // again we need the native object
      var el = element[0];
      el.addEventListener('dragover', function(e) {
        e.dataTransfer.dropEffect = 'move';
        if (e.preventDefault) e.preventDefault();
        this.classList.add('over');
        return false;
      }, false);

      el.addEventListener('dragenter', function(e) {
        this.classList.add('over');
        return false;
      }, false);

      el.addEventListener('dragleave', function(e) {
        this.classList.remove('over');
        return false;
      }, false);

      el.addEventListener('drop', function(e) {
        if (e.stopPropagation) e.stopPropagation();
        this.classList.remove('over');
        this.value = e.dataTransfer.getData('ID');
        return false;
      }, false);
    }
  }
});



var test = function() {

  var classe = new MyClass();
  var classeEstesa = new MyExtendedClass();

  var str = "var classe = new MyClass();</br>";
  str += "E' istanza di MyClass? " +  (classe instanceof MyClass) + "<br/>";
  str += "Valore della publicVariable: " + classe.publicVariable + "<br/>";
  str += "Valore della privateVariable: " + classe.privateVariable + "<br/>";
  str += "Richiamo metodo pubblico per recuperare il valore della publicVariable: " + classe.getPublicVariable() + "<br/>";
  str += "Richiamo metodo pubblico per recuperare il valore della privateVariable: " + classe.getPrivateVariable() + "<br/>";
  str += "</br>";
  str += "var classeEstesa = new MyExtendedClass()</br>";
  str += "E' istanza di MyClass? " +  (classeEstesa instanceof MyClass) + "<br/>";
  str += "E' istanza di MyExtendedClass? " +  (classeEstesa instanceof MyExtendedClass) + "<br/>";
  str += "Valore della publicVariable: " + classeEstesa.publicVariable + "<br/>";
  str += "Valore della privateVariable: " + classeEstesa.privateVariable + "<br/>";
  str += "Richiamo metodo pubblico per recuperare il valore della publicVariable: " + classeEstesa.getPublicVariable() + "<br/>";
  str += "Richiamo metodo pubblico per recuperare il valore della privateVariable: " + classeEstesa.getPrivateVariable() + "<br/>";
  str += "Valore della publicInnerVariable: " + classeEstesa.publicInnerVariable + "<br/>";
  str += "Valore della privateInnerVariable: " + classeEstesa.privateInnerVariable + "<br/>";
  str += "Richiamo metodo pubblico per recuperare il valore della publicInnerVariable: " + classeEstesa.getPublicInnerVariable() + "<br/>";
  str += "Richiamo metodo pubblico per recuperare il valore della privateInnerVariable: " + classeEstesa.getPrivateInnerVariable() + "<br/>";

  return str;
}

app.controller('AppCtrl', function ($scope, $sce) {
  $scope.child = JSONTI.mwTreeDataJson;
  $scope.teststring = $sce.trustAsHtml(test());

  var classeEstesa = new MyExtendedClass();
  $scope.callOutsideAngular = classeEstesa.executeLogic;
});
