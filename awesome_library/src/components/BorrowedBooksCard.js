/*
import "./BookCard.css";
import { useState, useContext, useEffect } from "react";
import { UserIDContext } from "../App.js";
import { editBook, editUser, getAllUsers } from "../services/servicesBooks";

const BorrowedBooksCard = ({ book, bookDetails, setBookDetails }) => {
  const [visible, setVisible] = useState(true);
  const [usersDetails, setUsersDetails] = useState([]);

  useEffect(() => {
    console.log("fetching data!");
    getAllUsers().then((users) => {
      setUsersDetails(users);
    });
  }, []);

  console.log(usersDetails);
  console.log(bookDetails);

  const user = useContext(UserIDContext);
  console.log(`User: ${JSON.stringify(user, null, 4)}`);

  const borrowedCopy = book[0].copies.filter(
    (copy) => copy.borrower_id === user.data.id
  );
  const dueDate = borrowedCopy[0].due_date;
  const copyId = borrowedCopy[0].id;

  console.log(borrowedCopy[0].borrower_id);
  console.log(borrowedCopy[0].id);
  console.log(copyId);
  console.log(book[0].id);

  const removeBookCard = (e) => {
    console.log("hellurei");
    setVisible(true);
    updateBookDetails(user, copyId);
    changingUserInfo(user, copyId);
  };
  console.log(book);

  console.log(book[0].copies[0].borrower_id);

  // const newCopies = book[0].copies.map((copy) => {
  //   copy.borrower_id === user.data.id
  //     ? (copy = {
  //         id: copy.id,
  //         status: "in_library",
  //         borrower_id: null,
  //         due_date: null,
  //       })
  //     : (copy = copy);
  //   return copy;
  // });
  // console.log(newCopies);

  const updateBookDetails = (user, copyId) => {
    console.log("book is changing");
    const newCopies = book[0].copies.map((copy) => {
      if (copy.borrower_id === user.data.id) {
        return {
          id: copy.id,
          status: "in_library",
          borrower_id: null,
          due_date: null,
        };
      } else {
        return copy;
      }
    });
    console.log(newCopies);
    const updateBookDetail = {
      ...book[0],
      copies: newCopies,
    };
    console.log(updateBookDetail);

    editBook(updateBookDetail, book[0].id).then((response) => {
      console.log(response);
      setBookDetails(
        bookDetails.map((book) =>
          book.copies.borrower_id === user.data.id ? response.data : book
        )
      );
      console.log("book is changed");
    });
  };

  // console.log("user: " + user);
  // console.log("user.data: " + user.data);
  console.log(`User: ${JSON.stringify(user, null, 2)}`);
  console.log(`User.data: ${JSON.stringify(user.data, null, 2)}`);
  const newUser = { ...user.data };
  console.log(`newUser: ${JSON.stringify(newUser, null, 2)}`);
  console.log("books currently in newUser: " + newUser.books_currently);
  console.log(
    `books currently in newUser: ${JSON.stringify(
      newUser.books_currently,
      null,
      2
    )}`
  );
  const copyIndex = newUser.books_currently.findIndex(
    (bookToDelete) => bookToDelete.id === copyId
  );
  console.log(`copyIndex: ${JSON.stringify(copyIndex, null, 2)}`);
  newUser.books_currently.splice(copyIndex, 1);
  console.log(newUser);

  const changingUserInfo = (user, copyId) => {
    console.log("user is changing");
    const newUser = { ...user.data };
    console.log(newUser);
    const copyIndex = newUser.books_currently.findIndex(
      (bookToDelete) => bookToDelete.id === copyId
    );
    newUser.books_currently.splice(copyIndex, 1);
    editUser(newUser, user.data.id).then((response) => {
      console.log(user);
      setUsersDetails(
        usersDetails.map((user) =>
          user.id === borrowedCopy[0].borrower_id ? response.data : user
        )
      );
      console.log("user is changed");
    });
  };

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
            {dueDate.substring(0, 10)}
          </h3>
          <button onClick={removeBookCard}>Return book</button>
        </div>
      </div>
    </>
  );
};

export default BorrowedBooksCard;
*/

import "./BookCard.css";
import { useContext } from "react";
import { UserIDContext } from "../App.js";

const BorrowedBooksCard = ({ book, bookDetails, setBookDetails }) => {
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

export default BorrowedBooksCard;
