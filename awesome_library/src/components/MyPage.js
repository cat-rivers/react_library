import BorrowedBooks from "./BorrowedBooks";
import { useContext } from "react";
import { UserIDContext } from "../App.js";
import "./Home.css";

const MyPage = ({ bookDetails, setBookDetails }) => {
  const user = useContext(UserIDContext);

  return (
    <center>
      {user.data === null ? (
        <h2>You are not logged in.</h2>
      ) : (
        <div>
          <h2>Hello {user.data.name}!</h2>
          <h3>Login ID: {user.data.id}</h3>
          <p id="keep-id-safe-message">
            Keep your ID number in a safe place. You will need this to login.
          </p>
          <BorrowedBooks
            bookDetails={bookDetails}
            setBookDetails={setBookDetails}
          />
        </div>
      )}
    </center>
  );
};

export default MyPage;
