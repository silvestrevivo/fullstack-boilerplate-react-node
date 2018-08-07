'use strict';

var util = require('util');

module.exports = {
    hello: (req, res) => {
        const name = req.swagger.params.name.value || 'stranger',
            hello = util.format('Hello, %s!', name);

        res.json(hello);
    }
};
