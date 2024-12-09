// Create web server
// Create a route to the comments page
const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
    res.send('Comments page');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Run the server and navigate to http://localhost:3000/comments
// The Comments page will be displayed in the browser