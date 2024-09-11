// Asynchronous Javascript

// sync way a lote ta khu pee mha nout ta khu lote tar

// console.log(1);
// console.log(2);

// async way

// console.log(1);
// console.log(2);
// setTimeout(() => {
//   console.log(3);
// }, 5000);
// console.log(4);
// console.log(5);

// Promise
// resolve example
function asyn() {
  return new Promise((resolve, reject) => {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    if (result) resolve(result);
    else reject("i have error you know");
  });
}

console.log("work");
asyn()
  .then((looping) => {
    console.log(looping);
    console.log("after a async");
  })
  .catch((error) => {
    console.log(error);
  });
console.log("more important work");
console.log("most important work");

// reject example
// function asyn() {
//   return new Promise((resolve, reject) => {
//     let result = 0;
//     for (let i = 0; i < 1000000000; i++) {
//       result += i + undefined;
//     }
//     if (result) resolve(result);
//     else reject("i have error you know");
//   });
// }

// console.log("work");
// asyn()
//   .then((looping) => {
//     console.log(looping);
//     console.log("after a async");
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log("more important work");
// console.log("most important work");

// Fetch api

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => {
//     response
//       .json()


//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fetch("https://jsonplaceholder.typicode.com/todos")
// .then((response)=>{
//   return response.json();
// })
// .then((datas)=>{
//   console.log(datas);
// })
// .catch((err)=>{
//   console.log(err)
// })

// async function fetchTodos(){
//   try{
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos")
//     console.log("hii");
//     let datas = await response.json();
//     console.log(datas)
//   }catch(err){
//     console.log(err);
//   }
// }

// fetchTodos();
