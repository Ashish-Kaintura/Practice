const express = require('express');
const userRoutes = require("../routes/UserRoutes")
const ExpenseRoutes = require("../routes/ExpencseRoutes")
const FormRoutes = require("../routes/FormRoute")
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
app.use("/api/expenses", ExpenseRoutes)
app.use("/api/fromdata", FormRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})