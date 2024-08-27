class Animal {
    constructor(name, age){
     this.name = name;
     this.age = age;

    }
    move(speed){
     console.log(`this ${this.name} moves at speed of ${speed}`)
    }
}

class Rabit extends Animal{
     constructor(name, age, runSpeed){
          super(name, age);
        
        this.runSpeed = runSpeed;
     }
     run(){
          console.log(`this ${ this.name} can run`)
          super.move(this.runSpeed)
     }

}
class Fish extends Animal{
      constructor(name, age, swimSpeed){
          super(name, age);
         
          this.swimSpeed = swimSpeed;
       }
       swim(){
          console.log(`this ${ this.name} can swim`);
          super.move(this.swimSpeed)

     }
}
class Hawk extends Animal{
     constructor(name, age, flySpeed){
          super(name, age);
          
          this.flySpeed = flySpeed;
       }
       fly(){
          console.log(`this ${ this.name} can fly`);
          super.move(this.flySpeed)

     }
}

const rabbit = new Rabit('rabbit', 1, 25);
const fish = new Fish('fish', 2, 5);
const hawk = new Hawk('hawk', 3, 30);
rabbit.run();
fish.swim();
hawk.fly()


