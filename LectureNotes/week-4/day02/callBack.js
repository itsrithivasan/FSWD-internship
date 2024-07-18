// function show(){
//     console.log("show function");
// }

// function display(show){
// console.log("Display function");
// show();
// }

// display(show)

add(5,function(addres){
sub(addres,function(subres){
    multi(subres,function(mulres){
        div(mulres,function(divres){
            console.log(divres);
        })
    })
})    
})

function add(val, callback) {
    return callback(val + 5)
}

function sub(val, callback) {
    return callback(val - 3)
}

function multi(val, callback) {
    return callback(val * 5)
}

function div(val, callback) {
    return callback(val / 7)
}

