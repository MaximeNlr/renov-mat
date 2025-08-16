const Joi = require('joi')

const adValidationSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    type: Joi.string().valid(
        'Revetement', 'Bois', 'Isolation', 'Peinture', 'Plomberie',
         'Electricité', 'Fenetre', 'Jardin', 'Chauffage', 'Outil', 'Maconnerie', 'Autre'
    ).required(),
    quantity: Joi.number().min(1).required(),
    unit: Joi.string().valid(
        'm2', 'ml', 'm3', 'l', 'kg', 'u', 'lot', 'sac', 'plaque', 'autre'
    ).required(),
    price: Joi.number().min(1).required(),
    state: Joi.string().valid(
        'mauvais', 'moyen', 'bon', 'très bon', 'neuf'
    ).required(),
    description: Joi.string().min(10).required(),
});

module.exports = adValidationSchema;