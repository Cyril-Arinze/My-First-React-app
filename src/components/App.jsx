import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function add(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }
  function deleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id
      })
    })
  }

  return (
    <div className="page__content">
      <Header />
      <CreateArea onAdd={add} />
      <div className="notes__container">
        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title === "" ? "No Title" : note.title}
              content={note.content === "" ? "No Content" : note.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
