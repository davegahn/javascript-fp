function add(x, y) {
    return x + y;
}

function simpleCurry(fn) {
    return function (x) {
        return function (y) {
            return fn(x, y);
        }
    }
}

const addCurry = simpleCurry(add);

let result = addCurry(1)(2);