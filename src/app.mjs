import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { connectDB } from '../config.mjs';
import { getUsersWithCursor  } from './models/User.mjs';


const app = express();
const PORT = 3000;

// Підключення до бази даних
connectDB();

app.get('/', (req, res) => {
  res.send('Get root route23');
});

app.get('/users', async (req, res) => {
  try {
    const cursor = await getUsersWithCursor();
    const users = [];
    
    await cursor.forEach(user => {
      users.push(user);
    });
    
    res.status(200).json(users);
  } catch (err) {
    console.error("Error fetching users with cursor:", err);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});