import { useState } from "react";

function BookEdit({ bookEdit , onSubmit}) {
    
    const [title, setTitle] = useState(bookEdit.title);

    const handleButtonChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(bookEdit.id, title);
    };

    return (
    <div>
        <form onSubmit={handleSubmit} >
            <label>New title</label>
            <input className="input" value={title} onChange={handleButtonChange} />
            <button className="button">SAVE</button>
        </form>
    </div>
    )
}

export default BookEdit;