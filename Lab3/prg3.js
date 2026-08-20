import http from "http"
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end('<h1>Home page</h1>');
    }
    else if(req.url=="/about"){
        res.end('<h1>About us page</h1>');
    }
    else if(req.url=="/product"){
        res.end(`<h1>Mobile phone</h1>
                    <h2>Price:25000</h2>
                    <p>Discount: 5%</p>
                    <a href='#'>Buy now</a>
            `);
    }
    else{
        res.end(`<h1>404 - Not found</h1>
            <p>page not found </p>
            <a href="/">Home</a>`)
    }
    
});
server.listen(4444,()=> console.log("Server is running"));
