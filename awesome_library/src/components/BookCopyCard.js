const BookCopyCard = ({ copies }) => {
  const statusBorrowed = copy => {
    return (
      <div>
        <p>
          {copy.status} - return date {copy.due_date.substring(0, 10)}
        </p>
      </div>
    );
  };

  const statusInLibrary = copy => {
    return (
      <div>
        <p>
          {copy.status} <button> Borrow </button>
        </p>
      </div>
    );
  };
  return (
    <>
      {copies.map(copy =>
        copy.status === "in_library"
          ? statusInLibrary(copy)
          : statusBorrowed(copy)
      )}
    </>
  );
};

export default BookCopyCard;
