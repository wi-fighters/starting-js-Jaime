const myBooks = [
    {
        title: "The Great Gatsby",
        author: "F.Scott Fitzgerald",
        alreadyRead: false
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        alreadyRead: false
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K.Rowling",
        alreadyRead: true
    },
    {
        title: "1984",
        author: "George Orwell",
        alreadyRead: true
    },
];

for (let i = 0; i < myBooks.length; ++i) {
    console.log(`${myBooks[i].title} by ${myBooks[i].author}`)
}
