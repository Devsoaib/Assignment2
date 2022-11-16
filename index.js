let fs = require('fs');
let http = require('http');

let server = http.createServer((req, res)=>{
    if (req.url == '/') {
        fs.readFile('home.html', function(error, data){
            res.writeHead(200, {"content-type": "text/html"});
            res.write(data);
            res.end();
        })
    } 
    else if(req.url == '/about'){
        fs.readFile('about.html', function(error, data){
            res.writeHead(200, {"content-type": "text/html"});
            res.write(data);
            res.end();
        })
    }
    else if(req.url == '/contact'){
        fs.readFile('contact.html', function(error, data){
            res.writeHead(200, {"content-type": "text/html"});
            res.write(data);
            res.end();
        })
    }
    else if(req.url == '/terms'){
        fs.readFile('terms.html', function(error, data){
            res.writeHead(200, {"content-type": "text/html"});
            res.write(data);
            res.end();
        })
    }
});

server.listen(2020);
console.log("success");