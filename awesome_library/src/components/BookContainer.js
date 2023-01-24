import BookCard from "./BookCard";
import { getAllBooks } from "../services/servicesBooks";
import { useEffect, useState } from "react";

const BookCardContainer = props => {
  const [allBooks, setAllBooks] = useState([]);

  // This useEffect will go elsewhere eventually
  //Here only for testing
  useEffect(() => {
    console.log("fetching data!");
    getAllBooks().then(books => {
      setAllBooks(books);
    });
  }, []);

  // This is for testing(the index will be
  //found later by search query once that is defined)
  return <BookCard book={allBooks[0]} />;
};

export default BookCardContainer;
