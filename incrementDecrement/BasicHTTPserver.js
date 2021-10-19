// Load HTTP module
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

// Create HTTP server and listen on port 3000 for requests
const server = http.createServer((requestObject, responseObject) => {
  // Set the response HTTP header with HTTP status and Content type
  responseObject.statusCode = 200;
  responseObject.setHeader("Content-Type", "text/plain");
  responseObject.end("Hello World\n");
});

// Listen for request on port 3000 and as a callback function have the port listened on logged

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
