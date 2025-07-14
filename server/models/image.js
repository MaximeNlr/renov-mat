const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    imageUrl: {type: String, required: true},
    ad_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Ad', required: true }
});

module.exports = mongoose.model('Image', imageSchema)