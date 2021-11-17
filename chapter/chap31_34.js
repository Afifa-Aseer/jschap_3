// Q1
var date= new Date();
document.write(date);
document.write("<hr>");

// Q2

var c = new Date().toString().slice(4,7);
if (c === "Jan"){
    document.write("Current month: January")
}else if(c === "Feb"){
    document.write("Current month: February")
}else if(c === "Mar"){
    document.write("Current month: March")
}else if(c === "Apr"){
    document.write("Current month: April")
}else if(c === "May"){
    document.write("Current month: May")
}else if(c === "Jun"){
    document.write("Current month: June")
}else if(c === "Jul"){
    document.write("Current month: July")
}else if(c === "Aug"){
    document.write("Current month: August")
}else if(c === "Sep"){
    document.write("Current month: September")
}else if(c === "Oct"){
    document.write("Current month: October")
}else if(c === "Nov"){
    document.write("Current month: November")
}else if(c === "Dec"){
    document.write("Current month: December")
}
document.write("<hr>");
// Q3
var day = new Date().toString().slice(0,3);
document.write("Today is : "+day);
document.write("<hr>");

// // Q4
var day = new Date().toString().slice(0,3);
if (day === "Sat" ||day === "Sun"){
    document.write("It's Fun day")
}else{
    document.write("It's not Fun day")
}
document.write("<hr>");
// // Q5

var day = new Date().toString().slice(8,10);
if (day <="15"){
    document.write("First fifteen days of the month")
}else{
    document.write("Last days of the month")
}
document.write("<hr>");

// // Q6

var date= new Date();
var diff = date.getTime() - date.getMinutes();
var diffMin = diff/(1000*60*60);
var accurateMin = Math.floor(diffMin);
document.write("Current date:"+date);
document.write("<br> Elapsed milliseconds since January 1,1970 :"+date.getTime());
document.write("<br> Elapsed minutes since January 1,1970 :"+accurateMin);
document.write("<hr>");

// // Q7

var now = new Date().getHours()
if(now >= 0 && now < 12 ){
    alert("It's AM")
}else{
    alert("It's PM")
} 
document.write("<hr>");

// // Q8

var lastdate = new Date("December , 31 2020")
document.write("Later date : "+lastdate);
document.write("<hr>");


// // Q9
var f_ramadan = new Date("June , 18 2015")
var days = Math.floor(f_ramadan.getTime()/(1000*60*24*365));
document.write(days+" days have passed since 1st Ramadan,2015");
document.write("<hr>");


// // Q10
var now = new Date("Dec 1 , 2015");
var nowmili = now.getTime()
var dated = new Date("Dec 25 ,2015").getTime();
var differ = dated  - nowmili  
var totalSec = differ / (1000)
totalSec = Math.floor(totalSec)
document.write(`on reference Date ${now} <br> ${totalSec} Seconds had passed since beginning of 2015 `)
document.write("<hr>");


// // Q11
var date = new Date();
document.write("Current date"+date);  
date.setHours(2);
document.write("<br>"+date) 
document.write("<hr>");


// // Q12
var now = new Date();
var year = new Date()
year.setFullYear(1921)
alert(`TODAY : ${now} \n 100 years Back : ${year}`)


// // Q13
var age = +prompt("Enter your age");
var date = new Date().getFullYear() - age;
document.write("Your age is "+age);
document.write("<br>Your birth year is "+date);
document.write("<hr>");



// // Q14
var dated = new Date();
var month = dated.getMonth();
var ConsumerName = "ABC"
var unitNum = 410;
var chargesPerUnit = 16;
var netAmount = unitNum * chargesPerUnit;  
var lateCharges = 350 ; 
var grossAmount = netAmount + lateCharges;
document.write(`<b>K - ELECTRIC BILL </b> <br />
                Customer Name : ${ConsumerName} <br>
                Month : ${month} <br>
                Numbers of units : ${unitNum} <br>
                Chages per unit: ${chargesPerUnit} <br>
                <br>
                <br>
                Net Amount : (With in due Date: ) ${netAmount} <br>
                Late Charges : ${lateCharges} <br>
                Groos Amount : ${grossAmount}`)