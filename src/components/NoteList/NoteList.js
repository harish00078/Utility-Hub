import "./NoteList.css";
// Importing the (useSelector) hook:from the react-redux library:
import { useSelector, useDispatch } from "react-redux";
// Importing the (useDispatch) hook:from the react-redux library:

// Importing the (deleteNote) action creator function:through which we are going to dispatch the action to the store:
import { deleteNote } from "../../redux/actions/noteActions";

function NoteList() {
  // const notes = [
  //     {text: "Finish React project",createdOn: new Date() },
  //     {  text: "Review Redux concepts" ,createdOn: new Date()},
  //     {  text: "Prepare for coding interview",createdOn: new Date() }
  // ];

  // 2. [Accessing the State]:Using the useSelector Hook
  // -> The useSelector hook allows components to access the Redux store or state.
  // -> It takes a function as an argument that returns the state value from the store.
  // -> The function receives the entire Redux state as a parameter.
  // -> The state parameter can be destructured to access specific sections or part of the state.
  const notes = useSelector((state) => state.noteReducer.notes);

  // 3. [Dispatching Actions]:Using the useDispatch Hook
  // -> The useDispatch hook allows components to dispatch actions to the Redux store.
  // -> It returns us the dispatch function.
  // -> The dispatch function takes an action-object or action-creator-function as an argument.
  const dispatch = useDispatch();

  const handleSubmit = (index) => {
    dispatch(deleteNote(index));
  };

  return (
    <div className="container">
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button
              className="btn btn-danger"
              onClick={() => handleSubmit(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
