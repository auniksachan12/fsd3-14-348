// JavaScript is synchronus and singlethreaded

const f1 = () => {   //Synchronus calling by forming stack 
  console.log("f1 starts");
  f2();
  console.log("f1 running");
  console.log("f1 end");
};
const f2 = () => {
  console.log("f2 starts");
  f3();
  console.log("f2 running");
  console.log("f2 ends");
};
const f3 = () => {
  console.log("f3 starts");
  console.log("f3 running");
  console.log("f3 end");
};
function main() {
  console.log("main starts");
  f1();
  console.log("end main");
}
main();


// In asynchronous calling we use event loop to manage call stack   

// Asynchronus call using timers-
// 1- setTimeout 
// 2- setImmediate
// 3- process.nextTick
// 4- setInterval