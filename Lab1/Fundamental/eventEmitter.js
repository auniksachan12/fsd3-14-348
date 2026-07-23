import {EventEmitter} from "node:events";
const task=new EventEmitter();
const sayHi=(name)=>{
    console.log(`Loggedin ${name}`);
};
task.on('greet',sayHi);

task.on('greet',()=>{
    console.log("Logged out");
});

task.emit('greet','Aunik sachan');
task.emit('greet','Abhay sachan');

task.once('greet',()=>{
    console.log("System started ....");
});
task.off('exit',()=>{
    console.log(`System is shutting down by ${name}`);
});
task.emit('greet','Aunik sachan');
task.emit('greet','Abhay sachan');  
task.emit('greet','Ayush sachan');
task.emit('exit',"Manager");