//Arrow functions

const numbers = [1, 2, 3, 4, 5, 6]


const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);

const cubes = numbers.map((element) => Math.pow(element, 3));
console.log(cubes);

const isOdd = numbers.filter((element) => element % 2 === 0);
console.log(isOdd);

const isEven = numbers.filter((element) => element % 2 !== 0);
console.log(isEven);

const total = numbers.reduce((accumulator, element) => accumulator + element )
console.log(total)
