const books = require('../books');

function forEach(list, fn) {
    for (let i = 0; i < list.length; i++) {
        let item = list[i];

        fn(item);
    }
}

forEach(books, book => console.log(book.title));
books.forEach(book => console.log(book.title));