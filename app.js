const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');

app.listen(300, () => {
    console.log("Server started on port 3000 great")
});