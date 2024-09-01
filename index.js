const fruits = [{name: 'apple', color: 'red', colories: 95 } ,
    {name: 'orange', color: 'orange', colories: 45}, 
    {name: 'banana', color: 'yellow', colories: 105}, 
    {name: 'coconut', color: 'white', colories: 159},
    {name: 'pineapple', color: 'yellow', colories: 37}]

fruits.push({name: 'grapes', color: 'purple', colories: '95'})        
fruits.forEach(fruit => console.log(fruit.name))
const fruitNames = fruits.map(fruit => fruit.name )
const fruitColors = fruits.map(fruit => fruit.color )

console.log(fruitNames);
console.log(fruitColors);

const yellow = fruits.filter(fruit => fruit.color === 'yellow');

console.log(yellow)

const lowCalFruits = fruits.filter(fruit => fruit.colories < 100);

console.log(lowCalFruits)

const maxFruits = fruits.reduce((max, fruit) => 
                 fruit.colories > max.colories ?
                 fruit : max)

console.log(maxFruits)                 
                 
const minFruits = fruits.reduce((min, fruit) => 
    fruit.colories < min.colories ?
    fruit : min)

console.log(minFruits)    

