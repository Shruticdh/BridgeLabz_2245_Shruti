// microtasks are a type of task that has higher priority than other tasks (macrotasks) in the event loop. Microtasks are typically used to handle asynchronous operations that should run immediately after the current code execution completes, but before any pending macrotasks (like setTimeout or setInterval) are processed.

//as promise 
console.log('start');
//macrotask

setTimeout(() => {
    console.log('Macrotask: setTimeout');
}, 0);

//microtask
Promise.resolve().then(() => {
  console.log('Microtask: Promise.then');
});

console.log('end');

//QueueMicrotask
console.log('start');

queueMicrotask(() => {
  console.log('Microtask: queueMicrotask');
});

console.log('end');


