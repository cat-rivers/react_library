const BookCopyCard = ({ copies }) => {
  return (
    <>
      {copies.map((copy) =>
        copy ? <p>{copy.status}</p> : <p> copy info not available</p>
      )}
    </>
  );
};

export default BookCopyCard;
