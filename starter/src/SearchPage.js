import { useState } from "react";
import { useEffect } from "react";
import { getAll, search, update } from "./BooksAPI";

function SearchPage({displaySearchPage,books, setBooks, currentReadBook,setCurrentReadBook, 
  wantRead, setWantRead, readBook, setReadBook}){
    const options =[
                    {
                        value : 'currentlyReading',
                        label: 'Currently Reading'

                    },
                    {
                      value: 'wantToRead',
                      label: 'Want To Read'
                    },
                    {
                      value: 'read',
                      label: 'Read'
                    },
                    {
                      value: 'none',
                      label: 'None'
                    }
                  ]
    const [searchInput, setSearchInput] = useState('');
    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        search(searchInput, 10).then((res) => (setBooks(res), console.log(res)))
    }
    const [selectedOption, setSelectedOption] = useState(options[3].value);
    const handleOnchange = (book) => (e) =>{
      if(e.target.value == 'currentlyReading'){
          setCurrentReadBook([...currentReadBook, book]);
          setBooks(books.slice(0, -1));
          update(book,'currentlyReading');
      }
      if(e.target.value == 'wantToRead'){
        setWantRead([...wantRead, book]);
        setBooks(books.slice(0, -1));
        update(book,'wantToRead');
      }
      if(e.target.value == 'read'){
        setReadBook([...readBook, book]);
        setBooks(books.slice(0, -1));
        update(book,'read');
      }
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
            <a
                className="close-search"
                onClick={() => displaySearchPage(true)}
            >
                Close
            </a>
            <div className="search-books-input-wrapper">
                <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                onChange={(event)=>searchItems(event.target.value)}
                />
            </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">
                {Array.isArray(books)?books.map((book, index)=>(
                    <li key = {index}>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage:
                              `url(${book.imageLinks.thumbnail})`
                            }}
                          ></div>
                          <div className="book-shelf-changer">
                            <select value = {selectedOption} onChange = {handleOnchange(book)}>
                              {
                                options.map(o=>
                                  <option key = {o.value} value = {o.value}>{o.label}</option>
                                )
                              }
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{`${book.title}`}</div>
                        <div className="book-authors">{`${book.authors}`}</div>
                      </div>
                    </li>
                )): null}
                
            </ol>
            </div>
        </div>
    )
}
export default SearchPage