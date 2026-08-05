// Student Report

// let student = {
//     name: "Fatima",
//     marks: [85, 90, 78, 92]
// };
// let student2 = {
//     name: "Ali",
//     marks: []
// }
// function showReport(student){
//     let total = 0;
//     for(let i=0; i<student.marks.length; i++){
//         total = total + student.marks[i];
//     }
//     console.log(`Student: ${student.name}`)
//     console.log(`Total Marks: ${total}`);
//     if(student.marks.length != 0){
//         const average = total / student.marks.length;
//         console.log(`Average: ${average}`);
//     }else{
//         console.log("Average: Not available")
//     }
// }
// showReport(student);
// showReport(student2);

// Shhopping Cart

// let cart = [
//     {
//         item: "Keyboard",
//         price: 3000
//     },
//     {
//         item: "Mouse",
//         price: 1500
//     },
//     {
//         item: "Monitor",
//         price: 25000
//     }
// ];

// let total = 0;
// for (let i = 0; i < cart.length; i++) {
//     const product = cart[i];
//     total += product.price;
//     console.log(`${product.item} - ${product.price}`);
// }
// console.log(`Total Bill: ${total}`);

// function findProduct(productName) {
//     let found = false;
//     for(let j = 0; j<cart.length; j++){
//         if (cart[j].item === productName) {
//             console.log(`${cart[j].item} costs ${cart[j].price}`);
//             found = true;
//         } 
//     }
//     if(found === false){
//         console.log("Product not found")
//     }
// }

// findProduct("Mouse");

// Login Database

// let users = [
//     {
//         username: "Fatima",
//         password: "123",
//         role: "Admin",
//         isLoggedin: false
//     },
//     {
//         username: "Ali",
//         password: "456",
//         role: "User",
//         isLoggedin: false
//     },
//     {
//         username: "Sara",
//         password: "789",
//         role: "User",
//         isLoggedin: false
//     }
// ];

// function login(username, password, role) {
//     for (let i = 0; i < users.length; i++) {
//         const user = users[i];
//         if (username === user.username && password === user.password && role === user.role) {
//             console.log(`Welcome ${user.username} (${user.role})`);
//             user.isLoggedin = true;
//             console.log(users);
//             return;
//         }
//     }
//     console.log("Invalid login");
// }
// login("Ali", "456", "User");

// Library 

// let books = [
//     {
//         title: "Atomic Habits",
//         author: "James Clear",
//         pages: 320
//     },
//     {
//         title: "The Alchemist",
//         author: "Paulo Coelho",
//         pages: 210
//     },
//     {
//         title: "Clean Code",
//         author: "Robert Martin",
//         pages: 464
//     }
// ];

// for(let i = 0; i < books.length; i++){
//     if(books[i].pages >= 300){
//         console.log(books[i].title)
//     }
// };

// Object Method

// let person ={
//     firstName: "Fatima",
//     lastName: "Javaid",

//     fullName: function(){
//         console.log(this.firstName, this.lastName)
//     }
// }

// person.fullName();

// Object.keys()

// let laptop ={
//     brand: "Dell",
//     processor: "i5",
//     ram: "8GB",
//     storage: "512GB"
// };

// for(let [key,value] of Object.entries(laptop)){
//     console.log(`${key} ${value}`)
// }

// Merit

// let classroom = [
//     {
//         name: "Fatima",
//         marks: 90
//     },
//     {
//         name: "Ali",
//         marks: 45
//     },
//     {
//         name: "Ahmed",
//         marks: 82
//     },
//     {
//         name: "Sara",
//         marks: 30
//     }
// ];

// function merit(){
//     let student;
//     let passedStudents = [];
//     let failedStudents = [];
//     for(let i = 0; i < classroom.length; i++){
//         student = classroom[i];
//         if(student.marks >= 75){
//             passedStudents.push(student);    
//         }else{ 
//             failedStudents.push(student);
//         }
//     };

//     console.log("Passed Students:")
//     for(let j = 0; j < passedStudents.length; j++){
//         let passedStudent = passedStudents[j];
//         console.log(passedStudent.name)
//     }
//     console.log("Failed Students:");
//     for(let k = 0; k < failedStudents.length; k++){
//         let failedStudent = failedStudents[k];
//         console.log(failedStudent.name)
//     }
// };
// merit();