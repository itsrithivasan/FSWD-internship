// add(5,function(addres){
//     sub(addres,function(subres){
//         multi(subres,function(mulres){
//             div(mulres,function(divres){
//                 console.log(divres);
//             })
//         })
//     })    
//     })
    
//     function add(val, callback) {
//         return callback(val + 5)
//     }
    
//     function sub(val, callback) {
//         return callback(val - 3)
//     }
    
//     function multi(val, callback) {
//         return callback(val * 5)
//     }
    
//     function div(val, callback) {
//         return callback(val / 7)
//     }


// let myPromise = new Promise(function(resolve,reject){
//     let a = 9;
//     let b = 9;
//     if(a == b){
//         resolve()
//     }
//     else{
//         reject()
//     }
// });

// myPromise.then(() => console.log("issue is resolved"))
// .catch(()=>console.log("It is rejected"))




let myPromise = new Promise(function(resolve,reject){
    resolve(5);
});
// promise chaining
myPromise.then(add).then(sub).then(multi).then(div).then(data => console.log(data))
.catch(()=>console.log("issue is there"))

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







    