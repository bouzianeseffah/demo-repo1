//function declaration 

//function hello() {
 //    console.log('hello')
//}
//function expressions

//const hello = function() {
 //    console.log('hello')
//}
//hello()
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element) {
     return Math.pow(element, 3)
});
const isEven = numbers.filter(function(element){
     return element % 2 === 0;
})
console.log(isEven)
const isOdd = numbers.filter(function(element){
     return element % 2 !== 0;
})
console.log(isOdd)
