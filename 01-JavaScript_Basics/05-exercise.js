// Student Report

let student = {
    name: "Fatima",
    marks: [85, 90, 78, 92]
};
let student2 = {
    name: "Ali",
    marks: []
}
function showReport(student){
    let total = 0;
    for(let i=0; i<student.marks.length; i++){
        total = total + student.marks[i];
    }
    console.log(`Student: ${student.name}`)
    console.log(`Total Marks: ${total}`);
    if(student.marks.length != 0){
        let average = total / student.marks.length;
        console.log(`Average: ${average}`);
    }else{
        console.log("Average: Not available")
    }
}
showReport(student);
showReport(student2);