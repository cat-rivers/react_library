import BookCopyCard from "./BookCopyCard";

const BigBookCard = (book) => {
  return (
    <div className="bookCard">
      <button>close</button>
      <div className="bookInfo">
        <div className="header">
          <p>{book.author}</p>
          <h2>{book.title}</h2>
          <p>{book.published.substr(0, 4)}</p>
        </div>
        <p>{book.description}</p>
      </div>
      <div className="bookStatus">
        <h3>Copies in Library</h3>
        <BookCopyCard copies={book.copies} />
      </div>
    </div>
  );
};

export default BigBookCard;
