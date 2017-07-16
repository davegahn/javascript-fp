function add(x, y) {
    return x + y;
}

function bind(fn, x) {
    return function(y) {
        return fn(x, y);
    }
}

const add2To = bind(add, 2);

console.log(add2To(2));

const add3To = add.bind(null, 3);

console.log(add3To(4));