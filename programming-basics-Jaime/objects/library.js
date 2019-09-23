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
    if (myBooks[i].alreadyRead === true) {
        console.log(`You've already read ${myBooks[i].title} by ${myBooks[i].author}`)
    } else {
        console.log(`You still need to read ${myBooks[i].title} by ${myBooks[i].author}`)
    }
}
