const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // In a real application, you would validate the username and password here.
    // For this example, we'll just simulate a successful login.
    if (username && password) {
        const user = { username };
        const accessToken = jwt.sign(user, 'your_secret_key');
        res.json({ accessToken });
    } else {
        res.send('Username and password are required');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
