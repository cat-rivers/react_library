import BorrowedBooks from "./BorrowedBooks";
import { useContext } from "react";
import { UserIDContext } from "../App.js";
import "./Home.css";

const MyPage = ({ bookDetails, setBookDetails }) => {
  const user = useContext(UserIDContext);

  return (
    <div>
      {user.data === null ? (
        <h2 style={{ "text-align": "center" }}>You are not logged in.</h2>
      ) : (
        <div>
          <h3>Hello {user.data.name}!</h3>
          <h4>Welcome to The Awesome Library.</h4>
          <p>Your books:</p>
          <BorrowedBooks
            bookDetails={bookDetails}
            setBookDetails={setBookDetails}
          />
        </div>
      )}
    </div>
  );
};

export default MyPage;
