const User = require('../models/user');
const bcrypt = require('bcrypt');
require('dotenv').config();
const jwt = require('jsonwebtoken');


exports.signup = async (req, res, next) => {
    try {
      const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[^A-Za-z0-9]).{10,}$/;
      if (!PASSWORD_REGEX.test(req.body.password)) {
        return res.status(400).json({
          passwordErr: 'Mot de passe invalide : min. 10 caractères + 1 chiffre + 1 caractère spécial.'
        });
      }
      const hash = await bcrypt.hash(req.body.password, 10);
      const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        birthday: req.body.birthday,
        adress: req.body.adress,
        gender: req.body.gender,
        email: req.body.email,
        password: hash,
      });

      await user.save();
      res.status(201).json({ success: true, message: 'Utilisateur enregistré !' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({success: false, message: 'Erreur serveur'})
    }
  };

  exports.login = async (req, res, next) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(401).json({ success: false, message: 'email ou mot de passe incorrect !' });
      }
  
      const valid = await bcrypt.compare(req.body.password, user.password);
      if (!valid) {
        return res.status(401).json({ success: false, message: 'email ou mot de passe incorrect !' });
      }
  
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '24h' }
      );
  
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.JWT_SECRET, 
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000
      });
  
      return res.status(200).json({  success: true ,message: 'Utilisateur connecté !' });
    } catch (error) {
      return res.status(500).json({success: false, message: 'Erreur serveur'})
    }
  };

exports.logout = async (req, res, next) => {
    try {
       res.clearCookie('token');
        return res.status(200).json({ sucess: true })
    } catch (error) {
      return res.status(500).json({success: false, message: 'Erreur serveur'})
    }
};