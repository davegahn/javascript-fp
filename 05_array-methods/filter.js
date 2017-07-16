const books = require('../books');

function filter(list, fn) {
    let results = [];

    for (let i = 0; i < list.length; i++) {
        let item = list[i];

        if (fn(item)) {
            results.push(item);
        }
    }

    return results;
}

filter(books, book => book.topic === 'javascript').forEach(book => console.log(book.title));
books.filter(book => book.topic === 'javascript').forEach(book => console.log(book.title));