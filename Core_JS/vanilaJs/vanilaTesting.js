//Strat Functional Programming in javascript....

//This is self invoking function....in es5
// (function(){
//     var x = 10;
//     var y = 20;
//     var rest = x + y;
//     console.log(rest);
// })
// ();

//This is a keep variable function in es5;
/* function main(a,b){
    var a = 'Saha';
    var b = 'alom';
    var x = a +" "+ b;
    return x; 
 }
 var z = main(10,20);
document.querySelector('#maha').innerHTML = z;
 */

//if we are not passing any arguments
/*function main(x,y){
    if (y == undefined) {
        y = 1;
    }
    return x - y;
}
console.log(main(8));
*/

//find the biggest number in funtion...

// function biggestNumber(){
//     var i;
//     var maxNum = -Infinity;
//     for(i = 0; i<arguments.length; i++){
//         if(arguments[i] > maxNum){
//             //console.log(maxNum = arguments[i]);
//             maxNum = arguments[i];

//         }
//     }
//     return maxNum;
// }
// console.log(biggestNumber(20,4,9,14));
//biggestNumber(2,4,5,10);

//find biggest number in Array....

// var arr = [10,30,2,50,4,400,1,3];
// var i;
// var min = Infinity;
// for(i=0; i<arr.length; i++){
//     if(arr[i] < min){
//         min = arr[i];
//     }
// }
// console.log(min);

// some array values add for result 

// function arr1(){
//     var arr = [10,4,40,20];
//     var rest = 0;
//     for(var i = 0; i <arr.length; i++){
//         rest += arr[i];

//     }
//     return rest;
// }
// console.log(arr1());


//var arr = [20,49,34,40,59,70];
// var elem1 = 0;
// arr.reduce(function(elem){
//     elem1 += elem;
//     return elem1;
// })
// console.log(elem1);

//function can stored in a variable...
// function varr(name){
//     return 'Hello '+name;

// }
// var ami = varr;
// console.log(ami());

//self invoking function...
// var sum = 20 + (function(){return 20})();
// console.log(sum);

// let mot_amount = 100;
// var total_khoroch,baki_amout;
// function khoroch(alu,morich,pownadar){
//     alu = alu;
//     morich = morich;
//     pownadar = pownadar;
//     total_khoroch = alu+morich+pownadar;
//     baki_amout = mot_amount - total_khoroch;
//     return "Obosisto Tk : "+ baki_amout;

// }
// console.log(khoroch(20,10,30));

//START Callback function with object back...
// var skill = ["Java", "js", 'Python'];
// function callback1(callback,name,age,profession,skill){
//     var result = callback(name,age,profession,skill);
//     console.log(result);
// }
// function name1(name,age,profession,skill){ 
//     return 'My name is '+name + ' Iam a '+age+' years old';
//  }
//  function prof(name,age,profession,skill){
//      return 'HI '+name + ' Iam a '+profession +' with '+ skill;
//  }
// callback1(name1, 'Shadhin reza', 26, 'Webdeveloper',skill);
// callback1(prof, 'Rased', 20, 'webdesigner',skill);

// var Obj = {
//     name : 'Shadhin reza',
//     age : 25,
//     Email : 'tarunna147@gamil.com'
// }
// function callbackEmailSend(person,callback){
//     console.log(`${person.name} his age is : ${person.age} and email is : ${person.Email}`);
//     if(person.age >=18){
//         callback(person.Email);
//     }else{console.log('You are too little')}
// }
// function sendData(Email) {
//     console.log('Eamil is send to : ' + Email);
// }
// callbackEmailSend(Obj, sendData);

//STAT HIGHER ORDER FUNCTION...
// function higherO(ami){
//     return function(tumi){
//         return ami > tumi;
//     }
// }
// var first = higherO(2);
// console.log(first(4));

// function higherO(f){
//     //return x => f(x);
//     return function(x){
//         return f(x);
//     }
// }
// //var fi = higherO(p =>p===0 ? true : false);
// var fi = higherO(function(p){
//     if(p === 0){
//         return true;
//     }else{
//         return false;
//     }
// });
// var ti = fi(0);
// console.log(ti);

// const users = [
//     {
//         name: 'Yazeed',
//         age: 25,
//         gender: 'f'
//     },
//     {
//         name: 'Sam',
//         age: 30,
//         gender: 'm'
//     },
//     {
//         name: 'Bill',
//         age: 1,
//         gender: 'm'
//     }
// ];

// const result = [];
// for (let i = 0; i < users.length; i++) {
//     if (users[i].gender === "m" && users[i].age >= 18) {
//         result.push(users[i]);
//     }
// }
// console.log(result);

//this is clousures.... and funtion return method
// function main(msg){
//      function ret(name){
//         console.log(msg + ' '+ name);

//     }
//     return ret;
// }
// var hello = main('Hello');
// hello('Shadhin reza');

// var Person = [
//     {name : 'Shadhin Reza', age : 22},
//     {name : 'Taruna Reza', age : 50},
//     {name : 'Jobayer Islam', age : 12},
//     {name : 'Motiur Rahman', age : 45},
//     {name : 'Shohag kamran', age : 33}
// ]
// Person.sort(function(a,b){
//     if (a.name > b.name) {
//         return 1;
//     } else if (a.name < b.name) {
//         return -1;
//     } else { return 0 }; 
// })

// console.log(Person);


// [30,45,63,12].forEach(elem);
// function elem(value, index, arr) {
//     console.log('Value is : ' + value + ' index is : ' + index);
// }

// var a = 200;
// function A(){
//     console.log(a);
//     var a = 400;
//     function B(){
//         console.log(a);

//     }
//     B();

// }
// A();