import React from "react";

const Search = () => {
    return (
        <div>
            <div className="navbar">    
                <div className="menuitem">Home &nbsp; &nbsp;</div>
                <div className="menuitem">Search &nbsp; &nbsp;</div> 
                <div className="menuitem">Signup &nbsp; &nbsp;</div> 
                <div className="menuitem">Login &nbsp; &nbsp;</div> 
            </div>
    
            <div className="bodyContainer">
                <h2> Search for books </h2>
                <form>
                    <label> Search: </label>
                    <input/> <br/> <br/>
                    <button type="submit"> Submit </button>
                </form>
            </div>
            <div className="footer">
                <img src={require("./book.png")} alt="Book image" />
            </div>
        </div>
    )
}

export default Search;