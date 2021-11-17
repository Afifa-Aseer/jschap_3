// Q1
function date(now){
        document.write(now)
}   
date(new Date())
document.write("<hr>");


// Q2
function Fullname(){
    var firstname=prompt("Enter your First name")
    var lastname=prompt("Enter your last name")
    var fullname = firstname+" "+lastname;
    document.write("Hi! "+fullname);
}
Fullname()
document.write("<hr>");


// Q3
function Sum(){
    var num1=+prompt("Enter 1st number")
    var num2=+prompt("Enter 2nd number")
var num3 = num1+num2;
document.write(num1+" + "+num2+" = "+num3);
}
Sum()
document.write("<hr>");


// Q4
document.write("<h4> Calculator </h4>")
function calc(num1 , opt , num2 ){
        if(opt === "+"){
            return num1 + num2 
        }
        else if(opt === "-"){
            return num1  - num2 
        }else if(opt === "*"){
            return num1  * num2 
        }else if(opt === "/"){
            return num1  / num2 
        }
        else{
            return "Enter Correct operator"
        }
}    
var num1 = parseInt(prompt("enter number 1"))
var opt = prompt("enter opt");
var num2 = parseInt(prompt("enter number 1"))

var add = calc(num1 , opt , num2)
document.write(`Number 1: ${num1} <br> Operator ${opt} <br> Numeber 2: ${num2}<br>`)
document.write(num1+" "+opt+" "+num2+" = "+add);
document.write("<hr>");



// Q5
function squareValues(num){
        var square = num * num
    return square
}
var value = parseInt(prompt("enter square value"));
var functionValue = squareValues(value);
document.write(`Your Value: ${value} <br> Square Value : ${functionValue}`  )

document.write("<hr>");


// Q6
 function factorial(num){
     var sum = 1;
    for(var i = num ; i>= 1 ; i-- ){
            sum = sum * i
        } 
        return sum
}

var funValue = factorial(10);
document.write("Factorial Value: " + " " + funValue)
document.write("<hr>");


// // Q7
function counting(startValue , endValue){
    for(var i = startValue ; i <= endValue ; i++){

         document.write(i  + " <br>") 

    }

}    
var startNum = parseInt(prompt("Enter Start Value"))
var endNum = parseInt(prompt("Enter End Value"))
counting(startNum , endNum)
document.write("<hr>");


// Q8
function hypo(val1 , val2){

        return Math.sqrt(Math.pow(val1 , 2) + Math.pow(val2 , 2));
}
var base = parseInt(prompt("Enter Base Value: " ))
var per = parseInt(prompt("Enter perpendicular Value: "))
var hyopValue = hypo(base , per)
document.write(hyopValue)
document.write("<hr>");

// Q9
function rectangle(width , heigth){
        var A = width * heigth;
        return A
}
var w = parseInt(prompt("Enter WIDTH"))
var h = parseInt(prompt("Enter HEIGHT"))
document.write(rectangle(w , h))
document.write("<hr>");

// Q10
function pali(str){
    var re = /[\W]/g;
    var lowerstr = str.toLowerCase().replace(re,"");
    var reversestr = lowerstr.split("").reverse().join("");
    return reversestr === lowerstr

}
document.write("<hr>");

// Q11

