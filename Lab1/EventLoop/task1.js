let f1=()=>{
    console.log("f1");
};
let f2=()=>{
    console.log("f2");
};
let f3=()=>{
    console.log("f3");
};
function main(){
    console.log("main");
    f1();
    f2();
    f3();
    console.log("end main");
}
main();