const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    const data = `Name: ${name}, Email: ${email}\n`;
    fs.appendFileSync('data.txt', data);
    res.send({ status: 'success' });
});

app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
