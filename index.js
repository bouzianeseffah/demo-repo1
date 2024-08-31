class Person {
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address)

    }
}
class Address {
    constructor(street, city, country){
          this.street = street;
          this.city = city;
          this.country = country
    }
}
const person1 = new Person('boz', 30, '6926 5th', 'brooklyn', 'us');
console.log(person1.address.city)

for(const  property in person1.address){
    console.log(person1.address[property])
}