function add(x, y) {
    return x + y;
}

function call(fn, ...args) {
    return fn(...args);
}

let result = call(add, 1, 2);

console.log(result);



function ifElse(condition, trueFn, falseFn) {
    if (condition) {
        trueFn();
    } else {
        falseFn();
    }
}

ifElse(1 === 1, () => console.log(true), () => console.log(false));



function createLogger(prefix, fn) {
    return function logger(...args) {
        fn(prefix, ...args);
    }
}

const log = createLogger('LOG:', console.log);

log('Hello');