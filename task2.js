let interval = setInterval(() => { console.log('( #6 Set Interval queue )'); clearInterval(interval)});

setImmediate(() => console.log('( #9 setImmediate )'));

setTimeout(() => console.log('( #7 )'));

process.nextTick(() => console.log('( #5 process.nexTick )'));

console.log('( #1 I/O Event )');

let myPromise = () => new Promise((resolve) => setTimeout(() => { console.log('( #8 timeout inside promise )'); resolve()}));
let myPromise2 = () => new Promise((resolve) => { console.log('( #3 executing promise2 function, then resolve )'); resolve()} );


myPromise().then(console.log('( #2 Microtasks queue )'));
myPromise2().then(console.log('( #4 Microtasks queue | resolve promise2 )'));
