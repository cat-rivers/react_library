import "./BookCard.css";
import { useContext } from "react";
import { UserIDContext } from "../App.js";
import { editBook, editUser } from "../services/servicesBooks";

const BorrowedBooksCard = ({ book }) => {
  const user = useContext(UserIDContext);
  const borrowedCopy = book[0].copies.filter(
    (copy) => copy.borrower_id === user.data.id
  );
  const dueDate = borrowedCopy[0].due_date;
  const copyId = borrowedCopy[0].id;
  const bookIsLate = (new Date() > new Date(dueDate));
  
  const removeBookCard = () => {
    let bookTemp = book[0];
    bookTemp.copies = bookTemp.copies.map((bookCopy) =>
      bookCopy["id"].toString() !== copyId.toString()
        ? bookCopy
        : {
            ...bookCopy,
            status: "in_library",
            borrower_id: null,
            due_date: null,
          }
    );
    editBook(bookTemp, book[0].id);

    let userTemp = user.data;
    userTemp.books_currently = userTemp.books_currently.filter(
      (b) => b["id"].toString() !== copyId.toString()
    );
    userTemp.books_history.push({ id: book[0].id }); // Book history has the book id, not a book copy id!
    user.set({ ...userTemp }); // The spread will re-render the page.
    editUser(userTemp, userTemp.id);
  };

  const renewBookLoan = () => {
    console.log("RENEW")
  }


  return (
    <div key={book[0].id} className="borrowedBook">
      <h3>{book[0].title}</h3>
      <p>
        {book[0].author}
        <br />
        Due date: {dueDate.substring(0, 10)}
        {bookIsLate &&
          <div className="lateWarning">PAST DUE DATE - Renew or return!</div>
        }
      </p>
      <button className="returnButton" onClick={removeBookCard}>
        Return book
      </button>
      <button className="renewButton" onClick={renewBookLoan}>
        Renew
      </button>
    </div>
  );
};

export default BorrowedBooksCard;
