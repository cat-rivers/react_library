import "./BookCard.css";
import { useContext } from "react";
import { UserIDContext } from "../App.js";

const borrowBook = (copy) => {
  console.log("!!! lainataan !!! ",copy);
}

const BookCopyCard = ({ copies }) => {
  const user = useContext(UserIDContext);

  const statusBorrowed = copy => {
    return (
      <div>
        <p>
          Unavailable - Return date {copy.due_date.substring(0, 10)}
        </p>
      </div>
    );
  };

  const statusInLibrary = copy => {
    
    return (
      <>
        {user.data === null 
            ? <>Available - Log in to borrow.</>
            : <div className="copy-card"><p>Available - <button className="borrow-btn" onClick={() => borrowBook(copy)}> Borrow </button></p></div>}
      </>
    );
  };

  return (
    <>
      {copies.map(copy =>
        copy.status === "in_library"
          ? statusInLibrary(copy)
          : statusBorrowed(copy)
      )}
    </>
  );
};

export default BookCopyCard;
