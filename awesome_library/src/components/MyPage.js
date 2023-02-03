import BorrowedBooks from "./BorrowedBooks";
import { useContext } from "react";
import { UserIDContext } from "../App.js";
import "./Home.css";

const MyPage = () => {
  const user = useContext(UserIDContext);

  return (
    <div>
      {user.data === null ? (
        <h2 style={{ "text-align": "center" }}>You are not logged in.</h2>
      ) : (
        <div><center>
          <h2>Hello {user.data.name}!</h2>
          <h4>Login ID: {user.data.id}</h4>
          <BorrowedBooks />
        </center></div>
      )}
    </div>
  );
};

export default MyPage;
