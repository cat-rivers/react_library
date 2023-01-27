import BorrowedBooks from "./BorrowedBooks";

const MyPage = ({ bookDetails, userID }) => {
  return <BorrowedBooks bookDetails={bookDetails} userID={userID} />;
};

export default MyPage;
