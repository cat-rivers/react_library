import BorrowedBooks from "./BorrowedBooks";
import { useContext } from "react";
import { UserIDContext } from "../App.js";

const MyPage = ({ bookDetails }) => {
  const user = useContext(UserIDContext);

  return (
    <div>
      {user.data === null
        ? <h3 style = {{'text-align': 'center'}}>You are not logged in.</h3>
        : <div>
          <h3>Hello {user.data.name}!</h3>
          <h4>Welcome to The Awesome Library.</h4>
          <p>Your books:</p>
          <BorrowedBooks bookDetails = {bookDetails} />
        </div>
      }
    </div>
  );
};

export default MyPage;
