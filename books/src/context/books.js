import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider ({children}){

/*     const [count, setCount] = useState(0);
    lines of code as an example
    const valueToShare = { count: count, incrementCount: ()=>{ setCount(count +1)} }; */

    const [books, setBooks] = useState([]);
    const valueToShare = { books, editBookById, deleteBookById, createBook};

    // Put method
    const editBookById = (id, newTitle) => {
      const updateBooks = books.map((book) => {
        if(book.id === id){
          return {...book, title: newTitle};
        }
        return book;
      });
      setBooks(updateBooks);
    }
  
    // Delete method
    const deleteBookById = (id) => {
      const updateBooks = books.filter((book)=>{
          return book.id !== id;
        });
  
        setBooks(updateBooks);
    }
     
    // Post method
    const createBook = (title) => {
      setBooks([...books, 
        {
          id: Math.round(Math.random()*9999), 
          title: title
        }]);
    }

    return(
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;