// var MathModule = (function () {
//   function Add(x, y) {
//     return x + y;
//   }

//   function Product(x, y) {
//     return x * y;
//   }
//   return {
//     Addition: Add,
//   };
// })();

var MathObj = { PI: 3.14 };

var MathObj = (function (MathObj) {
  MathObj.Add = function (x, y) {
    return x + y;
  };
  MathObj.Product = function (x, y) {
    return x * y;
  };
  function Subtract(x, y) {
    return x - y;
  }

  return MathObj;
})(MathObj || {});

console.log("The multiplication is : " + MathObj.Product(40, 30));
