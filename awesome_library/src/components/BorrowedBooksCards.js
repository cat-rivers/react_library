import "./BookCard.css";
import { useContext } from "react";
import { UserIDContext } from "../App.js";

const BorrowedBooksCards = ({ book }) => {
  const user = useContext(UserIDContext);
  const borrowedCopy = book[0].copies.filter(
    (copy) => copy.borrower_id === user.data.id
  );
  const dueDate = borrowedCopy[0].due_date;

  return (
    <>
      <div className="bookCard">
        <div className="BookInfo">
          <p>{book[0].author}</p>
          <h2>{book[0].title}</h2>
        </div>
        <div className="bookStatus">
          <h3>
            This book is lent to you until:
            <br />
            {dueDate.substring(0, 10)}
          </h3>
          <button>Return book</button>
          {/* {This is waiting for the return function} */}
        </div>
      </div>
    </>
  );
};

export default BorrowedBooksCards;
