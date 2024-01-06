//return object > function
function createcircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}
const circle1 = createcircle(1);
console.log(circle1);
const circle2 = createcircle(4);
console.log(circle2);


// this...
function Circle(radius1) {
  this.rad = radius1;
  this.draw = function () {
    console.log("draw");
  };
}
const circle3 = new Circle(45);
console.log(circle3);

//find

  const fire =[ {
 tools: 'rover',
 finn: 'roll',
 mall: 'today',
 forum: 'dent'
  }
]  
const toll = fire.find(toll => fire.tools = 'rover')
console.log(toll);