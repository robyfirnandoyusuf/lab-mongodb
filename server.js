const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const dbUrl = 'mongodb://localhost:27017/vulnerablemean';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: db })
}));

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const blogController = require('./controllers/blogController');
const dashboardController = require('./controllers/dashboardController');
const aboutController = require('./controllers/aboutController');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
app.use('/', homeController);
app.use('/dashboard', dashboardController);
app.use('/auth', authController);
app.use('/blog', blogController);
app.use('/about', aboutController);

app.listen(3000, () => console.log('Server running on port 3000'));
