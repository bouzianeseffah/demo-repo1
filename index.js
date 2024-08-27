// static


class User {
     static userCount = 0;
     constructor(userName) {
          this.userName = userName;
          User.userCount++
     }
     static getUserCount (){
          console.log(`there are ${User.userCount} users online`)
     }
     sayHello(){
          console.log(`hello, my user name is ${this.userName}`)
     }
}
const user1 = new User('boz');
const user2 = new User('anl');
const user3 = new User('ahm');
user1.sayHello();
user2.sayHello();
user3.sayHello()
User.getUserCount()




console.log(User.userCount)

