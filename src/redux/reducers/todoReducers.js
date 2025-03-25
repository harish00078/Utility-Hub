// Importing the Actions or Action-Creator-Functions:which we have created by our selfs:
import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

// Creating Reducers:For (todo) section of our application:
// -> As we have learned that:Reducers are the (pure) functions:which basically takes (two-arguments) with in them:
// -> First:is (current-state) of the application:
// -> Second:is the (action) which we have to perform on the Current-state and get the new or updated state from it:

// IMP:But first we need the (initial-state) for our application:
// -> Defining Initial-State:
const initialState = {
  // IMP:we have also provided some initial-values to the initial-state of the (redux-store):
  todos: [
    { text: "Meeting at 9", completed: true },
    { text: "Lunch at 2", completed: false },
  ],
};

// IMP:we also have to export it as actions:so that we can use or attach it with our (store):
export function todoReducer(state = initialState, action) {
  // here we gonna be update the state:acc to the action-type:
  // IMP: for checking actions or action-types and returning our updated state acc to them: we are going to use the (switch and case) statement-method:

  switch (action.type) {
    // -> first we check the action-type:with the help of (case) method of (switch and case) statement:

    // -> 1 = ADD_TODO:action-type:
    case ADD_TODO:
      // and then we (return) the updated state here:
      return {
        // first we have the older-state:
        ...state,
        // here we have the older-state (section) which we have to update:
        todos: [
          // first we spread its older-values or data:
          ...state.todos,
          // IMP:then here we add the new-data:which we have to add:
          {
            text: action.text,
            completed: false,
          },
        ],
      };

    // -> 2 = TOGGLE_TODO:action-type:
    case TOGGLE_TODO:
      return {
        ...state,
        // Map-function:Calls a defined callback function on each element of an array, and returns an array that contains the results.
        todos: state.todos.map((todo, index) => {
          // before toggling-todo:we have to find out that todo:
          // we are gonna be able to do that with help of (index-number):which we are getting from the (action):

          if (index === action.index) {
            todo.completed = !todo.completed;
          }
          // we also have to return that updated (todo) from this (map) or (loop) function:so that we are able to access it in our (todos) object and stop the (map-function) execution:
          return todo;
        }),
      };

    // rather than action-types:if we did not get or have any action-type:then we will return the (default) state or we can say the (Current) state of the application:
    // IMP:we gonna be able to do that with the help of (default) keyword or method of the (switch and case) statement:
    default:
      return state;
  }
}
