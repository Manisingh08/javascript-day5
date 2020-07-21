class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = []
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }


}

let user1 = new User('mani',25,'manisinghrawat8513@gmail.com')
let user2 = new User('rahul',24,'jasdfhasdg@gmail.com')

user1.login().addCoins().addCoins().logout();

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }


}

let mod = new Moderator('hathi',242,'hathi@gmail.com','Moderator');
let users = [user1,user2];

mod.addCoins(user1);
console.log(users);

class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }
}
let admin = new Admin('nhi',250,'nahi@gmail.com');

users.forEach(element => {
    console.log(element);
})