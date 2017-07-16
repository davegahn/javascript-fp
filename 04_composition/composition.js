function add(x, y) {
    return x + y;
}

function double(x) {
    return x * x;
}

function compose(...funcs) {
    return funcs.reduce((fn1, fn2) => (...args) => fn2(fn1(...args)));
}

function pipe(...funcs) {
    return funcs.reduceRight((fn1, fn2) => (...args) => fn1(fn2(...args)));
}

const addtiply = pipe(add, double);

let result = addtiply(3, 2);

console.log(result);