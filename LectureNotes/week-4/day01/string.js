// let fname = "Peter";
// let lname = 'parker';
// console.log(fname,lname);

// let fruits = "apple,banana, mango, cherry";
// let results = fruits.slice(-10);
// let results = fruits.slice(5,8);

// let results = fruits.substring(-8); // it consider negative values us 0.
// console.log(results);

// let fname = "          peter         ";
// console.log(fname.length);
// let results = fname.trim();
// console.log(results.length);

// let a = 9;
// let b = "9";

// if (a == b){ // it checks whether value is same or not.
//     console.log("true");
// }else{
//     console.log("false");
// }

// if (a === b){  // it checks whether Datatype is same or not.
//     console.log("true");
// }else{
//     console.log("false");
// }

let name1 = "Peter"; // string literals
let name2 = "Peter"; // string literals
let name3 = new String("Peter");  // string objects it checks memory address when it compared with literals.
let name4 = new String("Peter");  // string objects

if(name1 === name4){
    console.log("true");
}else{
    console.log("false");
}

