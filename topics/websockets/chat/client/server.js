const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

// folder for website
const website = "./website";

// content types to tell the browser the type of the resource
const contentTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
};

// create server with request handler
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // setup path
  let pathname = url.parse(req.url).pathname;

  // disable traversing filesystem
  pathname = pathname.replace("..", " ");

  // serve index.html for /
  if (pathname === "/") {
    pathname = "index.html";
  }
  let filePath = path.join(__dirname, website, pathname);

  // read file
  fs.readFile(filePath, (err, data) => {
    // something went wrong
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("error: " + err);
      return;
    }

    // find content type
    let extension = path.extname(pathname);
    let contentType = contentTypes[extension];
    if (!contentType) {
      contentType = contentTypes[".html"];
    }

    // return data
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
});

// start listening
console.log("listening on 0.0.0.0:8000");
server.listen(8000, "0.0.0.0");
