import React from "react";
import Zoom from '@mui/material/Zoom';

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

function CreateArea(props) {
  const[isExpanded,setExpanded] =React.useState(false)
    const [note,setNote]=React.useState({
        title:"",
        content:""
    })
   function handleChange(event){
    const {name,value}=event.target;
    setNote( function act (prevNote){
        return{
            ...prevNote,
            [name]:value
        }

    })
   }
   function submitNote(event){
    props.onAdd(note)  //passing the present note to app.jsx using onadd function
    setNote({       // for empting note after adding to array 
        title:"",
        content:""
    });
    event.preventDefault(); //page wont get refreshed upon refreshing which othervise hapens by default
   }
   function expand(){
    setExpanded(true);
   }


  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input  onChange={ handleChange} name="title" placeholder="Title" value={note.title} />:null}
        <textarea onClick={expand} onChange={handleChange } name="content" placeholder="Take a note..." rows={isExpanded?3:1} value={note.content}/>
       <zoom in={isExpanded}><Fab onClick={submitNote}><AddIcon /></Fab></zoom> 
      </form>
    </div>
  );
}

export default CreateArea;
