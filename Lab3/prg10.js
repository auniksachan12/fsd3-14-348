import http from "http"
const server=http.createServer((req,res)=>{
    console.log("method:",req.method)
    if(req.url==="/"&&req.method==="GET"){
        res.end("<h1>Products details</h1>")
        stream.pipe(res);
    }
    
    else if(req.url=="/manual"){
            res.writeHead(200,{"content-type":"text/txt"});
            const stream=createReadStream("./data/text.txt",{encoding:"utf-8"});
             stream.pipe(res);
        }
        else{
            req.statusCode=404;
            res.end("not found");
        }
    });

server.listen(4444,()=> console.log("prg10 is running"));
