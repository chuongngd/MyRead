import { useState } from "react";
import { useEffect } from "react";
import { getAll } from "./BooksAPI";

function CurrentRead({displaySearchPage,books, setBooks, currentReadBook,setCurrentReadBook, 
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
    const [selectedOption, setSelectedOption] = useState(options[0].value);
    const handleOnchange = (book) => (e) =>{
 
      if(e.target.value == 'wantToRead'){
        setWantRead([...wantRead, book]);
        setCurrentReadBook(currentReadBook.slice(0, -1));
      }
      if(e.target.value == 'read'){
        setReadBook([...readBook, book]);
        setCurrentReadBook(currentReadBook.slice(0, -1));
      }
    }
   
    return (
        <div className="bookshelf">
                <h2 className="bookshelf-title">Curent Reading</h2>
                <div className="bookshelf-books">
            <ol className="books-grid">
                {currentReadBook.map((book, index)=>(
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
                ))}
                
            </ol>
            </div>
        </div>
    )
}
export default CurrentRead