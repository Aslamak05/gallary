const express = require('express');
const mongoose = require('./mongodb'); // not ./mongoose
const app = express();
const cors = require('cors'); // import cors
app.use(cors()); // enable CORS

const port = 5000;

app.use(express.json());

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
});


const User = mongoose.model("User", userSchema);


app.post('/signup', async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    const newUser = new User({ name, email, password, confirmPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving user", error: err });
  }
});

// Login route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check password
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Success
    res.status(200).json({ message: "Login successful!" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Login failed", error: err });
  }
});



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
