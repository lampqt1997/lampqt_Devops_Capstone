const express = require("express");
const app = express();
const port = 30

app.get("/", (req, res) => {
    res.send("Hello World! My name is LamPQT");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
