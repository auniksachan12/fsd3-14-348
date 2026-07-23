// Write a function to take your name and print it with hello message
function sayHello(name){
    console.log(`Hello ${name}`);
}
const sayHi=(name)=>{
    console.log(`Hello ${name}`);
}
sayHello("Aunik sachan");
sayHi("Abhay sachan");


// Take 3 arguments and return their sum
function add(a,b,c){
    console.log(a+b+c);
}
const sum=(a,b,c)=>{
    return a+b+c;
}
const findsum=(a,b,c)=>a+b+c;
add(2,8,10);
console.log(sum(10,20,30));
console.log(findsum(1,2,3));


