// packages that we just installed
const express = require('express')
const bodyParser = require('body-parser')

const cors = require('cors')

// port where express will be running (REST server)
const PORT = 3000
// creation instance of express
const app = express()
// 
const api = require('./routes/api')
app.use(cors())

// specify body parser to handle body data
app.use(bodyParser.json())
// add scpecification to use routes/api
app.use('/api', api)

// test
app.get('/', function(req, res){
    res.send('Hello from server')
})

app.listen(PORT, function(){
    console.log('Server running on localhost: ' + PORT)
})