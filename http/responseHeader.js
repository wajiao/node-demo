module.exports = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'X-foo': 'foo'
    });
    res.end('Hello World!\r\n');
};
