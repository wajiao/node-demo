const url = require('url');
// const querystring = require('querystring');

module.exports = (req, res) => {
    let pathName = url.parse(req.url).pathname;
    // let queryString = querystring.parse(url.parse(req.url));
    let paths = pathName.split('/');

    let controller = paths[1] || 'index';

    let action = paths[2] || 'index';

    var args = paths.slice(3);

    console.log(args);

    if (handles[controller] && handles[controller][action]) {
        handles[controller][action].apply(null, [req, res].concat([args]));
    }

    res.end();
};

const handles = {
    controller: {}
};

handles.controller.action = (req, res, args) => {
    console.log('controller action:');
    console.log(args);
    res.writeHead(200);
    res.end();
}
