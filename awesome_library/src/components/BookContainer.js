import BookCard from "./BookCard";
import { getAllBooks } from "../services/servicesBooks";
import { useEffect, useState } from "react";

const BookCardContainer = props => {
  const [state, setState] = useState({ books: [], pending: true });

  // This useEffect will go elsewhere eventually
  //Here only for testing
  useEffect(() => {
    console.log("fetching data!");
    getAllBooks().then(books => {
      setState({ ...state, books: books, pending: false });
    });
  }, []);

  // This is for testing(the index will be
  //found later by search query once that is defined)
  console.log(state);

  return state.pending ? <p>loading</p> : <BookCard book={state.books[0]} />;
};

export default BookCardContainer;
