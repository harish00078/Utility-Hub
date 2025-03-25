// first: we import the (redux):with the help of (ES6) syntax:
// IMP-NOTE:we can import redux directly with in the (react) components:we have to import it as or with the (*) keyword:which means in the react that we are importing everything related to this library:
import * as redux from "redux";

// Importing the (combineReducers) method from the (redux) library:which basically help us to handle multiple reducers in the redux:
import { combineReducers } from "redux";

// second: we have to import the (reducer):through which we are gonna be able to create or manage our store:
// => TodoReducer:
import { todoReducer } from "./reducers/todoReducers";
// => NoteReducer:
import { noteReducer } from "./reducers/noteReducers";

// => Handling Multiple Reducers in Redux
// To manage multiple reducers efficiently, we use the combineReducers method provided by the Redux library.

// -> Using combineReducers:
// It allows us to merge multiple reducers into a single root or head reducer.
// This root or head reducer is then passed to the createStore method to create the Redux-store.

// -> Structure of combineReducers:
// It takes an object as an argument.
// -> IMP: Keys represent different sections or parts of the state.
// -> IMP: Values are the respective reducers that manage those parts of the state.

// V.IMP NOTE: When using combineReducers, we should name the keys in the object according to the state sections they represent. This ensures a clear structure and better understanding of the state.
// -> We will use the same names for the keys as we have given to the reducers.
// -> IMP: If we name the keys based on how the state is accessed in components, it may lead to confusion.like if we use the (todos) name for the (key) in the (combineReducers) method:then we have to use the same name in the (useSelector) hook to access the state in the components:
// For-example:
// const headReducer = combineReducers({
//     todos: todoReducer,
//     notes: noteReducer,
// })

// IMP: After combining multiple reducers using combineReducers, we need to store the resulting root or head reducer in a variable. This allows us to pass it to the createStore method when creating the Redux store.
// -> Appropriate-Way of Naming the Combined-Reducer:
const headReducer = combineReducers({
    todoReducer: todoReducer,
    noteReducer: noteReducer,
});
// -> we can also write them down in this way:
// const headReducer = combineReducers({
//      todoReducer,
//      noteReducer,
// });


// third: here we create the store:
// and we also have to export the store:so that we can interact or use it with in our application:
export const store = redux.createStore(headReducer);
