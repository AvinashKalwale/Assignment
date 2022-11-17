const fs = require("fs")
fs.writeFile("index.html",
        "<h1> Hello World </h1>\n<p> This is Avinash... </p>", (error) => {
            console.log(error)
        }
        // <p> This is Avinash... </p>"
    )

const http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('<h1> Hello World </h1><p> This is Avinash... </p>');
// res.sendFile("index.html")
fs.readFile("./index.html", null, function(error, data){
    if(error){
        res.write("page not found")
    }else{
        res.write(data)
    }
    res.end();  
})

}).listen(5000, ()=> console.log("server running at 5000"));