const http = require("http");
const url = require("url");
 
//url.parse() used to get the url from browser
const server = http.createServer((req,resp) =>{
    console.log(req.url); //localhost:3890/search search is url

    const urlOb = url.parse(req.url,true);
    console.log(urlOb);
    console.log("keyword" + urlOb.query.keywords);
    console.log("city" + urlOb.query.city);
    resp.write("<h1>this is brower</h1>");
});

server.listen(3890);