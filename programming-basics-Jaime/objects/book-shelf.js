class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    getTitle() {
        return `Title: ${this.title}`;
    }

    getAuthor() {
        return `Author: ${this.author}`;
    }
}

const PP = new Book("Pride and Prejudice", "Jane Austen");
const H = new Book("Hamlet", "William Shakespeare");
const WP = new Book("War and Peace", "Leo Tolstoy");

console.log(PP.title);
console.log(PP.author);
console.log(PP.getTitle());
console.log(PP.getAuthor());

console.log(H.title);
console.log(H.author);
console.log(H.getTitle());
console.log(H.getAuthor());

console.log(WP.title);
console.log(WP.author);
console.log(WP.getTitle());
console.log(WP.getAuthor());