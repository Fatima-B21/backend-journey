let book = {
    title: "A thousand suplendid suns",
    author: "Khalid Hosseini",
    pages: 390
};

console.log(book["title"]);
console.log(book["author"]);

let mobile = {
    brand: "Samsung",
    model: "S24",
    price: 250000
};

mobile.price = 230000;

console.log(mobile);

let person = {
    name: "Fatima",
    age: 20
};

person.city = "Faisalabad";

console.log(person);

let student = {
    name: "Shaheer",
    marks: 85
};
if(student.marks >= 50){
    console.log(`${student.name} Passed`);
}else{
    console.log(`${student.name} Failed`);
}