// => Libraries:
import { Fragment } from "react";
// Import (routing-components) from (React-router-dom) library for creating routing in our application:
import { BrowserRouter, Routes, Route } from "react-router-dom";

// => Redux:
// Importing the (provider):
import { Provider } from "react-redux";
// Importing the (store):
import { store } from "./redux/store";

// => Components:
import TodoForm from "./components/ToDoForm/TodoForm";
import TodoList from "./components/ToDoList/TodoList";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import NoteForm from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";

// => Style:
import "./App.css";

function App() {
  // const [todos, setTodos] = useState([]);

  // const createTodo = (text) => {
  //   setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
  // };

  // const toggleTodo = (index) => {
  //   const list = [...todos];
  //   list[index].completed = !list[index].completed;
  //   setTodos(list);
  // };

  return (
    <div>
      {/* IMP-NOTE:we have two ways of creating and using (redux-store):
      // V.IMP:The Provider component takes a (store-prop), which is the Redux store that you want to provide to your application:
      // V.IMP: the use of multiple stores is not recommended:
      -> 1-way: create store in the form of (global-redux-store):and then we can use it with the specific or all the components of the application:with the help of (react-redux) libraries (Provider-component):it is the appropriate way to use the store:
      -> 2-way: create store in the form of (component-redux-store):we call it component-store.because here we create and use the (specific-store) for the (specific-component):and provide that specific-store to the specific-component:with the help of (provider-component) as well:by passing the specific-store to the store-prop */}

      {/* Here we using the first-way to create and use store:
      => we gonna be pass the store to the components:with the help of react-redux libraries (Provider-component):
      ->IMP:And component basically takes (store) as (prop):through which we are able to pass our redux-store to the component:*/}
      <Provider store={store}>
        {/* Using the (BrowserRouter) component of (react-router) for creating the routing in our application: */}
        {/* <BrowserRouter> */}
          <Routes>
            {/* Understanding <Fragment>:
            => 1: <Fragment> is a React component that allows you to group multiple elements without adding an unnecessary wrapper element (like <div>).
            => 2: This is useful when returning multiple components inside a single element prop of <Route>. */}
            <Route path="" element={<Home />}/>

            <Route
              path="todo"
              element={
                <Fragment>
                  <NavBar />
                  <h1>ToDos</h1>
                  <TodoForm />
                  <TodoList />
                </Fragment>
              }
            />

            <Route
              path="notes"
              element={
                <Fragment>
                  <NavBar />
                  <h1>Notes</h1>
                  <NoteForm />
                  <NoteList />
                </Fragment>
              }
            />
          </Routes>
          {/* <TodoForm onCreateTodo={createTodo} />
          <TodoList todos={todos} onToggle={toggleTodo} /> */}
        {/* </BrowserRouter> */}
      </Provider>
    </div>
  );
}

export default App;
