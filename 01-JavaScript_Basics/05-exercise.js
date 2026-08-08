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

// find(), findIndex(), filter(), map(), reduce()

// let users = [
//     { username: "Fatima", role: "Admin"},
//     { username: "Ali", role: "User"},
//     { username: "Sara", role: "User"}
// ]

// const person = users.find(person => person.username === "Sara");
// console.log(`${person.username} is a ${person.role}`);

// const people = users.findIndex(people => (people.username === "Ali"));
// if(people !== -1){
//     console.log(`Ali is at index ${people}`);
// }else{
//     console.log("User not found")
// }

// const students = classroom.filter(students => students.marks >=75);
// console.log(students);

// let products = [
//     { name: "Keyboard", price: 3000 },
//     { name: "Mouse", price: 1500 },
//     { name: "Monitor", price: 25000 },
//     { name: "USB", price: 700 }
// ];
//  const cheapProducts = products.filter(cheapProducts => cheapProducts.price < 2000);
//  console.log(cheapProducts);

//  let colleagues = [
//     { username: "Fatima"},
//     { username: "Ali"},
//     { username: "Sara"}
//  ];
//  const members = colleagues.map(members => members.username);
//  console.log(members);

//  let scholars = [
//     { name: "Fatima", marks: 90 },
//     { name: "Ali", marks: 45}
//  ];
 
//  const result = scholars.map(student =>{
//  return {
//     name: student.name,
//     status: student.marks >= 75 ? "Pass" : "Fail"
//  };
//  });
//  console.log(result)

//  const totalMarks = classroom.reduce((acc, student) => {
//  return (acc + student.marks)
// }, 0);
// const average = totalMarks / classroom.length;
//  console.log(`Total Marks = ${totalMarks}`);
//  console.log(`Average = ${average}`);

//  let customer = [
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

// function loginSystem (username, password, role){
//     const validUser = customer.find(validUser => username === validUser.username && password === validUser.password && role === validUser.role
//     );
//     if(validUser){
//         console.log(`Welcome ${validUser.username} (${validUser.role})`)
//         validUser.isLoggedin = true;
//         console.log(customer);
//     }else{
//         console.log("Invalid Login")
//     }
// };
// loginSystem("Ali", "45", "User");

// Destructuring

// const product = {
//     name: "Keyboard",
//     price: 3000,
//     stock: 15
// };
// const {name, price, stock} = product;
// console.log(`${name} costs ${price}`);

// const fruits = ["Apple", "Banana", "Orange"];
// const [first, second] = fruits;
// console.log(`${first} ${second}`);

// const student = {
//     name: "Fatima",
//     marks: 92,
//     city: "Faisalabad"
// };
// const {name: studentName, marks:score} = student;
// console.log(`${studentName} scored ${score}`);

// const user = {
//     username: "Fatima",
//     role: "Admin",
//     age:19
// };
// const {username: userName, role: userRole, age} = user;
// console.log(`${userName} is ${age} years old and is an ${userRole}`);

// const employee = {
//     username: "Fatima",
//     salary: 50000
// };
// const {username: employeeName, salary: income, department = "IT"} = employee;
// console.log(`${employeeName} earns ${income} and works in ${department} department`);

// const student = {
//     name: "Ali",
//     marks: 85,
//     city: "Lahore"
// };

// function studentInfo({name, marks}){
//     console.log(`${name} got ${marks} marks`);
// };
// studentInfo(student);

// const product = {
//     title: "Laptop",
//     price: 80000,
//     category: "Electronics"
// };

// function productInfo({title: productName, price: cost}){
//     console.log(`${productName} costs ${cost}`);
// };

// productInfo(product);

// const user = {
//     username: "Fatima",
//     email: "fatima@gmail.com",
//     address: {
//         city: "Faisalabad",
//         country: "Pakistan"
//     }
// };

// function userInfo({username, address:{city, country}}){
//     console.log(`${username} lives in ${city}, ${country}`);
// }

// userInfo(user);

// const order = {
//     id: 101,
//     customer: {
//         name: "Ali",
//         city: "Lahore"
//     }
// };

// function orderInfo({id: orderId, customer:{name: customerName, city}}){
//     console.log(`Order ${orderId} belongs to ${customerName} from ${city}`);
// };

// orderInfo(order);

// REST Operator

// function calculateTotal(...prices){
//     const total = prices.reduce((acc, currVal)=>{
//         return(acc + currVal)
//     }, 0)
//     console.log(total)
// };

// calculateTotal(100, 200, 300);

// const student = {
//     name: "Fatima",
//     marks: 92,
//     city: "Faisalabad",
//     semester: 6
// };

// const {name, ...otherDetails} = student;

// const user = {
//     name: "Fatima",
//     role: "Admin",
//     city: "Faisalabad",
//     age: 19
// };

// const {role, ...publicProfile} = user;