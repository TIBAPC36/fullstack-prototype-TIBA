const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'your-very-secure-secret';

app.use(cors({
    origin: ['https://127.0.8.1:5500', 'http://localhost:5500']
}));

app.use(express.json());

let users = [
    { id: 1, username: 'admin', password:'$2a$10$...', role: 'admin' },
    { id: 1, username: 'alice', password:'$2a$10$...', role: 'user' }

];

if (!users[0].password.includes('2a$')) {
   users[0].password = bcrypt.hashSync('admin123', 10);
   users[1].password = bcrypt.hashSync('user123', 10);

}

app.post('/api/register', async (req,res) => {
   const { username, password, role = 'user' } = req.body;

if (!username || !password) {
   return res.status(400).json({ error: 'Username and password required'});
    
}
});

const existing = users.find(u => u.username === username);
if (existing)  {
    return res.status(408).json({ error: 'User already exists' });

}

const hashedPassword = await bcrypt.hash (password, 10);
const newUser = {
    id: users.lenght + 1,
    username, 
    hashedPassword,
    role
};

users.push(newUser);
res.c
    



    







