import "./BookCard.css";
import { useContext } from "react";
import { UserIDContext } from "../App.js";

const BorrowedBooksCards = ({ book, copy }) => {
  const user = useContext(UserIDContext);
  const borrowedCopy = book[0].copies.filter(
    (copy) => copy.borrower_id === user.data.id
  );
  const dueDate = borrowedCopy[0].due_date;

/*
return(
  <>
    yks kirja<br/>
    toinen kirja<br/>
    kolmas kirja
  </>
);
*/

  return (
    <>
      <div className="bookCard">
        <div className="BookInfo">
          <p>{book[0].author}</p>
          <h2>{book[0].title}</h2>
        </div>
        <div className="bookStatus">
          <h3>
            Borrowed by you until:
            <br />
            {dueDate}
          </h3>
          <button>Return book</button>
        </div>
      </div>
    </>
  );
};

export default BorrowedBooksCards;
