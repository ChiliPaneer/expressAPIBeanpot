let express = require('express');
let path = require('path');
let cors = require('cors')
let cookieParser = require('cookie-parser');

// database
let mongoose = require('mongoose');
let mongoDB = 'mongodb://localhost/my_db';
mongoose.connect(mongoDB);

let app = express();

// some config stuff
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());



// routes

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');


//api
app.use('/', indexRouter);
app.use('/users', usersRouter);

// instantiate the server loop
let port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// module.exports = app;
