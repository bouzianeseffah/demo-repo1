class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFistName) {
        if(typeof newFistName === 'string' && newFistName.length > 0){
             this._firstName = newFistName;
        
        }
        else{
            console.error('first name must be a non empty strring')
        }
    }
    set lastName(newLastName) {
        if(typeof newLastName === 'string' && newLastName.length > 0){
             this._LastName= newLastName;
        
        }
        else{
            console.error('last name must be a non empty strring')
        }
    }
    set age(newAge) {
        if(typeof newAge === 'number' && newAge >= 0) {
          this._age = newAge;
        }
        else{
            console.error('age must be a non negative number')
        }
    }
    get firstName() {
        return this._firstName
    }
    get lastName() {
        return this._LastName
    }
    get fullName(){
        return this._firstName + ' ' + this._LastName;
    }
    get age(){
        return this._age
    }
    
}
const person = new Person(' boz', 'sef', 40)

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);


