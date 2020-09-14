// server imports
const express = require('express')
const ejs = require('ejs')
const path = require('path')
const body_parser = require('body-parser')

// route imports
const router = require('./routes/index')

// initialise server
const app = express()
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))
app.use('/static', express.static(path.join(__dirname, 'static')))
app.set('views', __dirname + '/views')
app.engine('html', ejs.renderFile)

// initialise routes
app.use('/', router)

// start server
var PORT = process.env.PORT
if(PORT == null || PORT == "")
    PORT = 8000

app.listen(PORT, () => {
    console.log(`Server is live at http://localhost:${PORT}`)
})
