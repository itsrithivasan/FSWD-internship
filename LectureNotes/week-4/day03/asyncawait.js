// async function show(){
//     let a = await 9;
//     console.log(a);
// }


// console.log("Hello");
// show()
// console.log("Hello Again");




const result = async ()=>{
    let a = await add(5);
    let b = await sub(a);
    let c = await multi(b);
    let d = await div(c);
    return d
}
let answer = result();
console.log(answer);

function add(val) {

    return val + 5
}

function sub(val) {
    return val - 3
}

function multi(val) {
    return val * 5
}

function div(val) {
    return val / 7
}


// callback --- callback hell 
// promise --- async await