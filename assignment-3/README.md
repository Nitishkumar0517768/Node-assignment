# 📝 Assignment 3 — State Statistics Management API
## 🎯 Objective

Build a REST API to manage Indian states data, update statistics, and perform filtering and deletion operations.

---

## 🚀 Features

- Get all states
- Get state by ID
- Get state with highest GDP
- Add a new state
- Replace entire state data
- Update specific fields (budget, population, literacy, GDP)
- Partial update of state data
- Delete state by ID or name
- Delete states with low literacy rate

---

## 🔗 Implemented Routes

### 1️⃣ Get all states  
**GET** `/states`

### 2️⃣ Get state by ID  
**GET** `/states/:id`

### 3️⃣ Get state with highest GDP  
**GET** `/states/highest-gdp`

### 4️⃣ Add new state  
**POST** `/states`

### 5️⃣ Replace entire state data  
**PUT** `/states/:id`

### 6️⃣ Update annual budget  
**PUT** `/states/:id/budget`

### 7️⃣ Update population  
**PUT** `/states/:id/population`

### 8️⃣ Update literacy rate  
**PATCH** `/states/:id/literacy`

### 9️⃣ Update GDP  
**PATCH** `/states/:id/gdp`

### 🔟 Partial update state  
**PATCH** `/states/:id`

### 1️⃣1️⃣ Delete state by ID  
**DELETE** `/states/:id`

### 1️⃣2️⃣ Delete state by name  
**DELETE** `/states/name/:stateName`

### 1️⃣3️⃣ Delete states with literacy below percentage  
**DELETE** `/states/low-literacy/:percentage`

---

## 🧪 Sample API URLs

```id="c1vqah"
http://localhost:3002/states
http://localhost:3002/states/7
http://localhost:3002/states/highest-gdp
http://localhost:3002/states
http://localhost:3002/states/5
http://localhost:3002/states/5/budget
http://localhost:3002/states/5/population
http://localhost:3002/states/5/literacy
http://localhost:3002/states/5/gdp
http://localhost:3002/states/name/gujarat
http://localhost:3002/states/low-literacy/70
```


---

## ⚙️ Steps to Run Assignment 2 Locally

```bash id="6e5bn0"
cd assignment-3
npm install
node index.js
```

Server runs at:

```id="0aaxsa"
http://localhost:3002
```

---

## 🌐 Deployed Link

👉 (https://node-assignment-3-3lpp.onrender.com)

## Postman Documentation Link
👉 (https://documenter.getpostman.com/view/50841011/2sBXcHiJv3)

---






## 🧾 Technologies Used

* Node.js
* Express.js

---

## 👨‍💻 Author

Nitish Kumar