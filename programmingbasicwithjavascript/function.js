// Functions

// shopping
// console.log("go to shop");
// console.log("buy a product");
// console.log("go back home");

// function shopping(product){
//   console.log("go to shop");
//   console.log(`buy a ${product}`);
//   console.log("go back home");
// }
// shopping("pen");
// shopping("eraser");

// function add(num1 , num2){
//  console.log(num1 + num2);
//   return num1 + num2;
// }
// console.log(add(1,2));
// let result = add(1,2);//function khaw tone tat nay yar ko return pyan yout lar tar
// console.log(result + 3);

// function sayName(name, age) {
//   // console.log(`My name is ${name},and i am ${age} years old`);

//   return `My name is ${name} and i am ${age} years old`;
// }
// let greet = sayName("min thu haling", 20);

// console.log(greet);


// function ko return ma pyan htr buu so yin auto undefined pyan pay par tl

// function sayName(name){
// //  return statement par ma lar buu so yin 
// }
// let greet = sayName("minthuhlaing");
// console.log(greet); // undefined


// function calculateAge(birthyear){
//   let age = 2024-birthyear;
//   return `I am ${age} years old`;
// }
// let myAge = calculateAge(2000);
// console.log(myAge);



// default parameter
// function add(a=0,b=0){
//   console.log(a + b);
// }; // (a,b) is a parameter , (b=0) is a default parameter

// add(2);


// rest parameter

// function test(a,b,...c){
//   console.log(a,b,c);
// }
// test(1,2,3,4,5,6,7);// a = 1,b = 2,c = [3,4,5,6,7]; 


// function statement

  // statement();

  // function statement(){
  //   console.log("This is function statement");
  // }

  // function statement ka ma ti sout khin kyo run loa ya tal 


// function expression

// let expression = function(){
//   console.log("This is function expression");
// }
// expression();

// function expression ka ma tii sout khin run loa ma ya buu


// Callback Function part one

// function name(name1 , fun){
//   let result =  fun(name1);
//   console.log(result);
// }
// name('hunny kyaw', function(name1){
//   return `My name is ${name1} i am 30 years old`
// })


// Callback function part two

// function twice(num , fun){
//   let result = fun(num) * 2;
//   console.log(result);
// }
// twice(3 , function(num){
//   return num + 5;
// });


// function twice(num , fun){
//    let result = fun(num) * 2 ;
//    console.log(`The value of number is plus one and then twice is ` + result);
// }

// twice(2,function(num){
//   return num + 1;
// })


//  Arrow Function

// function sayMyName(){
//   return "My name is min thu hlaing";
// } 

// let greet = sayMyName();
// console.log(greet);

// let greet = ()=>{
//   return 'My name is min thu hlaing';
// }


  // let greet = () => "my name is min thu hlaing";

  // let greet = name => `My name is ${name}`;
  
  // console.log(greet("Hunny Kyaw"));

  // let twice = num => num*2;
  
  // console.log(twice(4));
