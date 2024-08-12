//ternary operator = condition ? codeifTrue : codeifFalse
let age = 12
let messsage = age >= 18 ? 'you are an adult' : 'you are a minor ';
console.log(messsage);


let time = 16;
let greeting = time < 12 ? 'good morning ': 'good afternoon';
console.log(greeting) 


let isStudent = false;
let message = isStudent ? 'you are a student ' : 'you are not a student';
console.log(message) 

let purchaseAmount = 99;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`your total is ${purchaseAmount - purchaseAmount * (discount / 100)}  `)


