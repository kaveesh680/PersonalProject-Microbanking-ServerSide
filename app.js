const express = require('express');
const mysql = require('mysql2');

const app = express();
const db = require('./models');

app.get('/', (req, res) => {
    res.send("Hello world");
})

db.sequelize.sync().then((req) => {
    app.listen(8080, () => {
        console.log("Server is running!");
    });
});