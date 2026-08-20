import { log } from "console";
import http from "http"
const server=http.createServer((req,res)=>{
    console.log("Welcome to Node JS");                   
    res.end("<h2>welcome to server side programming</h2>");                                               
    console.log(req.url);  
    console.log(req.method);
    console.log("Request header:");
    console.log(req.headers);
    console.log("Socket info");
    console.log(req.socket);
    console.log(req.headers.host);
});
const PORT=4444;
server.listen(PORT,()=> console.log("Server is running..."));
