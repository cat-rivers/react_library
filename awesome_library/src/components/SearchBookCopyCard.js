import "./BookCard.css";
import { useContext } from "react";
import { UserIDContext } from "../App.js";
import { editBook, editUser } from "../services/servicesBooks";

const SearchBookCopyCard = ({ book }) => {
  const user = useContext(UserIDContext);

  const borrowBook = (copy) => {
    let bookTemp = book;
    let dueDate = new Date(
      new Date().setDate(new Date().getDate() + 30)
    ).toJSON();

    bookTemp.copies = book.copies.map((bookCopy) =>
      bookCopy["id"].toString() !== copy.id.toString()
        ? bookCopy
        : {
            ...bookCopy,
            status: "borrowed",
            borrower_id: user.data.id,
            due_date: dueDate,
          }
    );
    editBook(bookTemp, book.id);

    let userTemp = user.data;
    userTemp.books_currently.push({ id: copy.id });
    user.set({ ...userTemp }); // The spread will re-render the page.
    editUser(userTemp, userTemp.id);
  };

  const statusBorrowed = (copy) => {
    const d = new Date(copy.due_date);
    const ddate = d.getDate()+"."+(d.getMonth()+1)+"."+d.getFullYear();
    return (
      <div key={copy.id} className="unavailable-copy">
        <p>Unavailable - Return date {ddate}</p>
      </div>
    );
  };

  const statusInLibrary = (copy) => {
    return (
      <div key={copy.id}>
        {user.data === null ? (
          <div className=" not-logged-book">Available - Log in to borrow</div>
        ) : (
          <div className="copy-card">
            <p>
              Available -{" "}
              <button className="borrow-btn" onClick={() => borrowBook(copy)}>
                {" "}
                Borrow{" "}
              </button>
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {book.copies.map((copy) =>
        copy.status === "in_library"
          ? statusInLibrary(copy)
          : statusBorrowed(copy)
      )}
    </>
  );
};

export default SearchBookCopyCard;
