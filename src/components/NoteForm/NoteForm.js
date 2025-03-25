import { useState } from "react";
import "./NoteForm.css";

// IMP:Here we are Importing the (useDispatch-hook) from the react-redux:Because we are gonna be able to dispatch or pass the actions to the store through this hook:
import { useDispatch } from "react-redux";

// Importing the (Action-Creator-Function):through which we are gonna be able to create or dispatch the actions to the store:For updating the state:
// => NoteActions:Here we are only importing the (addNote) action-creator-function:Because through this component we are only gonna be able to add or create the notes:
import { addNote } from "../../redux/actions/noteActions";



// function NoteForm({ onCreateNote }) {

// IMP:Here we are not gonna be using the (onCreateNote) prop:Because we are gonna be using the (useDispatch-hook) to dispatch the actions to the store:

function NoteForm() {

  const [noteText, setNoteText] = useState("");
  // Here we are calling the (useDispatch-hook):It basically return us the (dispatch-function) of the (store):through which we are able to dispatch the actions to the store:
  // => Here we are storing that (dispatch-function) into the variable:from where we can easily access it:
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // onCreateNote(NoteText);
    dispatch(addNote(noteText));
    setNoteText("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          className="form-control mb-3"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">
          Create Note
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
