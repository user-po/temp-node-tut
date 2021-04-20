const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Welcome to ouer home page");
  }
  if (req.url == "/about") {
    res.end("Here is the about page");
  }
  res.end(
    `<h1>Oops!<p>We cant't seem to find the page you are looking for</p><a href="/">back home</a></h1>`
  );
});

server.listen(5000);
