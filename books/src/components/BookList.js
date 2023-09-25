import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

function BookList(){

/*     const {count, incrementCount } = useContext( BooksContext ); It was an example*/
    
    const {books} = useContext(BooksContext);

    const renderedBooks = books.map((book)=>{
        return (
            <div key={book.id}>
                <BookShow book={book} index={book.id}/>
            </div>
        )
    });

    return (
        <div>
            <h1>Reading List</h1>
            <div className="book-list">
                {renderedBooks}
            </div>
        </div>

    )
}

export default BookList;