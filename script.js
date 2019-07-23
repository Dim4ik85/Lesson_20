"use strict";
/*task 1
function fib(n) {
    var a = 1,
      b = 1;
    for (var i = 3; i <= n; i++) {
      var c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  
  alert( fib(3) ); 
  alert( fib(50) );
*/
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  
  alert( fib(3) ); // 2
  alert( fib(7) ); // 13


// task 2

let num;
let i;
 for (num = 1000, i = 0; num >= 50; num/2, i ++){
    num = num/2;
   }  

console.log(i);
console.log(num); 
