const books = require('../books');

function map(list, fn) {
    let results = [];

    for (let i = 0; i < list.length; i++) {
        let item = list[i];

        results.push(fn(item));
    }

    return results;
}

let projection = map(books, book => ({ title: book.title, author: book.author }));
let projection = books.map(book => ({ title: book.title, author: book.author }));

console.log(projection);