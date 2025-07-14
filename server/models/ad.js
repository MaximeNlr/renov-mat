const mongoose = require('mongoose');

const AdSchema = mongoose.Schema({
    title: {type: String, required: true},
    type: {type: String, enum: [
        'Revetement', 'Bois', 'Isolation', 'Peinture', 'Plomberie', 'Electricité', 'Fenetre', 'Jardin', 'Chauffage', 'Outil', 'Maconnerie', 'Autre'
    ]},
    quantity: {type: Number, required: true},
    unit: {type: String, enum: ['m2', 'ml', 'm3', 'l', 'kg', 'u', 'lot', 'sac', 'plaque', 'autre'], required: true},
    price: {type: Number, required: true},
    state: {type: String, enum: ['mauvais', 'moyen', 'bon', 'très bon', 'neuf']},
    description: {type: String, required: true},
    images: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Image' }],
    seller_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Seller', required: true }
});

module.exports = mongoose.model('ad', AdSchema);