const express = require('express');
const { dirname } = require('path');
const path = require('path');

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"))
})

console.log(__dirname)




port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`app listening on ${port}`)
})