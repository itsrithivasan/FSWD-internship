// class student{
//     constructor(){
//         this.name = "Rithivasan";
//     }
// }
// let s = new student();
// console.log(s.name);

let details = {
    name: 'Rithivasan',
    education: "B.E.,",
    skills: 'Full Stack'
}

let avenger = [
    { name: 'Peter Parker', role: 'Spiderman', color: 'Red and Blue' },
    {
        name: 'bruce',
        role: 'Batman',
        color: 'Black'
    },
    {name:'Dr.stephen strange',
        role:'Sorcerres',
        color:'Red and gold'}
]

console.log(avenger[2].name);
console.log(avenger[0].role);
console.log(avenger[1].role);
console.log("==========================");
let results = avenger.map((a)=>{
    if (a.name == "bruce") {
        console.log(a.color);
    }
})