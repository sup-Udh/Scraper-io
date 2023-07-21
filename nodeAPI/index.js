const express = require('express');
const app = express();
const axios = require('axios');



app.get('/', (req, res) => {
    res.send('Hello World');
}
);

app.listen(3001, () => {
    console.log('Server is running at port 3001');
})