import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNoteTitle] = useState({
    title: "",
    content: "",
    date: "",
  });
  const [inputClicked, setInputClicked] = useState(false)

  const userInput = { title: note.title, content: note.content, date: new Date(note.date).toDateString() };



  function handleNoteChange(evt) {
    const { name, value } = evt.target;
    setNoteTitle((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  return (
    <div>
      <form className="create-note">
        {inputClicked && (
          <input
            onChange={handleNoteChange}
            name="title"
            onKeyDown={(evt) => { evt.key == "Enter" && evt.preventDefault() }}
            placeholder="Title"
            value={note.title}
          />
        )}

        <textarea
          onChange={handleNoteChange}
          onClick={() => { setInputClicked(true) }}
          name="content"
          placeholder="Take a note..."
          rows={inputClicked ? 4 : 1}
          value={note.content} />
        {inputClicked && (
          <div>
            <label>Select date</label><br />
            <input
              onChange={handleNoteChange}
              style={{ width: "auto" }}
              type="date"
              name="date"
              value={note.date}
            />
          </div>
        )}

        <Zoom in={inputClicked && true}>
          <Fab onClick={(evt) => {
            evt.preventDefault();
            props.onAdd(userInput);
            setNoteTitle({ title: "", content: "", date: "" })
            setInputClicked(false)
          }}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
