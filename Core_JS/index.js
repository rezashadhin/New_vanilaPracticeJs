function coping(){
    let arr1=[],i,n,sum=0;
    n = parseInt(prompt('Enter arry number'));
    for(i=0;i<n; i++){
        arr1.push(parseInt(prompt('Enter Grade ' + (i+1))));
    }
    for(i=0; i<arr1.length; i++){
        sum = sum + arr1[i];
    }
    document.write(sum);
}
coping();


//Tow dimentional array print

let arr = [[2,3,4],[5,6,7],[8,9,10]];
for(let i = 0;i<arr.length; i++){
    for(let j=0; j<arr.length;j++){
        console.log(arr[i][j]);
    }
    console.log('\n');
}

function len(str){
    let count=0;
    while(str[count] !=undefined){
        count++;
    }
    return count;
}
console.log(len('Hello'));

let str = 'Hello1';
let count = 0;
while(str[count]!=undefined) count++;
console.log(count);

let name = 'Shadhin reza';
let b = name.split('').reverse().join('');
console.log(b);

function maximumNumberInArray(){
    let i,max;
    let arr = [20,34,5,10,88];
    max = 0;
    for(i=1;i<arr.length;i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}
console.log(maximumNumberInArray());

too = 'Hello World how are you?';
function WordCount(str) { 
    let i,worcount = 0;
    for(i=0;i<str.length; i++){
        if(str[i]==' '){
            worcount++;
        }
    }
    console.log(worcount+1);
}
WordCount(too);

function maximum(){
    let min = Infinity;
    let arr = [20,4,955,66,54,99,444];
    for(let i=0;i<arr.length;i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    console.log(min); 
}
maximum();



let arrayOne = [20,30,50,80,4,6];

let maximumNumber = Math.min(...arrayOne);
console.log(maximumNumber);

function maximum(){
    let maxNumber = arrayOne[0];
    let arrayOne = [20,30,50,80,4,6];
    for(let i=0; i<arrayOne.length; i++){
        if(maxNumber < arrayOne[i]){
            maxNumber = arrayOne[i]
        }
    }
    return maxNumber;
}
console.log(maximum())
