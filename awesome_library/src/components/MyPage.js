import BorrowedBooks from "./BorrowedBooks";
import { useContext } from "react";
import { UserIDContext } from "../App.js";

const MyPage = ({ bookDetails, userID }) => {
  const user = useContext(UserIDContext);
  return (
    <div>
      <h3>Hello, {user.name}!</h3>
      <h4>Welcome to The Awesome Library.</h4>
      <p>Here are the books you have borrowed:</p>
      <BorrowedBooks bookDetails={bookDetails} userID={userID} />
    </div>
  );
};

export default MyPage;
