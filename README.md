# 🔐 Express.js Password Manager with MySQL

A simple Password Manager web application built using Express.js, EJS, and MySQL.

This project allows users to:

- Store passwords securely in a MySQL database
- View saved passwords
- Organize passwords using categories
- Generate strong passwords
- Manage login credentials for multiple applications

---

# 🚀 Features

- Add new passwords
- View all saved passwords
- Password category support
- MySQL database integration
- EJS templating engine
- Express.js backend
- Password generator page
- Clean folder structure

---

# 🛠️ Tech Stack

- Node.js
- Express.js
- MySQL
- EJS
- HTML/CSS
- dotenv

---

# 📁 Project Structure

```bash
project-folder/
│
├── public/
│   ├── dashboard.html
│   ├── add.html
│   ├── generate.html
│
├── views/
│   └── view.ejs
│
├── db.js
├── index.js
├── .env
├── package.json
└── README.md
```

---

# ⚙️ Installation

## Clone the repository

```bash
git clone <your-repo-link>
```

## Navigate into the project

```bash
cd project-folder
```

## Install dependencies

```bash
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file in the root directory and add:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=password_manager
```

---

# 🗄️ MySQL Table

```sql
CREATE TABLE passwords (
    id INT PRIMARY KEY AUTO_INCREMENT,
    app_name VARCHAR(255),
    category VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255)
);
```

---

# ▶️ Run the Project

```bash
node index.js
```

Server will run on:

```bash
http://localhost:5000
```

---

# 📚 Learning Concepts Used

- Express Routing
- Middleware
- MySQL Queries
- EJS Rendering
- Form Handling
- Environment Variables
- CRUD Basics

---

# 📌 Future Improvements

- Password encryption
- User authentication
- Edit/Delete password
- Search functionality
- Session handling
- Responsive UI

---

# 👨‍💻 Author

Dipak Gupta
