const express = require('express');
const cors = require('cors');
const router = require('./routes');


const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router)

app.use((req , res) => {
    res.status(404).json({
        success : false,
        message : "Route not found"
    })
})


module.exports = app