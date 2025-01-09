// print all the properties of given object

let book1 = {Sno : 1 , book : "Untouchable" , author : "Mulk Raj Anand" , found(){
    console.log(`Found ${this.book}`)
}};

let book2 = {Sno : 2 ,book : "Train to Pakistan" , author : "Kushwant Singh" , found(){
    console.log(`Found ${this.book}`)
}};

let book3 = {Sno : 3 , book : "godan" ,author : "Munshi Premchand" , found(){
    console.log(`Found ${this.book}`)
}};

let book4 = {Sno : 4 , book : "Romeo and Juliet" , author : "William Shakespeare" , found(){
    console.log(`Found ${this.book}`)
}};

console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);

book1.found();

function countProperties(book1) {
    console.log(Object.keys(book1).length);
}
countProperties(book1);


let books = [book1, book2, book3, book4];

function TotalBooks(books) {
    console.log(`Total number of books: ${books.length}`);
}
TotalBooks(books);

function AllBooks(books) {
    console.log("Listing all books:");
    books.forEach(book => {
      console.log(`Book: ${book.book}, Author: ${book.author}`);
    });
  }
AllBooks(books);

function isBookFound(book) {
    if (book.found) {
      book.found();
    } else {
      console.log("Book not found");
    }
  }
isBookFound(book3);




