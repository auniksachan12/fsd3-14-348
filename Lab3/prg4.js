import http from "http"
const server=http.createServer((req,res)=>{
    if(req.url=="/product"){
        res.end('<h1>Product  page</h1>');
    }
    else if(req.url=="/cart"){
        res.end('<h1>Cart page</h1>');
    }
    else if(req.url=="/checkout"){
        res.end(`<h1>Checkout page</h1>`);
    }
    else{
        res.end(`<h1>404 - Not found</h1>
            <p>page not found </p>
            <a href="/product">Home</a>`)
    }
    
});
server.listen(4444,()=> console.log("Server is running"));
