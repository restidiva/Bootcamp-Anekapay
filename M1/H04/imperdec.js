var books = [
    {name:'JavaScript', pages:450},
    {name:'Angular', pages:902},
    {name:'Node', pages:732}
];

// Imperative
for (var i =0; i< books.length; i++){
    books[i].lastRead = new Date();
}

// Declarative
books.map((book)=>{
    book.lastRead = 'me';
    return book;
});

console.log(books);