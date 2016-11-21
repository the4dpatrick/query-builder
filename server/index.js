const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8080

app.use(cors())

app.get('/', function (req, res) {
  console.log('Query:', JSON.stringify(req.query, null, 2))
  res.send('Success')
})

app.listen(PORT, function () {
  console.log("listening on port: " + PORT)
})
