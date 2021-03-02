import { add, div } from './math';
// let name = 'Shadhin reza';
// let email = 'tarunna147@gmail.com';

// let Obj = {
//     name,
//     email,
//     print() {return `${this.name} ${this.email}`}
// }
// console.log(Obj.print());

// let arr = [20,40,50,330,900,700];
// let [a,,c,,e,f] = arr;
// console.log(c);

// var obj = {
//     name : 'Shadhin reza',
//     age : 22,
//     email : 'tarunna147@gmail.com',
//     met() { return `${this.name} ${this.age} ${this.email}`}
// }
// var sys = (a,b) => {
//     console.log(a * b);
//     setTimeout(() => console.log(obj.met()),1000)

// }
// sys(2,4);

// var arr = [22,55,66];
// function ami(a,b){
//     console.log(a+b);
//     function c(){
//         console.log(arr[2] + b);
//         setTimeout(function(){console.log(arr[0])},1000)
//     }
//     c(); 
// }
// ami(4,6);

// let Obj = {
//     name : 'Abrar Fahad',
//     age : 22,
//     profession : 'Student',
//     stu : function(){
//         setTimeout(() => {
//         console.log(`${this.name} ${this.profession}`);
//     },1000);
// }
// }
// Obj.stu();

// let Objdes = {
//     name : 'Shadhin Reza',
//     profession : 'Webdeveloper',
//     email : 'tarunna147@gmail.com'
// }
// let {name, profession,email} = Objdes;
// function distruc({name,profession,email}){
//     console.log(`My name is : ${name}, Iam a : ${profession}, My email is : ${email}`);
// }
// distruc({email,name,profession});

// var name = 'shadhin';
// var age = 20;
// console.log(name,age);

// var ami = (a=1,b) => console.log(a * b);
// ami(12);

//Rest Operator in ES6...
// let sum = (...num) => {
//     let [a,b,c,d] = num;
//     return b * d;
// }
// console.log(sum(2,3,4,5));
//Or
//ES5 Rest Operator...
// function sum(...num){
//     let [a,b,c,d] = num;
//     return a + b;
// }
// console.log(sum(5,7,8,9));

// let mult = (...num) =>{
//     let gun = num.reduce((a,b) =>{return a + b});
//     return gun;
// }
// console.log(mult(20,10,30,50));

// function add(...args) {
//     let result = 0;
//     for (let arg of args)
//     result += arg;
//     console.log(result);
// }
// let first = parseFloat(prompt('Enter your num'));
// let first2 = parseFloat(prompt('Enter your num'));
// add(first,first2) // returns user input
// add(1, 2) // returns 3
// add(1, 2, 3, 4, 5) // returns 15

// const arr = [1, 2, 3];
// const arr2 = [...arr,5,6];
// console.log(arr2[4]);

// let Obj1 = {
//     name : 'Shadhin reza',
//     age : 22
// }
// let Obj2 = {
//     name : 'Shadhin Ahmed',
//     age2 : 18
// }
// let amount = {...Obj1, ...Obj2};
// console.log(amount);