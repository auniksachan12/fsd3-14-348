import {EventEmitter} from "node:events";
const sayHi=(name)=>{
    console.log(`${name} logged in`);
};
const task=new EventEmitter();
task.on('greet',sayHi);
task.on('greet',(name)=>{
    console.log(`${name} starts working`);
});
task.once('greet',(name)=>{
    console.log(`${name} is a one-time user`);
});
task.on('greet',(name)=>{
    console.log(`${name} stops working`);
});
task.once('exit',(name)=>{
    console.log(`${name} is shutting down the system`);
});
task.emit('greet',"Aunik sachan");
task.off('greet',sayHi);   //must have function
task.emit('greet',"Abhay sachan");
task.emit('greet',"Aunik sachan");
task.emit('exit',"Manager");

console.log("Total listner",task.listenerCount("greet"));
task.removeAllListeners("greet");



// task.once('break',(name)=>{
//     console.log(`${name} in break`);
// });
// task.emit('break',"Atharv sachan");
