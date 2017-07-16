function curry(fn) {
    return function curried(...args) {
        if (args.length < fn.length) {
            return function(...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }

        return fn(...args);
    };
}

function print(mode, prefix, message, line) {
    if (mode === 'LOG') {
        console.log(`${prefix}: ${message} (${line})`);
    } else if (mode === 'INFO') {
        console.info(`${prefix}: ${message} (${line})`);
    } else if (mode === 'WARN') {
        console.warn(`${prefix}: ${message} (${line})`);
    } else if (mode === 'ERROR') {
        console.error(`${prefix}: ${message} (${line})`);
    }
}

const log = curry(print)('LOG')('Сообщение');

log('foo is not defined', 5);
