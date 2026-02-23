# 📚 Node.js Assignments Repository

This repository contains multiple Node.js assignments demonstrating REST API development using **Node.js** and **Express.js**.

---

# 📝 Assignment 1 — Student Management API

## 🎯 Objective

Build a REST API to manage student data, calculate statistics, and filter records.

---

## 🚀 Features

* Get all students
* Find topper based on CGPA
* Calculate average CGPA
* Count total students
* Get student by ID
* Filter students by branch

---

## 🔗 Implemented Routes

### 1️⃣ Get all students

**GET** `/students`

### 2️⃣ Get topper

**GET** `/students/topper`

### 3️⃣ Get average CGPA

**GET** `/students/average`

### 4️⃣ Get total student count

**GET** `/students/count`

### 5️⃣ Get student by ID

**GET** `/students/:id`

### 6️⃣ Get student by branch

**GET** `/students/branch/:branchName`

---

## 🧪 Sample API URLs

```id="c1vqah"
http://localhost:3000/students
http://localhost:3000/students/topper
http://localhost:3000/students/average
http://localhost:3000/students/count
http://localhost:3000/students/1
http://localhost:3000/students/branch/cse
```

---

## ⚙️ Steps to Run Assignment 1 Locally

```bash id="6e5bn0"
cd assignment-1
npm install
node index.js
```

Server runs at:

```id="0aaxsa"
http://localhost:3000
```

---

## 🌐 Deployed Link

👉 (https://node-assignment-i5dm.onrender.com)

---






## 🧾 Technologies Used

* Node.js
* Express.js

---

## 👨‍💻 Author

Nitish Kumar
