function validateStudent(req,res,next){
    const {name, age} = req.body;

    if(!name || !age){
        return res.status(400).json({
            message: "Required Name and Age"
        })
    }

    next();
}

const express = require('express');
const app = express();

app.use(express.json());

const students = [
    {id:1, name:"gus",age:20},
    {id:2, name:"boss",age:20},
    {id:3, name:"tle",age:20},
]
app.get('/api/students',(req,res) => {
    res.send(students)
})

app.get('/api/students/:id',(req,res) => {
    // แปลง id ให้เป็นตัวเลข
    const id = parseInt(req.params.id);
    const findstudent = students.find(i => i.id === id);

    if (findstudent) {
        res.send(findstudent)
    } else {
        res.status(404).send("Error status 404")
    }
})

app.post('/api/students',validateStudent,(req,res) => {
    const { name, age} = req.body;

    const newStudent = {
        id: students.length + 1, name, age
    }
    students.push(newStudent);
    res.status(201).json(newStudent);
})

app.put('/api/students/:id',(req,res) => {

    const id = parseInt(req.params.id);
    const findstudent = students.find(i => i.id === id);

    if(!findstudent){
        res.status(404).json({ message: "Student not found" });
    } 

    const {name, age } = req.body;
    if (name) findstudent.name = name
    if (age) findstudent.age = age
    res.json(findstudent)
    
})

app.delete('/api/students/:id',(req,res) => {

    const id = parseInt(req.params.id);
    const findindexstudent = students.findIndex(i => i.id === id);

    if(findindexstudent === -1){
        res.status(404).json({ message: "Cant delete no student!"})
    }

    const deletedStudent = students.splice(findindexstudent, 1);

    res.json({
        message: "Student deleted",
        data: deletedStudent[0]
    });
});





app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
})