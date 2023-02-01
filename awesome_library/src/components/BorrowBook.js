import { useContext } from "react";
import { editBook, editUser } from "../services/servicesBooks";
import { UserIDContext } from "../App.js";

function BorrowBook({ bookDetails, setBookDetails }) {
  const user = useContext(UserIDContext);

  const twoWeeksFromNow = () => {
    const a = new Date(2000, 1, 1);
    const b = new Date(2000, 1, 14);
    return new Date(Number(new Date()) + (b - a));
  };

  const updateBookDetails = (id) => {
    console.log("book details will be updated");
    const bookDetail = bookDetails.find(
      (bookDetail) => bookDetail.copies.borrower_id === id
    );
    const updateBookDetail = {
      ...bookDetail,
      status: "borrowed",
      borrower_id: user.data.id,
      due_date: twoWeeksFromNow().toISOString(),
    };

    editBook(`http://localhost:3001/db/books/${id}`, updateBookDetail).then(
      (response) => {
        console.log(response);
        setBookDetails(
          bookDetails.map((bookDetail) =>
            bookDetail.copies.borrower_id === id ? response.data : bookDetail
          )
        );
      }
    );
  };

  const updateUserDetails = (id) => {
    console.log("book details will be updated");
    const userDetail = user.data;
    const updateUserDetail = { ...userDetail };
    updateUserDetail.books_currently.push(id);
    // updateUserDetail.books_history.push(id);

    editUser(`http://localhost:3001/db/users/${id}`, updateUserDetail).then(
      (response) => {
        console.log(response);
        userDetail.set(
          user.data.map((userDetail) =>
            user.data.id === id ? response.data : userDetail
          )
        );
      }
    );
  };

  return (
    <div>
      <h2> Borrow succeeded! See your borrowed books on My page. </h2>
    </div>
  );
}

export default BorrowBook;
