import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNoteTitle] = useState({
    title: "",
    content: ""
  });
  const [inputClicked, setInputClicked] = useState(false)

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
          onClick={() => {
            setInputClicked(true)
          }}
          name="content"
          placeholder="Take a note..."
          rows={inputClicked ? 3 : 1}
          value={note.content} />

        <Zoom in={inputClicked && true}>
          <Fab onClick={(evt) => {
            evt.preventDefault();
            props.onAdd(note);
            setNoteTitle({ title: "", content: "" })
            setInputClicked(false)
          }}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
