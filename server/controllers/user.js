const User = require('../models/user');
const bcrypt = require('bcrypt');
const { sanitize } = require('../utils/sanitize');
const { userIdFromToken } = require('../utils/token');
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
      
      res.status(500).json({ error });
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
  
      res.status(200).json({  success: true ,message: 'Utilisateur connecté !' });
    } catch (error) {
      res.status(500).json({ success: false, error });
    }
  };

exports.logout = async (req, res, next) => {
    try {
       res.clearCookie('token');
        res.status(200).json({ sucess: true })
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ _id: req.userId });
        if (!user) {
            return res.status(404).json({success: false, message: 'Utilisateur non trouvé !'})
        } else {
          const date = new Date(user.birthday);
          return res.status(200).json({
            firstname: user.firstname,
            lastname: user.lastname,
            birthday: date.toLocaleDateString('fr'),
            adress: user.adress,
            email: user.email,
            image: user.imageUrl,
            gender: user.gender
        });
        }
    } catch (error) {
        return res.status(500).json({ success: false, error});
    }
};

exports.getSeller = async (req, res, next) => {
  try {
    const user = await User.findOne({_id: req.params.id});
    if (!user) {
      res.status(404).json({  success: false, message: 'Utilisateur introuvable !'})
    } else {
      return res.status(200).json({
        
      })
    }
  } catch (error) {
    res.status(500).json({success: false, error})
  }
};

exports.uploadAvatar = async (req, res, next) => {
  try {
    req.body = sanitize(req.body, ['_id']);
    const userId = userIdFromToken(req.cookies);
    console.log(req.files);
    
    const filePath = `/images/${req.files[0].filename}`;    
    const user = await User.findByIdAndUpdate(userId, {imageUrl: filePath})

    res.status(200).json({success: true, user})
  } catch (error) {
    res.status(500).json({success: false, error: error});
  };
};

exports.updateUser = async (req, res, next) => {
  try {
    
  } catch (error) {
    res.status(500).json({success: false, error})
  }
}