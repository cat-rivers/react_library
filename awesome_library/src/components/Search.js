import React, { useState, useEffect } from "react";
import "./Search.css";
import BookCard from "./BookCard";
import { getAllBooks } from "../services/servicesBooks";

//function Search({ bookDetails }) {
  function Search() {

  const [searchField, setSearchField] = useState("");
  const [searchString, setSearchString] = useState("");

  const [bookDetails, setBookDetails] = useState([]);
  useEffect(() => {
    console.log("fetching data!");
    getAllBooks().then(books => {
      setBookDetails(books);
    });
  }, []);



  const filteredBooks = bookDetails.filter(book => {
    let result = true;
    searchString.toLowerCase().split(" ").forEach(word =>{
      if ((book.title + book.author + book.isbn).toLowerCase().includes(word) === false){
        result = false;
      } 
    });
    return result;
  });

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchString(searchField);
  };
  
  const SearchList = () => {
    const filtered = filteredBooks.map((book) => (
      <BookCard key = {book.id} book = {book} />
    ));
    return (
      <div style = {{ overflowY: "auto", height: "60vh" }}>
        {filtered}
      </div>
    );
  }

  return (
    <section className = "search-section">
      <form onSubmit = {handleSubmit}>
        <input
          type = "search"
          placeholder = "Search for a book"
          onChange = {handleChange}
        />
        <button type = "submit"> Search </button>
      </form>
      <br/>
      {searchString !== "" &&
        <div>
          {filteredBooks.length > 0
            ? <>{SearchList()}</>
            : <div><br/>Book not found</div>
          }
        </div>
      }  
    </section>
  );
}

export default Search;
