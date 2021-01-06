// if(process.env.NODE_ENV === 'development'){
//     require('dotenv').config()
// } 
require('dotenv').config()
const express = require('express');
const Golf = require('./models/golfSchema.js');
const golfsController = require('./controllers/golfs.js')
const app = express();
const cors = require('cors');
// const methodOverride  = require('method-overide');
const mongoose = require ('mongoose');
const db = mongoose.connection;
const PORT = 3000;

const MONGODB_URI = process.env.MONGODB_URI; // <= Heroku

app.use(cors());
app.use(express.json());


// Connect to Mongo
mongoose.connect(MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: true
});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});


//___________________
//Middleware
//___________________
app.use('/golfs', golfsController);
//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
// app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

// Setup view engine
// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static('public'));

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});


app.get('/', (req, res) => {
    res.send('Hello')
})







app.listen(PORT, () => console.log('Listening on port:', PORT));