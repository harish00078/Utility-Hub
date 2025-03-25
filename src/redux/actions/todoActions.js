// Creating Actions:For (todo) for application:
// => As we have learned:that in redux-architecture's code action-section have two parts:
// -> first is to define the (actions or action-types):by storing the (action-types) in the (const) variable:
// -> second is to create the those (actions):using (action-creator-functions):

// V.IMP-NOTE:One Important thing here we have is that we have to (export) these all:so that we can use or connect them with the (reducer) or other-sections of the redux-architecture:because here we not implementing the hole redux-architecture with in the one-file:

// -> Defining Actions:
export const ADD_TODO = "ADD Todo";
export const TOGGLE_TODO = "TOGGLE Todo";

// -> Creating Actions:using (action-creator-functions):
// Actions are basically the plain-js objects:so these (action-creator-functions) are used to create the (action-objects):
// -> Add-Todo:action-creator-function:
export const addTodo = (text) => ({
  //   text: text,
  text,
  type: ADD_TODO,
});
// -> Toggle-Todo:action-creator-function:
export const toggleTodo = (index) => ({
  index,
  type: TOGGLE_TODO,
});