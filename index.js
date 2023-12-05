const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config();

const router = require('./routes/routes.js')

const port = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json(
    {
      "message": "Welcome to the Electricity Billing System API",
      "routes": [
        {
          "route": "/users",
          "methods": [
            "GET",
            "POST"
          ]
        },
        
      ]
    }
  )
})

app.use('/', router);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

module.exports = app;
