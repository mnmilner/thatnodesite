var http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h1>The Node Stache</h1>');
    res.write('<img src="/TheNode.jpg" height="300px" />');
    res.end('</body></html>');
    
}).listen(process.env.PORT || 8080);