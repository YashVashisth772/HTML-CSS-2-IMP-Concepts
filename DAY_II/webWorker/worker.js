// 1. No access to document/window
// 2. No access to global variable from main thread
// 3. No access to localStorage | sessionStorage, but to IndexedDB
// 4. Access to XMLHttpRequest object | fetch (AJAX)

// console.log(this); // DedicatedWorkerGlobalScope
var largeArray = [];
onmessage = function (e) {
  console.log("Received data from Main thread : ", e.data);
  for (let i = 0; i < 8000; i++) {
    largeArray[i] = [];
    for (let j = 0; j < 7000; j++) {
      largeArray[i][j] = Math.random();
    }
  }
  postMessage(largeArray[3000][3000]);
  largeArray = null; // to free the memory
};

// var largeArray = [];
// function HeavyLifting() {
//   for (let i = 0; i < 8000; i++) {
//     largeArray[i] = [];
//     for (let j = 0; j < 7000; j++) {
//       largeArray[i][j] = Math.random();
//     }
//   }
//   alert(largeArray[3000][3000]);
// }
