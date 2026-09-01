import { createReadStream } from 'fs';
import http from 'http';
const serv=http.createServer(async(req,res)=>{
    if(req.url=="/"){
        res.setHeader("content-type","text/html");
        req.statusCode=200;
        const stream=createReadStream("./pages/airtag.html",{encoding:"utf-8"});
        stream.pipe(res);
    }
    else if(req.url=="/mobile"){
        res.writeHead(200,{"content-type":"text/json"});
        const stream=createReadStream("./data/product.json",{encoding:"utf-8"});
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


serv.listen(3000,()=>console.log("running prg9"));