import BorrowedBooks from "./BorrowedBooks";
import { useContext } from "react";
import { UserIDContext } from "../App.js";
import "./Home.css";

const MyPage = ({ bookDetails, setBookDetails }) => {
  const user = useContext(UserIDContext);

  return (
    <center>
      {user.data === null 
      ? <h2>You are not logged in.</h2>
      : <div>
          <h2>Hello {user.data.name}!</h2>
          <h4>Login ID: {user.data.id}</h4>
          <BorrowedBooks bookDetails={bookDetails} setBookDetails={setBookDetails}/>
        </div>
      }
    </center>
  );
};

export default MyPage;
