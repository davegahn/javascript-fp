function loop(i, fn) {
    fn(i);

    if (i > 0) {
        loop(i - 1, fn);
    }
}

function forEach(list, fn) {
    fn(list[0]);
    
    if (list.length > 1) {
        forEach(list.slice(1), fn);
    }
}

loop(10, console.log);

forEach([1, 2, 3, 4, 5], console.log);