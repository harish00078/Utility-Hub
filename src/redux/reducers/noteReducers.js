// Import Actions:
import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

// Defining Initial-State:
const initialState = {
  notes: [
    { text: "Finish React project", createdOn: new Date() },
    { text: "Review Redux concepts", createdOn: new Date() },
    { text: "Prepare for coding interview", createdOn: new Date() },
  ],
};

export function noteReducer(state = initialState, action) {
  // -> Using the Switch-case statement:To check types of actions and return updated state accordingly:
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            text: action.text,
            createdOn: new Date(),
          },
        ],
      };
    case DELETE_NOTE:
      // return {
      //   ...state,
      //   Important: The filter method creates a new array containing only the elements that pass a specific condition (or check) related to a particular note, as defined by the function:
      //   notes: state.notes.filter((note, index) => index !== action.index),
      // };

    // Another way of Implementing the delete-note:
    // case DELETE_NOTE:
    //   here we are basically filtering the notes array and returning the notes array without the note that we want to delete:
    //   -> we gonna do that with the help of (splice) method:
    //   -> splice method is used to add or remove elements from an array:
    //   -> splice method takes three arguments:
    //   -> 1: the index at which to start changing the array:
    //   -> 2: the number of elements to remove:
    //   -> 3: the elements to add to the array, beginning at the start index:
    //   -> here we are using the splice method to remove the note that we want to delete:
      state.notes.splice(action.index, 1);
      return{
        ...state,
      // -> And here we are passing the updated notes array of the state:To the new-state:
        notes:[...state.notes]
      }
    default:
      return state;
  }
}
