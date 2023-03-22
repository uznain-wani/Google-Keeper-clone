import React  from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea";
function App() {
   // to store the recieved note in array
 const[notes,setNotes]=React.useState([])
  function addNote(note){
    setNotes(function set(prevNotes){
     return [...prevNotes,note];
    })  
  }
  function deleteNote(id){
   setNotes(function(prevNotes){
     return prevNotes.filter(function(noteItem,index){
      return index !==id;    //only return those indexes who are n ot equal to id passed or delete that passed id
    })
   })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* now map ur array of notes */}
     { notes.map((noteItem,index)=>{
        return <Note
        key={index}
        id={index}
         title={noteItem.title}
         content={noteItem.content} 
         onDelete={deleteNote}/>;
       
      })}
      <Footer />
    </div>
  );
}

export default App;
 //inorder to use array notes.js code is here;

/* function noteCard(notee){
     return <Note
    key ={notee.id}
   title ={notee.title}
   content ={notee.content}
    />
}

function App(){
    return  (
    <div>
       < Header />
     {notes.map(noteCard)}
       <Footer />


    </div>
    );



}
// export default App;*/