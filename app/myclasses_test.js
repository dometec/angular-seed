'use strict';

describe('TiscadaApp tester', function() {

  var classe;
  var classeEstesa;

  beforeEach(function() {
    classe = new MyClass();
    classeEstesa = new MyExtendedClass();
  });

  beforeEach(module('TiscadaApp'));

  describe('Checking ExtendJS class inheritance', function() {

    it('classe Should instance of MyClass', function() {
      expect(classe instanceof MyClass).toEqual(true);
    });

    it('classes publicVariable', function() {
      expect(classe.publicVariable).toEqual('public variable - d');
    });

    it('classes privateVariable', function() {
      expect(classe.privateVariable).toBeUndefined();
    });

    it('classes getPublicVariable', function() {
      expect(classe.getPublicVariable()).toEqual('public variable - d');
    });

  });

  describe('Checking ExtendJS AngularJS iteraction', function() {

    it('Call a extenal method of an extendjs class from Angular', inject(function($controller) {

      var $scope = {};
      var appCtrl = $controller('AppCtrl', { $scope: $scope });
      expect($scope.callOutsideAngular()).toEqual("PRIVATE VARIABLE - C");

    }));

  });

});