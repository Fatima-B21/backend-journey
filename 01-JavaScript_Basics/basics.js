let name = "Fatima";
let marks = 30;
let attendance = 76;
let feePaid = false;
// if(marks >= 50){
//     console.log(`${name} scored ${marks} and Passed`)
// }else{
//     console.log(`${name} scored ${marks} and Failed`)
// }

// if(marks>=90){
//     console.log(`${name} secured an A grade`)
// }else if(marks >=80){
//     console.log(`${name} secured a B grade`)
// }else if (marks >= 70){
//     console.log(`${name} secured a C grade`)
// }else{
//     console.log(`${name} Failed with an F grade`)
// }

// if(marks >= 50 && attendance >= 75){
//     console.log(`${name} Passed`)
// }else if(marks < 50){
//     console.log(`${name} failed due to low marks`)
// }else{
//     console.log(`${name} failed due to attendance shortage`)
// }

if (attendance >= 75 && !feePaid){
    console.log(`${name} is eligibile to take the exam`)
}else if( attendance < 75){
    console.log(`${name} is not eligible to sit for the exam due to attendance shortage`)
}else{
    console.log(`${name} is not eligible to sit for the exam due to unpaid fee`)
}

let username = "Maria";
let password = "12345";
let role = "User"

if(username === 'Maria' && password === "12345"){
    if(role === "Admin"){
        console.log(`Welcome Admin ${username}`)
    }else{
        console.log(`Welcome User ${username}`)
    }
}else{
    console.log("Invalid username or password")
    }

let num1 = 10;
let num2 = 15;
let operator = "-";
let result;

if(operator === "+"){
    result = num1 + num2;
    console.log(`${num1} + ${num2} = ${result}`) 
}else if(operator === "*"){
    result = num1 * num2;
    console.log(`${num1} * ${num2} = ${result}`);
}else if(operator === "/"){
    result = num1 / num2;
    console.log(`${num1} / ${num2} = ${result}`);
}else if(operator = "-"){
    result = num1 - num2;
    console.log(`${num1} - ${num2} = ${result}`);
}else{
    console.log("Invalid Operator");
}