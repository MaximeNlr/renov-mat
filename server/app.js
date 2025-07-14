const express = require('express');
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const adRoutes = require('./routes/ad');
const app = express();

app.use('/images', express.static('images'));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(cookieParser());

app.use('/api/user', userRoutes);
app.use('/api/ad', adRoutes);

module.exports = app;