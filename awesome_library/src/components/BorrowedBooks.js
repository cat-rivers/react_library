import BorrowedBooksCards from "./BorrowedBooksCards.js";
import { useEffect, useContext, useState } from "react";
import { UserIDContext } from "../App.js";
import { getAllBooks } from "../services/servicesBooks.js";

const BorrowedBooks = () => {
  const user = useContext(UserIDContext);
  const [borrowedBooks, setBorrowedBooks] = useState([]); 

  //h testaa
/*
  const [b, setB] = useState();
  useEffect(() => {
    user.data.BorrowedBooks.array.forEach(element => {
      
    });
    getBook(1).then(bk => { setB(bk) });


    //setTheArray(oldArray => [...oldArray, newElement]);
    setBorrowedBooks([...borrowedBooks, newElement]);

  },[]);
  */
  
  useEffect(() => {

    getAllBooks().then(books => {

      console.log(books)        
      })
      /*
        setBorrowedBooks(
          books.filter(b => 
            (b.copies.borrower_id === user.id))
        )
    */
    

  }, []);

//console.log(borrowedBooks);


  // const bookDetails = [];

  /*
  const borrowedBooks = user.data.books_currently.map((borrowedBook) =>
    bookDetails.filter((book) =>
      book.copies.some((copy) => copy.id == borrowedBook.id)
    )
  );
*/
/*
let borrowedBooks = [];
  
  user.data.books_currently.forEach(book => {
    borrowedBooks.push(getBook(book.id));
  });

  useEffect(() => {
    user.data.books_currently.forEach(book => {
      borrowedBooks.push(getBook(book.id));
    });
  

  }, []);




console.log("user: "+user.data.name);
console.log(borrowedBooks);
console.log('-----------------');
*/

//console.log("b cur: "+user.data.books_currently[0].id);
  //console.log("lainat: "+borrowedBooks);
/*
  const borrowedBookList = borrowedBooks.map((book) => {
    return <BorrowedBooksCards key={book.isbn} book={book} />;
  });
*/
  
  const borrowedBookList = () => {
    return(
      <>
      yks kirja<br/>
      toinen kirja<br/>
      kolmas kirja
    </>
    );
  }

  // we will scroll the page instead
  //<div className="search-section" style = {{ overflowY: "auto", height: "60vh" }}>

  return (
    <>
      { user.data.books_currently.length === 0
      ? <p>You currently don't have any borrowed books.</p>
      : <>
          <h4>Your books:</h4>
          <div className = "search-section"> {borrowedBookList()} </div>
        </>
      }
    </>
  );
};

export default BorrowedBooks;
