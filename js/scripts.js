
function getTriangleArea (a, h) {
  
  if ((a <= 0) || (h <= 0)) {
    console.log("Nieprawidłowe dane");
  }
    return a * h / 2;
 }

var triangle1Area = getTriangleArea (15, 12);
var triangle2Area = getTriangleArea (-12, 12);
var triangle3Area = getTriangleArea (33, 10);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);
