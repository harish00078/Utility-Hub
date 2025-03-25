import { useState } from "react";
// Importing (useDispatch-hook) from the react-redux library:
import { useDispatch } from "react-redux";
// Importing the action-creator-function:through which we able to create action-objects and update our store-state:
import {addTodo} from "../../redux/actions/todoActions";


import "./TodoForm.css";

// Here we are handling-data in simple-way:with the help of (prop) method:

// function ToDoForm({ onCreateTodo }) {
//   const [todoText, setTodoText] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onCreateTodo(todoText);
//     setTodoText("");
//   };

//   return (
//     <div className="container">

//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         className="form-control mb-3"
//         value={todoText}
//         onChange={(e) => setTodoText(e.target.value)}
//       />
//       <button className="btn btn-success float-end" type="submit">Create Todo</button>
//     </form>
//     </div>
//   );
// }

// export default ToDoForm;

// Here we are handling-data with the help of state-management-library:which is the redux-library:
function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  // Here we are using useDispatch-hook:which basically return us the (dispatch-function) of the (store):when we (call) or (use) it:
  // IMP:through which we are able to dispatch (action) and (payload) to the (store):
  // V.IMP:so for using that (dispatch) function of store:we can store it into the variable:from where we can easily access it:
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // onCreateTodo(todoText);
    setTodoText("");
    // Here we are using the dispatch function from the useDispatch hook:
    // IMPORTANT: We need to dispatch the newly created todo to the Redux store.
    // To do this, we use an action creator function, which helps generate an action object.
    // The action object is then dispatched to the store's reducer function,which helps update the store's state.

    // IMP:passing the (todo) to the (addTodo):from the (useState-hook):
    dispatch(addTodo(todoText));

  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          value={todoText}
          // here we passing the todo-data to our useState-hook:
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">
          Create Todo
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
