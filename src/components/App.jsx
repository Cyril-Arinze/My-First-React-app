import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let locallyStoredNotes = JSON.parse(localStorage.getItem("storedNote") || "[]");

  const [notes, setNotes] = useState(locallyStoredNotes);

  function add(note) {
    setNotes((prevValue) => {
      return [note, ...prevValue];
    });
    localStorage.setItem("storedNote", JSON.stringify([note, ...notes]))
  }
  function deleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id
      })
    })

    localStorage.setItem("storedNote", JSON.stringify([...notes]))
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
              date={note.date === "Invalid Date" ? "No Date selected" : note.date}
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
