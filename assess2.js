const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];

//Create a function called getAvailableBooks that returns an array of all available books.

function getAvailableBooks(books){
    let available=[]
    for (b in books){
        if (books.isAvailable==true){
            return available.push(bookObj.title)
        }
    }
}
console.log("Q1",getAvailableBooks(books));


// Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.
function getBooksByAuthor(books){
    let authorlist=[];
    let accessAuthors=books.map(authorlist.push(books.author))
    return accessAuthors
}
console.log(getBooksByAuthor("Q2",books));

// 3. Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).

function addNewBook(books){
    let newBook=[];
    let add=books.title="Light the Dark"
    let add2=books.author='Sidney Sheldon'
    let add3=books.publicationYear=1999
    let add4=books.isAvailable=true
    console.log("Q3",newBook.push(add.concat(add2))); 
 }
 addNewBook(books);
// 4. Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
function bookObj(books){
    books.title(function checkoutBook(){
          if (books.isAvailable==true){
            books.isAvailable==false
          }
          else{
            return "The book is not available"
          }
    })
}   
console.log(bookObj(books));

// Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.
function booksObj(books){
    books.title(function returnBook(){
          if (books.isAvailable==false){
            books.isAvailable==true;
          }})
   return "The book is does not belong to the library"   
}   
console.log(booksObj(books));