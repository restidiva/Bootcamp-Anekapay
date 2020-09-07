function Foo() {
    this.a = 1;
    this.b = 2;
    this.c = function() {
      return this.a + this.b;
    }
  }
  
  var foo = new Foo();
  console.log(foo.c());
  console.log(foo);
  
  function Bar() {
    this.a = 1;
    this.b = 2;
  }
  
  Bar.prototype.c = function() {
    return this.a + this.b;
  }
  
  var bar = new Bar();
  console.log(bar.c());
  console.log(bar);