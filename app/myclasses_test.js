'use strict';

describe('Checking ExtendJS class inheritance', function() {

  var classe;
  var classeEstesa;

  beforeEach(function() {
    classe = new MyClass();
    classeEstesa = new MyExtendedClass();
  });

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