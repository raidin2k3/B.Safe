const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  fs.createReadStream('./loginpage.html', (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write('File not found');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
    }
    res.end();
  });
});
server.listen(3000, () => {
  console.log('Server running on port 3000');
});