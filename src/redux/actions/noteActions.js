// Defining Action For Notes-Section:

// V.IMP-NOTE:One Important thing here we have is that we have to (export) these all:so that we can use or connect them with the (reducer) or other-sections of the redux-architecture:because here we not implementing the hole redux-architecture with in the one-file:
export const ADD_NOTE = "Add Note";
export const DELETE_NOTE = "Delete Note";

// Action-Creator-Functions For Creating Actions Or Action-Objects:
export const addNote = (text) => ({
  text: text,
  type: ADD_NOTE,
});
export const deleteNote = (id) => ({
    id: id,
    type: DELETE_NOTE,
})