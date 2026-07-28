function square(number){
    return number * number
   };

let result = square(5);
console.log(result);

function checkAge(name, age){
    if(age >= 18){
        console.log(`${name} is an adult`)
    }else{
        console.log(`${name} is a minor`)
    }
};
checkAge("Fatima", 20);

function loginSystem(username, password){
    const correctUsername = "Fatima";
    const correctPassword = 12345;
    if(username === correctUsername && password === correctPassword){
        console.log(`Welcome ${username}`);
        return true;
    }else{
        console.log("Invalid Username or Password");
        return false;
    }
}

let resultLogin = loginSystem("Ali", 12345)