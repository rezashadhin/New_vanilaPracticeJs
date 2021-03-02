function facto(num){
    if(num == 0) return 1;
    else if(num == 1) return 1;
    else return num *facto(num-1);
}
console.log(facto(3));

let firstNum = parseFloat(prompt('Enter first number'));
function randomNumber(x){
    let ranNum = Math.random(x);
    if(ranNum == x){
        return x;
    }else{
        return ranNum;
    }
}
document.write(randomNumber(firstNum));


let str = 'AmaR soNaR BanGlA';
function countAllString(str){
    let capitalStr=[],smallStr=[],i;
    for(i=0;i<str.length;i++){
        if(str[i]>='a' && str[i]<='z'){
            smallStr.push(i);
        }else if(str[i]>='A' && str[i]<='Z'){
            capitalStr.push(i);
        }
        if(capitalStr.length>smallStr.length){
            return str.toUpperCase();
        }else if(capitalStr.length<smallStr.length){
            return str.toLowerCase();
        }else{
            return str.toLowerCase();
        }
    }
}
document.write(countAllString(str));

function CaseValidator(str){
    var capitalLetter = str.match(/[A-Z]/g).join("").length;
    var smallLetter = str.match(/[a-z]/g).join("").length;
    if(capitalLetter > smallLetter){
    console.log(str.toUpperCase());
    }else if(capitalLetter < smallLetter){
    console.log(str.toLowerCase())
    }else if(capitalLetter == smallLetter){
        console.log(str.toLowerCase());
    CaseValidator('JSLover')

    }
};


 
