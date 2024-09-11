// object ta khu mar property tway method twae par win par tl

// let mixture = new Array("min thu hlaing" , 22, 2.4, true); // array object constructor

// let mixture = ["minthuhlaing" , 33, 2.4, true]; // array literal

// console.log(mixture);

// let mixture=["dog",2,4.5,true];
// let bobo = mixture[0];

// mixture[4] = "min thu hlaing" // array htae ko data htae tar
// mixture[3] = false;// shi pee tar data ko override lote tar
// console.log(mixture);

// let fruit = ["apple", "orange"];

// fruit[2] = "mango";

// console.log(fruit[fruit.length-1]);

// Nested Array

// let arr = [
//   ["min thu hlaing", "hunny kyaw" , "john doe"] ,
//   [33,44,55]
// ]
// arr[0][2] = "alice"

// console.log(arr);

// Array spread (Spread Operator) (...)

// let data = [1,2,3];

// let data1 = [4,5,6];

// let result = [...data,...data1];

// console.log(result);

// function add(a,b){
//   console.log(a+b);
// }
// let number = [1,2]
// add(...number);

// array destructuring

// let data = ["min thu hlaing" , 20 , "bec"];

// let name = data[0];

// let age = data[1];

// let school = data[2];

// let [name,age,school] = data

// console.log(name);
// console.log(age);
// console.log(school);

// function add([a,b,c]){
//   console.log(a+b+c);
// }

// add([1,2,3]);

// Array Methods

// let users = ["minthuhlaing","alice","johndoe"];

// users.push("hunnykyaw");
// users.pop();
// users.shift();
// users.unshift("winthuaung");
// let index = users.indexOf("johndoe")
// let string = users.join(" . ");
// users.splice(1,2);

// console.log(users);

// Map Method ***

// let nums = [1,2,3,4,5,6,7,8];

//  nums = nums.map(num=>100+num)

//  console.log(nums);

// let names = ["min thu hlaing", "hunny kyaw", "john doe", "susan" , "alice"];

// names = names.map(name => "Mrs " + name);

// console.log(names);

// Array Filter Method

// let nums = [1,2,3,4,5,6];

// nums = nums.filter((num)=>{
//   return num % 2 === 0;
// })
// console.log(nums);

// let nums = [1,2,3,4,5,6];

// let number = nums.filter(multiple);

// function multiple(element){
//   return element % 2 === 0;
// }
// console.log(number);

// reduce Method

// let nums = [1,2,3,4,5,6,7,8];

// let result = nums.reduce((prev ,current)=>{
//   return prev * current
// })

// console.log(result);

// before Refactoring code

// let nums = [1,2,3,4,5,6,7,8,9];

// map
// let newArr = nums.map((num)=>{
//   return num + 100
// });
// console.log(newArr);

// filter
// let filteredNumbers = nums.filter((nums)=>{
//   return nums %2 === 0;
// })
// console.log(filteredNumbers);

// reduce

// let result = nums.reduce((prev, current)=>{
//   return prev + current;
// })
// console.log(result);

// after reformatting

// let newArr = nums.map(num => num + 10);
// console.log(newArr);

// let filteredNumbers = nums.filter(num=> num % 2 === 0);
// console.log(filteredNumbers);

// let result = nums.reduce((prev,current)=> prev * current);
// console.log(result);

// Everything is a object

// let str = new String("hello,world,my,name,is,min,thu,hlaing");
// let str = "hello";
// console.log(str.length);
//  let upperCase = str.toUpperCase();
//  console.log(upperCase);

//  let lowerCase = str.toLowerCase();
//  console.log(lowerCase.length);

//  let trim = str.trim();
//  console.log(trim.length)

// let split = str.split(",");
// console.log(split);

// let num = 12.5;
// num = num.toFixed();
// console.log( typeof num);

// let bool = new Boolean(true);
// console.log( bool.toString());

// How to create an object

// let person = {
//   name:"minthuhlaing",age:32,
//   eat: function(){
//     console.log("person is eating");
//   }, // arrow function lone wa ma tone tint par buu a to yay chin yin di lol par
//   walk (){
//     console.log("person is walking");
//   }

// }

// person.hairColor = "red";
// person.isStudent = true;
// person.drink = function(){
//   console.log("person is drinking");
// }
// console.log(person);

// dot notation po a tone myr tal

// console.log(person.name);
// console.log(person.age);

// bracket notation

// let propName = "name";
// console.log(person[propName]);
// console.log(person["name"]);
// console.log(person["age"]);

// ***this keyword

// 1 method => method's object
// 2 regular function => window
// 3 arrow function => parent's this (lexical scoping)

// let man = {
//   name: "min thu hlaing",
//   eat(){
//     console.log(person.name +" is eating");
//     console.log(person.name +" is eating");
//     console.log(person.name +" is eating");
//     console.log(person.name +" is eating");
//   }
// }
// man.eat();

// let person = {
//   name: "min thu hlaing",
//   eat(){
//     console.log(this.name +" is eating");
//   }
// }
// person.eat();

// console.log(this);

// let person = {
//   name: "min thu hlaing",
//   age: 24,
//   eat:()=>{
//     setTimeout(() => {
//       console.log(this);
//     }, 5000);
//   }
// }

// person.eat();

// object spread and object destructring and property shorthand

// object spread

// let obj1 = {
//   myName: "min thu hlaing",
//   myAge: 33,
// };
// let obj2 = {
//   myHairColor: "black",
//   isProgrammer: true,
// };

// let obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// object destructring

// let { name, age } = { name: "min thu hlaing", age: 32 };

// console.log(name);
// console.log(age);

// property shorthand

// let name = "hunny kyaw";
// let age = 455;

// let person = {name,age};
// console.log(person);

// javascript data structure;

let people = [
  { name: "min thu hlaing", age: 14, gender: "male" },
  { name: "hunny kyaw", age: 35, gender: "female" },
  { name: "john doe", age: 44, gender: "male" },
  { name: "Alice", age: 22, gender: "female" },
];
// console.log(people);

// let male = people.map(person => person.name + " hello");

// console.log(male);

// let filteredArr = people.filter(person=>person.gender==="male");

// console.log(filteredArr);

// small project

// let searchKeyword = prompt("Search person: ");

// let filteredArr = people.filter(person=>person.name.includes(searchKeyword))

// console.log(filteredArr);

// JSON (formatted String) javascript object notation

let person = '{"name":"min thu hlaing","age":334,"bool":true}';

let user = { name: "min thu hlaing", age: 34, bool: true };

console.log(JSON.stringify(user));
console.log(JSON.parse(person));
