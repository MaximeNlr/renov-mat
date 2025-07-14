const mongoose = require('mongoose');

const SellerSchema = mongoose.Schema({
    verifiedEmail: {type: Boolean, default: false},
    verifiedPhone: {type: Boolean, default: false},
    follower: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true }
});

module.exports = mongoose.model('Seller', SellerSchema);