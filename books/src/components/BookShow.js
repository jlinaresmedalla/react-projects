import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({book, onDelete, onEdit}){

    const [showEditForm, setShowEditForm] = useState(false);

    const handleDeleteClick = () =>{
        onDelete(book.id);
    }

    const handleEditClick = () => {
        setShowEditForm(!showEditForm);
    }

    const handleSubmit = (id, newTitle) => {
        setShowEditForm(false);
        onEdit(id, newTitle);
    }

    let content = <h3>{book.title}</h3>

    if(showEditForm){
       content = <BookEdit bookEdit={book} onSubmit={handleSubmit} />
       console.log(book);
    }

    return (
        <div className="book-show">
            <img alt="imagesAPI" src={`https://picsum.photos/seed/${book.id}/300/200`} />
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}></button>
                <button className="delete" onClick={handleDeleteClick}></button>
            </div>
        </div>
    )
}

export default BookShow;