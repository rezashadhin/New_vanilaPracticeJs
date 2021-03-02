// const hello = document.querySelector('h2');
// hello.textContent = '<small>Hello World</small>';

// let myImg = document.querySelector('img');
// myImg.style.cursor = 'pointer';
// myImg.addEventListener('click',function(){
//     let imgsrc = myImg.getAttribute('src');
//     if (imgsrc === 'images/adult.jpg'){
//         myImg.setAttribute('src','images/back.jpg');
//     }else{
//         myImg.setAttribute('src','images/adult.jpg');
//     }
// })

// let message = document.querySelector('h4');
// let btn = document.querySelector('button');

// function addNameUser(){
//     let myMessage = prompt('Enter your name please!');
//     localStorage.setItem('name', myMessage);
//     //message.innerHTML ='User name is: '+ myMessage;
//     if(!myMessage == null){
//         addNameUser();
//     }
//     else if (!localStorage.getItem('name')){
//         addNameUser();
//     } else {
//         let storedName = localStorage.getItem('name');
//         message.innerHTML = 'Your name is : ' + storedName;
//     }
// }

// btn.addEventListener('click',function(){
//     addNameUser();
// })

// let randomNumber = Math.floor(Math.random() * 100) + 1;

// const guesses = document.querySelector('.guesses');
// const lastResult = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');

// const guessSubmit = document.querySelector('.guessSubmit');
// const guessField = document.querySelector('.guessField');

// let guessCount = 1;
// let resetButton;

// function checkGame(){
//     let userField = Number(guessField.value);
//     if(guessCount ===1){
//         guesses.innerHTML = 'Previous Think You : ';
//     }
//     guesses.innerHTML += userField + ' ';
//     if(userField === randomNumber){
//         lastResult.innerHTML = 'Congratulation! You have to Match';
//         lastResult.style.backgroundColor = 'green';
//         lowOrHi.innerHTML = '';
//         setGameOver();
//     }else if(guessCount === 10){
//         lastResult.innerHTML = 'Game Over';
//         setGameOver();
//     }else{
//         lastResult.innerHTML = 'Wrong!';
//         lastResult.style.backgroundColor = 'red';
//         if(userField < randomNumber){
//             lowOrHi.innerHTML ='Number is small';
//         }else if(userField > randomNumber){
//             lowOrHi.innerHTML = 'Number is too big';
//         }

//     }

//     guessCount++;
//     guessField.value = '';
// }

// guessSubmit.addEventListener('click', checkGame);

// function setGameOver() {
//     guessField.disabled = true;
//     guessSubmit.disabled = true;
//     resetButton = document.createElement('button');
//     resetButton.textContent = 'Start new game';
//     document.body.appendChild(resetButton);
//     resetButton.addEventListener('click', resetGame);
// }
// function resetGame() {
//     guessCount = 1;

//     const resetParas = document.querySelectorAll('.resultParas p');
//     for (let i = 0; i < resetParas.length; i++) {
//         resetParas[i].textContent = '';
//     }

//     resetButton.parentNode.removeChild(resetButton);

//     guessField.disabled = false;
//     guessSubmit.disabled = false;
//     guessField.value = '';
//     guessField.focus();

//     lastResult.style.backgroundColor = 'white';

//     randomNumber = Math.floor(Math.random() * 100) + 1;
// }

// let btn = document.querySelector('#maha');
// let para = document.querySelector('p');
// function mani(){
//     let name  = prompt('Enter your name please!');
//     if(name === 'Sujon'){
//         para.innerHTML = 'Hello '+ name;
//     }else if(name == 'Abraham'){
//         para.innerHTML = 'Welcome '+name;
//     }else if(name == 'Polash'){
//         para.innerHTML = 'Polash kemon acho?';
//         para.style.backgroundColor = 'green';
//         para.style.color = 'white';
//         para.style.fontSize = '30px';
//         para.style.textAlign = 'center'
//     }
//     else{
//         para.innerHTML = 'No name you entered!';
//         para.style.backgroundColor = 'red';
//         para.style.color = 'white';
//     }
// }
// btn.addEventListener('click',function(){
//     mani();
// });

// let btn = document.querySelector('#maha');
// let para = document.querySelector('p');
// btn.addEventListener('click', fun);

// function fun(){
//     if(btn.textContent == 'Start button'){
//         btn.textContent = 'Stop button';
//         para.innerHTML = 'You have to started....button';
//     }else{
//         btn.textContent = 'Start button';
//         para.innerHTML = 'You have to stop button ...';
//     }
// }


// let list = document.querySelector('.output ul');
// let arr = ['Hello world this is Bangladesh','Hello mera jan Bangladesh','Hi Whats\'s up there','Iam a big man'];
// for(let i = 0; i<arr.length; i++){
//     let mainPara = arr[i];
//     if (arr[i].indexOf('Hello') !== -1) {
//         let li = document.createElement('li');
//         li.innerHTML = mainPara;
//         list.appendChild(li);
//     }   

// }

// let ana = document.querySelector('.output ul');
// let arr = ['shadhin','Bangladesh','torikot','Selim'];
// for(let i = 0; i<arr.length; i++){
//     let arr1 = arr[i];
//     let lower = arr1.toLowerCase();
//     let first = lower.slice(0, 1);
//     let rep = lower.replace(first, first.toUpperCase());
//     let li = document.createElement('li');
//     li.innerHTML = rep;
//     ana.appendChild(li);  
// }

// let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
// let myArr = myData.split(',');
// let newarr = myArr.join(',');
// console.log(newarr);

// let arr2;
// let arr = 'amar acha jol you';
// arr2 = arr.split(' ');
// let str = arr2.join(' ');
// console.log(str.toString());

//STRING REVERSE YOU CAN USE THIS METHOD
// var ami = 'amr sonar bangla';
// function reverseMe(reverseString){
//     var reverse1 = "";
//     for (var i = reverseString.length -1; i>=0; i--){
//         reverse1 += reverseString[i];
//     }
//     return reverse1;
// }
// console.log(reverseMe(ami));

//var arr = ['name','Shadhin'];
// var a = arr.join(' ');
// function main(){
//     var reverse = '';
// for(var i = a.length-1; i>=0;i--){
//     reverse += a[i];
// }
//     return reverse;
// }
// console.log(main(a));

// let a = 'Shadhin';
// let b = a.split('').reverse().join('');
// console.log(b);

//DIFFRENT WAY CHANGE TO BG COLOR WITH VANILA JAVASCRIPT
// let selectValue = document.querySelector('select');
// let body = document.body;

// function fun(black,white,blue,green){
//     if(selectValue.value === black){
//         body.style.backgroundColor = 'black'
//     }else if(selectValue.value === white){
//         body.style.backgroundColor ='white';
//     }else if(selectValue.value === blue){
//         body.style.backgroundColor = 'blue';
//     }else if(selectValue.value ===  green){
//         body.style.backgroundColor = 'green';
//     }else{
//         body.style.backgroundColor ='white'
//     }
// }
// selectValue.onchange = function(){
//     selectValue.value = fun('black','white','blue','green');
// }
// function main(){
//     // console.log(window);
//     // console.log(document);
// }
// main();

// let container = document.querySelector('.container');
// let div = document.createElement('div');
// div.setAttribute('class', 'msg');
// container.appendChild(div)
// let para = document.createElement('p');
// para.textContent = 'This is a new Paragraph';
// div.appendChild(para);
// let btn = document.createElement('button');
// btn.textContent='Click Here';
// div.appendChild(btn);

// btn.addEventListener('click', function(){
//     div.parentNode.removeChild(div)
// })

 




let Obj = {
    name : 'Shadhin reza',
    age : 30
}
console.log(Obj.age);











