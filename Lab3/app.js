import http from "http"
const server=http.createServer((req,res)=>{
    res.end("<h2>SIH internal</h2>");
});
server.listen(5000,()=>{
    console.log("SIH Server is running");
});