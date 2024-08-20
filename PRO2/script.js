let student= {
    id: 101,
    sname: "Yash",
    age: 21,
    isWorking: false
}

let{id,sname,age,isWorking}=student

let info = `

<h1>PORTFOLIO</h1>
<img src=" https://img.freepik.com/free-vector/cute-cool-boy-dabbing-pose-cartoon-vector-icon-illustration-people-fashion-icon-concept-isolated_138676-5680.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1723680000&semt=ais_hybrid" alt="No image" height="150px" width= "150px"><br>
<h2>ID: ${id}</h2>
<h2>Name: ${sname}</h2>
<h2>age: ${age}</h2>
 <h2>Working/Student : ${isWorking ? "Working Profession": "Student"}</h2>
`

document.write(info)