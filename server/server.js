var express = require('express')
app = express()

port = process.env.PORT || 5001

mongoose = require('mongoose')
Product = require('./api/models/productsModel')
Contact = require('./api/models/contactListModel')

bodyParser = require('body-parser')

mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://ning:1234@cluster0.fjjhd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function(error){
    if(error) throw error
    console.log('Successfully connected');
})

const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

var routes = require('./api/routes/productsRoutes')
var routescontact = require('./api/routes/contactListRoutes')

routes(app)
routescontact(app)

app.listen(port)
console.log('Product List API started on : http://localhost:'+ port)