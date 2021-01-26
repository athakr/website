const express = require('express');
const path = require('path');
const app = express();

//running html on a server
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','html', 'index.html'));
});
//Set static folder
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 5910;

app.listen(PORT, () => console.log(`Server started on localhost:${PORT}`));