const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/tasks')

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(3031,() => {
    console.log('The port is 3031!')
})