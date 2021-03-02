// var obj = {
//     Name : 'Shadhin Reza',
//     Profession : 'Webdeveloper',
// };
// obj.nationality = 'Bangladeshi'
// delete obj.Name;
// obj.first = function(){return this.Profession};
// obj.first2 = function(){return this.nationality};
// var text = "";
// for(x in obj){
//     text += x + " ";
// }
// document.querySelector('#maha').innerHTML = obj.first();
// document.querySelector('#maha1').innerHTML = obj.first2();

// var pen, book, khata, mot;
// function main(){
//     pen = 'lal-pen';
//     console.log(pen + ' '+ khata);
    
//     function second(){
//         book = 'seven habits';
//         khata = 'basundhara';
//         mot = book +" "+ khata + " "+ pen;
//         return mot;
//     }
    
    
// }
// console.log(second());
// main();

// function Main(name,fatherName,motherName,age,profession,skill){
//     this.name = name;
//     this.fatherName = fatherName;
//     this.motherName = motherName;
//     this.age = age;
//     this.profession = profession;
//     this.skill = skill;
//     //this.nationality = 'Bangladeshi'
// }
// var me = new Main('Shadhin reza','abdur Rahim','Arzina Begum',28,'Webdeveloper',['Javascript','Python','C','HTML','CSS']);
// var friend = new Main('Alia Chowdhury','Fajlur Rashid','Sumaya Islam',26,'Web-designer',['HTML','Css','Bootstrap']);

// Main.prototype.nationality = 'Bangladeshi';
// Main.prototype.ami = function(){
//     return `${this.name} iam ${this.age} years old. iam a ${this.nationality}.`
// }
// console.log(friend.ami());




// console.log('My name is : '+friend.name+' my father name is : '+friend.fatherName+ ' Iam '+friend.age+' years old.'+'I have some skill '+me.skill);

// var Book = [
//     {name : 'javascript deifinative guide',author : 'Ami nijei'},
//     {name : 'javascript Objcet',author : 'Micbiel fogus'},
//     {name : 'Es6 javascript', author : 'Hayder sarker'}
// ]
// console.log(Book[2].name);

// var profession = 'Webdeveloper';
// function protom(name, age){
//     this.name = name;
//     this.age = age;
//     this.met = function(){return this.name+' '+this.age+' '+profession+' '+this.sem};
// }
// protom.prototype.sem = 'end';
// var result = new protom('Shadhin reza', 30);
// console.log(result.met());

// function printMe(){
//     document.querySelector('#maha').innerHTML = ('Hi, '+this.Email);
    
// }
// var obj1 = {
//     name : 'Shadhin reza',
//     Email : 'Tarunna147@gmail.com',
//     age : 28,
//     profession : 'Web-designer and developer',
//     sum : function(){return `${this.name},${this.Email},${this.profession}`}
// }
// var obj2 = {
//     name : 'Raisha Khan',
//     Email: 'Raisha11@gmail.com',
//     age : 22
// }

// printMe.call(obj2);

// function Person(name){
//     this.name = name;
// }
// Person.prototype.printName = function(){console.log(`Hello ${this.name}`)};

// function Student(name,id){
//     Person.call(this,name);
//     this.id = id;
// }
// Student.prototype = Object.create(Person.prototype);
// //Student.prototype.constructor = Student;
// var obj = new Student('Shadhin reza', 4000);

// function P1(a,b){
//     this.a = a;
//     this.b = b;
// }

// function P2(a,b,c){
//     P1.call(this,a,b);
//     this.c = c;
// }
// P2.prototype = Object.create(P1.prototype);

// function P3(){
//     P2.call(this,55,70,80);
// }
// P3.prototype = Object.create(P2.prototype);
// var p2 = new P2(20,10,40);
// var p3 = new P3();
 
//Today i get understood about prototype chain...

// var Person = function (name, age) {
//     this.name = name;
//     this.age = age
// }
// Person.prototype.meth = function () { return this.name + ' ' + this.age };

// var Shouvo = function(name,age, profession){
//     Person.call(this, name,age);
//     this.profession = profession;
// }
// Shouvo.prototype = Object.create(Person.prototype);
// Shouvo.prototype.constructor = Shouvo;
// Shouvo.prototype.meth2 = function () { return this.name + ' My Profession is ' + this.profession }

// var Three1 = function(name,age,skill) {
//     Person.call(this, name, age);
//     this.skill = skill;
// }
// Three1.prototype = Object.create(Person.prototype);
// Three1.prototype.constructor = Three1;
// Three1.prototype.meth3 = function () { return 'My name is ' + this.name + ' Iam '+this.age +' years old.'+ 'I have some skill '+ this.skill};


// var first = new Person('Shadhin',24);
// var ami = new Shouvo('Shadhin',24,'Webdeveloper');
// var tumi = new Three1('Shadhin reza',24,' Webdeveloper',['Javascript','Python','Java'])
// console.log(tumi.meth3());

// function main(name, age , profession){
//     this.name = name;
//     this.age = age ;
//     this.profession = profession;
// }
// main.prototype.skill = ['Java','Python'];
// var obj = new main('Shadhin reza',28,'Softwerdeveloper');
// console.log(obj.skill);

