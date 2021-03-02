// var Rabby = (250+43+119)/3;
// var Tanvir = (113+59+228)/3;
// var Siplu = (57+116+249)/3;

// console.log(Rabby, Tanvir, Siplu);

// if(Rabby>Tanvir && Rabby>Siplu){
//     console.log('Rabby win the match and his score is '+ Rabby);    
// }else if(Tanvir> Rabby && Tanvir> Siplu){
//     console.log('Tanvir win the match and his score is ' + Tanvir);
// }else if(Siplu> Rabby && Siplu>Tanvir){
//     console.log('Tanvir win the match and his score is ' + Siplu);
// }else{
//     console.log('Match is draw...');
    
// }


// function main(name){
//     return name;
// }
// var name1 = main('shadhin reza');
// console.log(name1);

// function second(Myname,he){
//     var hes = main(Myname);
//     var issa = ('Name is '+ hes + ' his friend name is '+ he);
//     return issa;
// }
// console.log(second('Rofique', 'Rased'));

// function oratinjon(bill){
//     var percentage;
//     if(bill < 50){
//         percentage = .2;
//     }else if(bill>= 50 && bill<200){
//         percentage = .15;
//     }else{
//         percentage = .1;
//     }
//     return percentage * bill;
// }

// var bills = [124,40,400];
// var tips = [oratinjon(bills[0]),
//             oratinjon(bills[1]), 
//             oratinjon(bills[2])];
// var result = [bills[0] + tips[0],bills[1]+tips[1],bills[2]+tips[2]];
// console.log(result);
// var count = 0;
// result.forEach(function(currentValue){
//     count += currentValue;
//     return count;
// })
// console.log(count);


// var arrr = ['Shadhin reza', 'webdeveloper',20, 'Bogura',false,'designer'];
// for(var i = 0; i<arrr.length; i++){
//     if(typeof arrr[i] !== 'string') break;
//         console.log(arrr[i]);
// }


// var ShadhinReza = {
//     Name : 'Shadhin Reza',
//     age : 24,
//     profession: 'Webdeveloper',
//     bills : [124,48,268,180,42],
//     billsWithTips: function(){
//         this.tips = [];
//         this.finalValues = [];
//         var percentage;
//         for(var i = 0; i<this.bills.length; i++){
//             var bill = this.bills[i];
//             if(bill<50){
//                 percentage = .2;
//             }else if(bill >=50 && bill <=200){
//                 percentage = .15;
//             }else{
//                 percentage = .1;
//             }
//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + bill * percentage;
//         }
//     }   
// }
// ShadhinReza.billsWithTips();
// console.log(ShadhinReza);


// var Person = {
//     name : 'Shadhin reza',
//     age : 30,
//     profession: 'Webdeveloper',
//     ami : function(){
//         console.log(this.name+' '+ this.profession);
        
//     }
// }
// Person.ami();
// //how to uses one Object method uses other object method...
// var She = {
//     name : 'Arnold Brezer',
//     profession : 'Softwer Developer'
// }
// She.ami = Person.ami;
// She.ami();

// var Main = function(name,YearOfBirth, job ){
//     this.name = name;
//     this.YearOfBirth = YearOfBirth;
//     this.job = job;
// }
// Main.prototype.method1 = function(){
//     console.log(this.name + ' ' + this.job);
    
// }
// var ami = new Main('Shadhin Reza','2010','WebDeveloper');
// var john = new Main('John','2022','Teacher');
// var jane = new Main('Jane','2000','Server');
// ami.method1();
// john.method1();
// jane.method1();


// var age = 30;
// var a = 40;
// var Obj = {
//     name : 'Jane',
//     city : 'Dhaka',
//     job : 'Teacher'
// }
// function call1(a,b){
//      a = 32;
//      b.city = 'Joydebpur';
// }
// call1(a, Obj);
// console.log(a);
// console.log(Obj.job);


