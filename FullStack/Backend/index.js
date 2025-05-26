// const express = require("express");
// const cors = require("cors");
// const fs = require("fs");
// const path = require("path");


// const app = express();
// const PORT = 4000;

// // ✅ Explicit CORS configuration for React frontend
// app.use(cors({
//   origin: "http://localhost:5173",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type"]
// }));

// // ✅ Middleware to parse JSON request bodies
// app.use(express.json());

// // ✅ File path to store user data
// const filePath = path.join(__dirname, "data.json");

// // ✅ Load users from file
// const loadUsersFromFile = () => {
//   try {
//     if (fs.existsSync(filePath)) {
//       const data = fs.readFileSync(filePath, "utf8");
//       return data ? JSON.parse(data) : [];
//     }
//     return [];
//   } catch (err) {
//     console.error("Error reading file:", err);
//     return [];
//   }
// };

// // ✅ Save users to file
// const saveUsersToFile = (users) => {
//   try {
//     fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
//   } catch (err) {
//     console.error("Error writing file:", err);
//   }
// };

// // ✅ POST API: Add a new user and save to file
// app.post("/user", (req, res) => {
//   const { name, email, phone, city } = req.body;

//   if (!name || !email || !phone || !city) {
//     return res.status(400).json({ error: "All fields are required." });
//   }

//   const newUser = { name, email, phone, city };
//   const users = loadUsersFromFile();

//   users.push(newUser);
//   saveUsersToFile(users);

//   res.status(201).json({ message: "User saved!", user: newUser });
// });

// // ✅ GET API: Retrieve all users from file
// app.get("/user", (req, res) => {
//   const users = loadUsersFromFile();
//   res.json(users);
// });

// // ✅ Start the server
// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });


const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 4000;

// ✅ CORS Setup: Allow frontend (React) at port 5173
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

// ✅ Middleware: JSON parser
app.use(express.json());

// ✅ Path for storing data
const filePath = path.join(__dirname, "data.json");

// ✅ Load users from file
const loadUsersFromFile = () => {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf8");
      return data ? JSON.parse(data) : [];
    }
    return [];
  } catch (err) {
    console.error("Error reading file:", err);
    return [];
  }
};

// ✅ Save users to file
const saveUsersToFile = (users) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  } catch (err) {
    console.error("Error writing file:", err);
  }
};

// ✅ POST API: Add a new user
app.post("/user", (req, res) => {
  const { name, email, phone, city } = req.body;

  if (!name || !email || !phone || !city) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const users = loadUsersFromFile();
  const existingUser = users.find(user => user.email === email);

  if (existingUser) {
    return res.status(409).json({ error: "User with this email already exists." });
  }

  const newUser = { name, email, phone, city };
  users.push(newUser);
  saveUsersToFile(users);

  res.status(201).json({ message: "User saved!", user: newUser });
});

// ✅ GET API: Retrieve all users
app.get("/user", (req, res) => {
  const users = loadUsersFromFile();
  res.json(users);
});

// ✅ PUT API: Update user by email
app.put("/user/:email", (req, res) => {
  const email = req.params.email;
  const updatedData = req.body;

  const users = loadUsersFromFile();
  const index = users.findIndex(user => user.email === email);

  if (index === -1) {
    return res.status(404).json({ error: "User not found." });
  }

  users[index] = { ...users[index], ...updatedData };
  saveUsersToFile(users);

  res.json({ message: "User updated successfully.", user: users[index] });
});

// ✅ DELETE API: Delete user by email
app.delete("/user/:email", (req, res) => {
  const email = req.params.email;

  const users = loadUsersFromFile();
  const filteredUsers = users.filter(user => user.email !== email);

  if (filteredUsers.length === users.length) {
    return res.status(404).json({ error: "User not found." });
  }

  saveUsersToFile(filteredUsers);
  res.json({ message: "User deleted successfully." });
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
