const express = require("express");

const app = express();

const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    branch: "CSE",
    semester: 8,
    cgpa: 9.3,
  },
  {
    id: 2,
    name: "Ishita Verma",
    branch: "IT",
    semester: 7,
    cgpa: 8.9,
  },
  {
    id: 3,
    name: "Rohan Kulkarni",
    branch: "ECE",
    semester: 6,
    cgpa: 8.4,
  },
  {
    id: 4,
    name: "Meera Iyer",
    branch: "CSE",
    semester: 8,
    cgpa: 9.1,
  },
  {
    id: 5,
    name: "Kunal Deshmukh",
    branch: "IT",
    semester: 5,
    cgpa: 7.8,
  },
  {
    id: 6,
    name: "Ananya Reddy",
    branch: "CSE",
    semester: 6,
    cgpa: 8.7,
  },
  {
    id: 7,
    name: "Vikram Patil",
    branch: "ECE",
    semester: 7,
    cgpa: 8.2,
  },
  {
    id: 8,
    name: "Priyanka Nair",
    branch: "AI",
    semester: 4,
    cgpa: 8.8,
  },
  {
    id: 9,
    name: "Harsh Mehta",
    branch: "Data Science",
    semester: 5,
    cgpa: 8.0,
  },
  {
    id: 10,
    name: "Neha Gupta",
    branch: "CSE",
    semester: 6,
    cgpa: 7.9,
  },
];

    
    let max = 0;
    let maxCgpa = 0;  // for topper
    let sum = 0;   // for avg 

    for(let i=0; i<students.length; i++){
        sum += students[i].cgpa;
        if(max < students[i].cgpa){
            max = students[i].cgpa;
            maxCgpa = i;
        }
    }

    let avg = sum/students.length;
    avg = Number(avg.toFixed(2));


    app.get("/", (req, res) => {
        res.send('Assignment 1');
    })

    // 1. /students
    app.get("/students", (req, res) => {
        res.status(200).json(students);
    })


    // 2. /students/topper
    app.get("/students/topper", (req, res) => {
        if(!students[maxCgpa]){
            return res.status(404).json({massage: 'Not found'});
        }
        res.status(200).json(students[maxCgpa]);
    })

    
    // 3. /students/average
    app.get("/students/average", (req, res) => {
        res.status(200).json({averageCGPA: avg});
    })

    
    // 4. /students/count
    app.get("/students/count", (req, res) => {
        res.status(200).json({totalStudents: students.length});
    })


    // 5. /students/:id
    app.get("/students/:id", (req, res) => {
        const userId = Number(req.params.id);
        const user = students.find(e => e.id == userId);

        if(!user){
            return res.status(404).json({message: 'student not found'});
        }
        res.status(200).json(user);
    })


    // 6. /students/branch/:branchName
    app.get("/students/branch/:branchName", (req, res) => {
        const brName = req.params.branchName.toLowerCase();
        const std = students.find(e => e.branch.toLowerCase() == brName);

        if(!std){
          return  res.status(404).json({message: "student not found"});
        }
        res.status(200).json(std);
    })

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
