const url = require('url');

module.exports = (req, res) => {
    switch (req.method) {
        case 'POST':

            break;
        case 'GET':
            console.log(req.url);
            console.log(url.parse(req.url));
            break;
        default:

    }
    res.end();
};
