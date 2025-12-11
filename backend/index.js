const express = require("express")
const app = express()


app.get("/", (req, res) => {
    return res.json({
        messgae: "hello world!!",
        status: true
    })
} )

app.listen(3000, () => {
    console.log("PORT is running on 3000")
})