function makeSum(){
    var num1 =document.getElementById('InputText1').value;
    var num2 =document.getElementById('InputText2').value;
    if(!isNumberValidation(num1, num2))
        console.log(Number(num1)+Number(num2));
}

function makeSubtraction(){
    var num1 =document.getElementById('InputText1').value;
    var num2 =document.getElementById('InputText2').value;
    if(!isNumberValidation(num1, num2))
        console.log(Number(num1)-Number(num2));
}

function makeMultiplication(){
    var num1 =document.getElementById('InputText1').value;
    var num2 =document.getElementById('InputText2').value;
    if(!isNumberValidation(num1, num2))
        console.log(Number(num1)*Number(num2));
}

function makeDivision(){
    var num1 =document.getElementById('InputText1').value;
    var num2 =document.getElementById('InputText2').value;
    if(!isNumberValidation(num1, num2))
    {
        if(Number(num2) === 0)
            console.log('You can’t divide /0 ');
        else
            console.log(Number(num1)/Number(num2))
    }
}

function printFactorial(){
    var num1 = document.getElementById('InputText1').value;
    var factorial = 0;
    if(isAValidInput(num1)){
        if(Number(num1)<= 170){
            factorial = makeFactorial(Number(num1));
            console.log(factorial);
        }
        else
            console.log('Please enter a smaller number');
        
    }
}

function isNotEmpty(value){
    if(value === "")
        console.log('please enter a value');
    else
        return 1;
}
function isNumberValidation(num1, num2){
    var flag = false;
    if (isNaN(num1)||num1==="")
    {
        console.log('The input at "Number 1" is not a number, please enter a number');
        flag = true;
    }
    else if (isNaN(num2)||num2==="")
    {
        console.log('The input at "Number 2" is not a number, please enter a number');
        flag = true;
    }
    return flag;
}

function isAValidInput(num1){
    var flag = true;
    if(isNaN(num1)||num1===""){
        console.log('The input is not a number, please enter a number');
        flag = false;
    }
    else{
        if(Math.sign(Number(num1)) === 1 || Math.sign(Number(num1)) === 0){
            flag = true;
        }
        else{
            console.log('You can’t calculate the factorial of a negative number');
            flag = false;
        }
    }
    return flag;
}

function makeFactorial(n){
    if(n === 0)
        return 1;
    else
        return n * makeFactorial(n-1);
}