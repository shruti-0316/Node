const fs = require("fs");
const http = require("http");
const url = require("url");

const server = http.createServer((req,resp) => {


    //getting the path name
    const path = req.url;


    if(path=='/about'){
        
        //console.log('"about page"');
        
        resp.writeHead(200,{'content-type':'text/html'})
        
        const fileContent = fs.readFileSync('./views/about.html');
        resp.write(fileContent);
    }
    else if(path=='/'){
        console.log("home page");

        resp.writeHead(200,{'content-type':'text/html'});

        const fileContent1 = fs.readFileSync('./views/home.html');
        resp.write(fileContent1);
    }
    else if(path=='/contact'){
        console.log("contact page");
    }
    else if(path=='/services'){
        console.log("services page");
    }

});

server.listen(8081);