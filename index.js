const express = require('express');
const app = express();
const mongoose = require('mongoose');


//Connect to DB
mongoose.connect('mongodb+srv://bharat:Ravi.9700@cluster0-rwwyj.azure.mongodb.net/test',{ useNewUrlParser: true },()=> console.log('Connacted to Database'))

//Import Routes
const authRoute = require('./routes/auth')

app.use(express.json());

// Route Middewares
app.use('/api/user', authRoute);

app.listen(3000,() => console.log('Server up and running'))