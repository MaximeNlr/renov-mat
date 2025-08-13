const User = require('../models/user');
const { sanitize } = require('../utils/sanitize');
const { userIdFromToken } = require('../utils/token');
require('dotenv').config();

exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ _id: req.userId });
        if (!user) {
            return res.status(404).json({success: false, message: 'Utilisateur introuvable !'})
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
      return res.status(500).json({success: false, message: 'Erreur serveur'})
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
    return res.status(500).json({success: false, message: 'Erreur serveur'})
  }
};

exports.uploadAvatar = async (req, res, next) => {
  try {
    req.body = sanitize(req.body, ['_id']);
    const userId = userIdFromToken(req.cookies);
    console.log(req.files);
    
    const filePath = `/images/${req.files[0].filename}`;    
    const user = await User.findByIdAndUpdate(userId, {imageUrl: filePath})

    return res.status(200).json({success: true, user})
  } catch (error) {
    return res.status(500).json({success: false});
  };
};

exports.updateUser = async (req, res, next) => {
  try {
    
  } catch (error) {
    return res.status(500).json({success: false, message: 'Erreur serveur'})
  }
}