const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'client/build')));
app.use('/dayside', express.static(path.join(__dirname, 'client/build/dayside')));
app.get('/dayside', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/dayside/index.php'));
});

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

const edit = require('./routes/edit');
const tasks = require('./routes/tasks');
const login = require('./routes/login');
const register = require('./routes/register');

// Use Routes
app.use('/', tasks);
app.use('/tasks', tasks);
app.use('/create', tasks);
app.use('/login', login);
app.use('/register', register);
app.use('/edit', edit);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './client/build/index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`app listening on port ${port}!`));