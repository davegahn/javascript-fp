// Задача: результат вызова add отправить в double.

function add(x, y) {
    return x + y;
}

function double(x) {
    return x * x;
}

double(add(3, 2));

// Автомитизируем этот процесс

// compose(a, b, c) == (...args) => a(b(c(...args)))
// Функции выполняются в обратном порядке: сначала c -> b -> a. Функция c может принимать несколько аргументов, т.к. она выполняется первой.
// Все последующие фукнции должны принимать только один аргумент, т.к. их аргументом будет результат вызова прервыдующей фукнции.
function compose(...funcs) {
    return funcs.reduce((fn1, fn2) => (...args) => fn1(fn2(...args)));
}

// pipe(a, b, c) == (...args) => c(b(a(...args)))
// Функции выполняются в порядке передачи: сначала a -> b -> c. Функция a может принимать несколько аргументов, т.к. она выполняется первой.
// Все последующие фукнции должны принимать только один аргумент, т.к. их аргументом будет результат вызова прервыдующей фукнции.
function pipe(...funcs) {
    return funcs.reduceRight((fn1, fn2) => (...args) => fn1(fn2(...args)));
}

const doubleAdd = compose(add, double); // (...args) => add(double(...args))
const addDouble = pipe(add, double); // (...args) => double(add(...args))

// ВНИМАНИЕ: Здесь ошибка. Сначала вызывается double(3) и далее результат, т.е. 9,
// отправляется в add, которая ожидает два аргумента, а получает один - add(9, undefined)
console.log('doubleAdd', doubleAdd(3)); // (3) => add(double(3)) === NaN

// Здесь все правильно. Сначала вызывается add(3, 2) и далее результат, т.е. 5,
// отправляется в double(5)
console.log('addDouble', addDouble(3, 2)); // (3, 2) => double(add(3, 2)) === 25
