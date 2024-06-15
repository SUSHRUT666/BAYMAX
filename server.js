const express = require('express')
const cors = require('cors')
const app = express()

require("dotenv").config()

const PORT = process.env.PORT || 3000

const corsOptions = {
    origin: "http://localhost:5502",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
}

app.use(cors(corsOptions))

app.use(express.json())

//mounting of routers
const user = require("./routes/user")
app.use("/bay", user)

//start the server
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})

//connection with database
const dbConnect = require("./config/database")
dbConnect()

//default router
app.get('/', (req,res) => {
    res.send(`<h1> This is a Healthcare app`)
})

