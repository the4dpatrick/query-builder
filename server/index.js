const express = require('express')
const app = express()
const PORT = 8080

app.get('/', function (req, res) {
  console.log('Query:', JSON.stringify(req.query, null, 2))
})

app.listen(PORT, function () {
    console.log("listening on port: " + PORT)
})
