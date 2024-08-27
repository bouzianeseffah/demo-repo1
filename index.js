//inheritance

class Animal {
     alive = true;

     eat() {
          console.log(`this ${this.name} is alive`);
     }
     sleep() {
          console.log(`this ${this.name} is sleeping`);
     } 
}
class Rabbit extends Animal {
        name = 'rabbit';
        run(){
          console.log(`${this.name} is running`);
     }
}

class Fish extends Animal {
     name = 'fish';
     swim(){
          console.log(`${this.name} is swimimg`);
     }
     
}
class Hawk extends Animal{
     name = 'hawk';
     fly(){
          console.log(`${this.name} is fliyng`)
     }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new  Hawk()
console.log(rabbit.alive)
rabbit.eat()
rabbit.sleep()
rabbit.run()

console.log(fish.alive)
fish.eat()
fish.sleep()
