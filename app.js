const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// UI ROUTE//
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API ROUTE //
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from API' });
});

// Start Server //
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});