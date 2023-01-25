import React from "react"
import BookCard from "./BookCard"

function SearchList ({filteredBooks}) {
    const filtered = filteredBooks.map(book => 
        <BookCard key={book.id} book={book}/>)
    return (
        <div>
            {filtered}
        </div>
    )
}

export default SearchList;