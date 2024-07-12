// function are two types.
// parameters and without parameter


// example for without parameter
// function show(){
//     console.log('show function');
// }

// show();


// example for parameter
// function show(name){
//     // console.log('The name is', name);
//     console.log(`The name is ${name}`);
// }

// show("Rithi");

// example 3
// const a=()=>{
//     console.log("Arrow function");
// }

// a();

// example 4
// let course_name= "JS";
// const a=(cs)=>{
//     console.log(`The name of the course is ${cs}`);
// }

// a(course_name);


// example 5 immediate invoke function
// (function show(){
//     console.log("hello guys");
// })();


// const a=(()=>{
//         console.log("Arrow function");
//     })();

// console.log(a);

// const a=()=>{
//     console.log("Arrow function");
//     return "Happy";
// }

// console.log(a());

// function outer(){
//     let a=9;
//     console.log("outer function");
//     function inner(){
//         let b =10;
//         console.log("inner function",a,b);
//     }
//     // return inner
//     inner();
// }
// // outer();
// console.log(outer());


// function outer(){
//     let a=9;
//     console.log("outer function");
//     function inner(){
//         let b =10;
//         console.log("inner function",a,b);
//     }
//     return inner
//     // inner();
// }
// outer()();


// function hoisting
// show();
// function show(){
//     console.log("show function");
// }


// a();
// const a=()=>{
//         console.log("Arrow function");
//     }
  