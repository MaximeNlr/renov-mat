function sanitize(body, toRemove = ['_id', 'user_id']) {
    const sanitized = {...body};
    toRemove.forEach(field => {
        if (field in sanitized) {
            delete sanitized[field]
        };
    });
    return sanitized;
};

module.exports = {sanitize};