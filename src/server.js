const express = require('express');
const userRoutes = require("../routes/UserRoutes")
const ExpenceRoutes = require("../routes/ExpenceRoutes")
const connectDb = require("../config/db")
const app = express()

require('dotenv').config()
const port = process.env.PORT || 4000

connectDb()
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/api/user", userRoutes)
app.use("/api/expenses", ExpenceRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})