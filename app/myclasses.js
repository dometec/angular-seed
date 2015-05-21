/**
 * Created by dometec on 21/05/15.
 */

var MyClass = Class.extend(function(){

  //This is a private variable.
  var privateVariable = "private variable";

  //this is a public variable.
  this.publicVariable = "public variable";

  //Classes can have constructors
  this.constructor = function(){
    privateVariable += " - c";
    this.publicVariable += " - d";
  };

  this.getPublicVariable = function() {
    return this.publicVariable;
  }

  this.getPrivateVariable = function() {
    return privateVariable;
  }

});

var MyExtendedClass = MyClass.extend(function(){

  //This is a private variable.
  var privateInnerVariable = "private variable";

  //this is a public variable.
  this.publicInnerVariable = "public variable";

  //Classes can have constructors
  this.constructor = function(){
    //Execute the constructor of the class we extended.
    this.super();
    privateInnerVariable += " - c";
    this.publicInnerVariable += " - d";
  };

  this.getPublicInnerVariable = function() {
    return this.publicInnerVariable;
  }

  this.getPrivateInnerVariable = function() {
    return privateInnerVariable;
  }

  this.executeLogic = function() {
    return this.getPrivateVariable().toUpperCase();
  }

});
