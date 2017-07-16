const books = require('../books');

function reduce(list, reducer, initialValue) {
    let accumulator = initialValue;

    list.forEach(item => accumulator = reducer(accumulator, item));

    return accumulator;
}

let booksByTopic = reduce(books, (store, book) => {
    if (!Array.isArray(store[book.topic])) {
        store[book.topic] = [];
    }

    store[book.topic].push(book);

    return store;
}, {});

// let booksByTopic = books.reduce((store, book) => {
//     if (!Array.isArray(store[book.topic])) {
//         store[book.topic] = [];
//     }

//     store[book.topic].push(book);

//     return store;
// }, {});

console.log(booksByTopic);