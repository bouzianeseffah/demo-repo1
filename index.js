//Object


const person1 = {
     fistName: 'boz',
     lastName: 'sef',
     age: 32,
     isEmployed: true,
     sayHello: function(){console.log('hi')},
}

const person2= {
     fistName: 'fat',
     lastName: 'bkr',
     age: 22,
     isEmployed: false,
     eat: () => console.log('hello')
}
console.log(person1.fistName)
console.log(person1.lastName)
console.log(person1.age)
console.log(person1.isEmployed)
person1.sayHello()
console.log(person2.fistName)
console.log(person2.lastName)
console.log(person2.age)
console.log(person2.isEmployed)
person2.eat()