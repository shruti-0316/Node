const http = require("http");

const server = http.createServer((req,resp)=>{
    //req : request process
    //resp : for writing response

    resp.writeHead(200, {'content-type': 'text/html'});
    resp.write("<h1> this is response from first server </h1>");
    resp.write("<button> click me </button>");
    resp.end('Ok bye');
    //resp.write("<button> click me </button>");//it willnot print but throw error
});

server.listen(3700)


//custome module call
const myfun = require('./customeModule');
const avg = myfun(1,3,4);
console.log(avg);