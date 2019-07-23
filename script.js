"use strict";
//task 1
function fib(n) {
    let a = 1,
      b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  
  alert( fib(3) ); 
  alert( fib(50) );

// task 2

let num;
let i;
 for (num = 1000, i = 0; num >= 50; num/2, i ++){
    num = num/2;
   }  

console.log(i);
console.log(num); 
