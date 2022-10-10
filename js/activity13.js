function Book(title, author, alreadyRead) {
    this.title = title;
    this.author = author;
    this.alreadyRead = alreadyRead;
}

var book1 = new Book("It Ends with Us", "Colleen Hoover", false);
var book2 = new Book("Harry Potter", "J.K. Rowling", true);
var book3 = new Book("Hard Times", "Charles Dickens", false);
var books = [book1, book2, book3];

for (i = 0; i < books.length; i++) {
    if (books[i].alreadyRead) {
        console.log("You already read " + books[i].title + " by " + books[i].author);
        document.writeln("You already read " + books[i].title + " by " + books[i].author);
        document.writeln("\n");
    } else {
        console.log("You still need to read " + books[i].title + " by " + books[i].author);
        document.writeln("You still need to read " + books[i].title + " by " + books[i].author);
        document.writeln("\n");
    }
}