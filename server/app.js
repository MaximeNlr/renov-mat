const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const adRoutes = require('./routes/ad');
const passport = require('passport')
const session = require('express-session')
const googleStrategy = require('passport-google-oauth20').Strategy
const app = express();
require('dotenv').config();


const allowedOrigins = [
  "http://localhost:5173", 
  "https://renov-mat.vercel.app"
];

app.use(cors({
  origin: function(origin, callback){
    if(!origin || allowedOrigins.includes(origin)){
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use('/images', express.static('images'));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

    

// app.use(
//   session({
//     secret: "secret",
//     resave: false,
//     saveUninitialized: true,
//   })
// )

// app.use(passport.initialize());
// app.use(passport.session())
app.use(cookieParser());

app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes);
app.use('/api/ad', adRoutes);

module.exports = app;