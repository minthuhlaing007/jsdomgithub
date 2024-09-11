// conditions(if else)

// let tired = prompt("Are you tired? yes/no : ");

// if(tired === "yes"){
//   console.log("You must take a rest");
// }else if(tired === "no"){
//   console.log("go back to work");
// }else{
//   console.log("type only yes or no");
// }

// if else examples

// let product_prize = [100,200,300,100,400,500,100];

//  product_prize = product_prize.map(prize=>{
//   if(prize === 100)
//     prize -= 50;
//   return prize;
//  })

//  console.log(product_prize);

// let people = [{name:'min thu hlaing', age: 43, gender:'m'},{name:"hunny kyaw",age:55, gender:'f'},{name:"johndoe" , age:22}];

//  people = people.map(person=>{
//   if(person.gender){
//     if(person.gender === "m"){
//       person.gender = "Male";
//     }else if(person.gender=== 'f'){
//       person.gender = "Female"
//     }
//   }else{
//     person.gender = "unknown";
//   }
//   return person;
//  })

//   people = people.map(person=>{
//     if(person.gender === 'm')
//       person.gender = "Male";
//     else if(person.gender === "f")
//       person.gender = "Female";
//     else
//       person.gender= "unknown";

//     return person;
//   })
//  console.log(people);

// if else expression (ternary operator) (condition? work : work);

// let age = 43;
// let permission = age>18 ? "authorized":"unauthorized";

// console.log(permission);

// switch statement

// switch(5){
//   case 1:
//     console.log("number one");
//     break;
//   case 2:
//     console.log("number two");
//     break;
//   case 3:
//     console.log("number three");
//     break;
//   case 4:
//     console.log("number four");
//     break;
//     default:
//       console.log("i am not a number");
// }

// people = people.map(person=>{
//   switch(person.gender){
//     case "m":
//       person.gender = "Male";
//       break;
//     case "f":
//       person.gender = "Female";
//       break;
//     default:
//       person.gender = "unknown";
//   }
//   return person;
// })

// console.log(people);

// while loop

// let x = 0;
// while(x<30){
//   console.log(x);
//   x++;
// }

// let userName = ["min thu hlaing","hunny kyaw","john doe", "hlaing min than"];

// let x = 0
// while(x < userName.length){
//   console.log(userName[x]);
//   x++;
// }

// this is do while loop

// let x = 0;
// do{
//   console.log("this is do while loop" + x)
//   x++;
// }while(x<30)

// this is for loop

// for(let x=0;x<51;x++){
//   console.log("I love you in 50 time " + x)
// }

// let users = ["min thu hlaing","hunnykyaw","win thu aung","hlaing hlaing win"];

// for(let x = 0; x < users.length ; x++){
//   console.log(users[x]);
// }

// for of loop ka array ko loop pat tat nay yar mar tone tal

// let people =["min thu hlaing", "hunny kyaw","aung aung", "hlaing hlaing win","win thu aung"];

// for(person of people){
//   console.log(person);
// }

// for(key in people ){
//   console.log(people[key]);
// }

// for in loop ka object and array ko loop pat tat nay yar mar tone tal

// let user = {
//   name:"min thu hlaing",age:33,gender:"male",
// }

// for(key in user){
//   console.log(`${key} is ${user[key]}`)
// }

// scoping

// let x = 12;
// {
//   let y = 33;
//   console.log(x);
// }
// console.log(y);

// oop(object oriented programming);

// class Car {
//   wheel = 4;
//   color = "black";
//   type = "diseal";
//   drive() {
//     console.log("this car is driving");
//   }
//   move() {
//     console.log("this car is moving");
//   }
// }

//let car1 = new Car;
// console.log(car1.wheel);
// console.log(car1.color);
// console.log(car1.type);
// console.log(car1.drive())

// let car2 = new Car;
// car2.wheel = 3;
// car2.color = "red";
// car2.type = "petrol";
// car2.move();
// console.log(car2.color);
// console.log(car2.wheel);
// console.log(car2.type);

// oop examples

// class Calculator{
//   static PI = 3.14;

//   plus(n1 , n2){
//     return n1 + n2;
//   }
//   minus(n1 , n2){
//     return n1 - n2;
//   }
//   multiply(n1 , n2){
//     return n1 * n2;
//   }
//   division(n1 , n2){
//     return n1 / n2;
//   }
//   modulus(n1 , n2){
//     return n1 % n2;
//   }
// }

// let calculator = new Calculator;
// console.log(calculator.plus(1,2));

// console.log(Calculator.PI); // dar ka static ko tone htr top class ka nay tan khaw loa ya tal

// class Calculator{
//    PI = 3.142;
//    area(r){
//     return this.PI*r**2
//   }
//   volume(r,h){
//     return this.area(r)*h
//   }
// }
// let calculator= new Calculator;
// console.log(calculator.area(3));
// console.log(calculator.volume(4,3));

// static method htae mar this keyword ko tone loa ma ya buu, this keyword ko tone mae a sar object ta khu ko ti sout pee tone ka tal

// class Calculator {
//   PI = 3.14;
//   Name = "Casio";
//   area(r) {
//     return this.PI * r ** 2;
//   }
//   volume(r, h) {
//     return this.area(r) * h;
//   }
//   static info() {
//     let calculator = new Calculator();
//     console.log("i am " + calculator.Name + " calculator");
//   }
// }

// Calculator.info();

// constructor and access modifier

// class Person{
//   Name = '';
//   age = 0;
//   constructor(myName , age){
//     this.Name = myName;
//     this.age = age;
//   }
//   walk(){
//     console.log(this.Name + this.age +" is walking....");
//   }
//   run(){
//     console.log(this.Name+ this.age +" is running");
//   }
//   sleep(){
//     console.log(this.Name+this.age +" is sleeping");
//   }
// }

// user1 = new Person("min thu hlaing" , 23);
// user2 = new Person("hunny kyaw",33);

// console.log(user1.walk());
// console.log(user2.sleep());

// class Car{
//   Name = '';
//   wheels = 0;
//   constructor(name , wheels){
//     this.Name = name;
//     this.wheels = wheels;
//     this.drive();
//   }
//   drive(){
//     console.log(this.Name + " is driving");
//   }
//   getWheels(){
//     console.log(this.Name + " has " + this.wheels + " wheels");
//   }
// }

//  let toyota = new Car("toyota" , 10);

//  toyota.getWheels();

// OOP (access modifier)(public private);

// class Car{
//   Name = "lambo";
//   #hp = 599;
//   getHorsePower(){
//     console.log(this.Name + " has " + this.#hp + " hp...")
//   }
//   static drive(){
//    let motorcar = new Car;
//     console.log(motorcar.Name + " is driving")
//   }
// }
// let car = new Car;
// car.Name = "ferrari";
// car.getHorsePower();
// console.log(Car.drive())

// OOP (inheritance);

class Animal {
  age = 0;
  constructor(name,age) {
    this.Name = name;
    this.age = age
  }
  run() {
    console.log(`${this.Name} is running`);
  }
  getAge(){
    console.log(this.Name + " is " + this.age + " years old...")
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.Name} : Wooof.... Woooff...`);
  }
}

class Cat extends Animal{
  meow(){
    console.log(`${this.Name} : Meow ..... meow...`)
  }
  clean(){
    console.log(`${this.Name} is cleaning her body...`)
  }
}

let dog = new Dog("BOBO" , 3);
dog.run();
dog.bark();
dog.getAge();

let cat = new Cat("blacky" , 4);
cat.meow();
cat.clean();
cat.getAge();

//public => access anywhere
//private => access only in own class
// protected => access only in own class and child class
