function Circle(radius) {
    this.radius = radius;
  }
  
  Circle.prototype = {
    phi: 3.14,
    area: function() {
      return this.phi * Math.pow(this.radius, 2);
    },
  }
  
  function Triangle(base, height) {
    this.base = base;
    this.height = height;
  }
  
  Triangle.prototype.area = function() {
    return 0.5 * this.base * this.height;
  }
  
  var circle = new Circle(5);
  var triangle = new Triangle(4, 7);
  
  console.log(circle.area());
  console.log(triangle.area());