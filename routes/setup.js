const routes = require('./routes.js');

const bundle = (app) => {
    routes.forEach((route) => {
        const {
            path,
            method,
            action
        } = route;
        app[method.toLowerCase()](path, action[0]);
    });
};

module.exports = {
    init: (app) => bundle(app)
};
