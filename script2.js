

// function greeting() {
//     document.getElementById("demo").innerHTML="Have a Good Day"
// }


// function morning() {
//     document.getElementById("demo").innerHTML="Good Morning";
//     document.getElementById("mode").style.backgroundColor="skyblue"
// }

// function afternoon() {
//     document.getElementById("demo").innerHTML="Good Afternoon";
//     document.getElementById("mode").style.color="black"
//     document.getElementById("mode").style.backgroundColor="yellow"
// }

// function evening() {
//     document.getElementById("demo").innerHTML="Good Eveningg";
//     document.getElementById("mode").style.backgroundColor="orange"
// }

// function night() {
//     document.getElementById("demo").innerHTML="Good Night";
//     document.getElementById("mode").style.color="white"
//     document.getElementById("mode").style.backgroundColor="black"
// }


// let Student = {
//     id:101, //Number
//     sname: "Lucky", // String
//     isStudent: true, //Boolean
// }

//destructuring

// let {id,sname,isStudent} = Student
// //Renaming
// //let {id: _id ,sname: name, isStudent: ist} = Student

// console.log(id);
// //console.log(sname);
// // console.log(isStudent);

// Student.id = 102
// console.log(Student['id']);

// Student['age']=22;
// console.log(Student);

// Student.isStudent= false
// console.log(Student);

//delete object


let Student = {
    id:101, //Number
    sname: "Lucky", // String
    isStudent: true, //Boolean
}

console.log(Student)

delete Student.isStudent

console.log(Student);

