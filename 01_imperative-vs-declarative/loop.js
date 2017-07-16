const books = require('../books');

for (let i = 0; i < books.length; i++) {
    let book = books[i];

    console.log(book);
}

for (let book of books) {
    console.log(book);
}

books.forEach(book => console.log(book));