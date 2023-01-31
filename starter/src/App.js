import "./App.css";
import { useState } from "react";
import CurrentRead from "./CurrentRead";
import WantToRead from "./WantToRead";
import Read from "./Read";
import SearchPage from "./SearchPage";


function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [currentReadBook, setCurrentReadBook] = useState([]);
  const [wantRead, setWantRead] = useState([]);
  const [readBook, setReadBook]=useState([]);
  const [books, setBooks] = useState([])

  const displaySearchPage = (showSearchPage) =>{
    setShowSearchpage(!showSearchPage);
  }

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage displaySearchPage = {displaySearchPage} currentReadBook = {currentReadBook} setCurrentReadBook = {setCurrentReadBook}
        wantRead = {wantRead} setWantRead = {setWantRead} 
        readBook = {readBook} setReadBook = {setReadBook} books = {books} setBooks = {setBooks}/>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <CurrentRead  displaySearchPage = {displaySearchPage} currentReadBook = {currentReadBook} setCurrentReadBook = {setCurrentReadBook}
                                                  wantRead = {wantRead} setWantRead = {setWantRead}
                                                  readBook = {readBook} setReadBook = {setReadBook} 
                                                  books = {books} setBooks = {setBooks}/>
              <WantToRead displaySearchPage = {displaySearchPage} currentReadBook = {currentReadBook} setCurrentReadBook = {setCurrentReadBook}
                                                  wantRead = {wantRead} setWantRead = {setWantRead}
                                                  readBook = {readBook} setReadBook = {setReadBook} 
                                                  books = {books} setBooks = {setBooks}/>
              <Read  displaySearchPage = {displaySearchPage} currentReadBook = {currentReadBook} setCurrentReadBook = {setCurrentReadBook}
                                                  wantRead = {wantRead} setWantRead = {setWantRead}
                                                  readBook = {readBook} setReadBook = {setReadBook} 
                                                  books = {books} setBooks = {setBooks}/>
           
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
