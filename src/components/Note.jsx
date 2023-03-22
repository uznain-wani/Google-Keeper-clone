import React  from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props){
    function handleClick(){
        props.onDelete(props.id);
    }

    return(
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}><DeleteIcon /></button>
    </div>);
}
export default Note;
//CHALLENGE: steps
//1. Implement the add note functionality in createarea.jsx
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.
