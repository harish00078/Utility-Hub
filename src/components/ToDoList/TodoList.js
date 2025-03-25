// import { useSelector } from "react-redux";
// import "./TodoList.css";

// In this File: we are basically representing the data or todo-data on the application:

// First:we represents that data with the help of  app-component:which we do when be build the simple application:without the help of any library:

// function ToDoList({todos, onToggle}) {
//   return (
//     <div className="container">
//     <ul>
//       {todos.map((todo,index) => (
//         <li key={todo.id}>
//           <span className="content">{todo.text}</span>
//           <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
//           <button className="btn btn-warning"
//           onClick={()=>{onToggle(index)}}
//           >Toggle</button>
//           </li>
//       ))}
//     </ul>
//     </div>
//   );
// }

// ==========================================
// Managing and Accessing State with Redux & React-Redux
// ==========================================

// 1. Introduction:
// - We manage and represent application data using Redux and React-Redux libraries.

// 2. Understanding the Redux Store:
// - The Redux store holds the global state of the application.
// - In simple terms, the store represents the state.
// - The React-Redux library provides built-in hooks and components to efficiently interact with the store.

// ==========================================
// 3. Accessing Data with the useSelector Hook
// ==========================================

// -> V.IMP: The useSelector hook from the React-Redux library allows components to access the Redux store efficiently.
// -> The store is provided by the <Provider> component from React-Redux, eliminating the need to manually import the store into each component.
// -> V.IMP: The useSelector hook enables us to retrieve only a specific section of the state rather than the entire store, improving performance.
// -> V.IMP: It ensures automatic updates—whenever the selected state changes, the component re-renders to reflect the latest data.

// ------------------------------------------
// 1. Usage of useSelector Hook
// ------------------------------------------
// Step 1: Import useSelector and useDispatch is from react-redux:
import { useSelector, useDispatch } from "react-redux";

// Importing the (action-creator-function):through which we are gonna be able to update our state:
// Here we importing the (toggleTodo) action-creator-function:through which we are gonna be able to update the toggle-button state of our todo on the store:
import { toggleTodo } from "../../redux/actions/todoActions";

// Step 2: Import the required CSS file
import "./TodoList.css";

// Step 3: Use useSelector to access the store (state) provided by the <Provider> component:

// ------------------------------------------
// 2. Explanation:How To Use The useSelector-hook
// ------------------------------------------

// 1. [The useSelector Hook]:
// - The useSelector hook takes a callback function as an argument.
// - This callback function receives the Redux store (state) as its parameter.

// 2. [Accessing Specific State]:
// - Using the state parameter, we can extract a specific section of the Redux store.
// - This allows components to retrieve only the necessary data based on their requirements.

// ==========================================
// 4. Example: To-Do List Component
// ==========================================

function ToDoList() {
  // ------------------------------------------
  // 3. Using the useSelector Hook
  // ------------------------------------------

  // -> The useSelector hook is used to access specific data from the Redux store.
  // -> The function inside useSelector receives the entire Redux state and returns only the required portion.
  // 📌 Important Note:
  // - We can store the retrieved data in a variable.
  // - This allows easy access to the data within the elements of our component.

  // V.IMP-NOTE:
  // We have learned that if a function consists of a single expression, we do not need to use curly brackets {} or the return statement. Instead, we can use parentheses () to return the value implicitly.

  // Also, a single-line function does not necessarily mean that the function must be written on a single line in the VS Code file. It refers to a function that consists of a single expression or thing:

  // const todoReducer = useSelector((state) => state.todoReducer);

  
  // IMP NOTE: Instead of selecting the entire todoReducer from the store state (which is provided by the wrapper component), we can directly select the todos from todoReducer within the callback function of the useSelector hook.
  const todos = useSelector((state) => state.todoReducer.todos);


  // => Using (useDispatch-hook):which return us the (dispatch) method:with the help of that we pass our (action) with (value) to the (reducer) to update our (store-state):
  const dispatch = useDispatch();

  // const handleToggle = (index)=>{

  //   dispatch(toggleTodo(index));
  // }

  return (
    <div className="container">
      <ul>
        {/* In React: map() method automatically assigns index based on the position of the item in the array */}
        {todos.map((todo, index) => (
          <li key={todo.id || index}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "Pending"}
            </span>
            {/* Multiple-ways:To Handle button-click:
            -> 1:simple-way:Is that we can pass the callback function to (onClick) event:handle it through that callback-function:
            -> 2:other-way:Is that we can create the callback-function with in the (onClick) event:and with in that callback we can handle  our button-click: */}

            {/* First-way: */}
            {/* <button className="btn btn-warning" onClick={handleToggle(index)}>
              Toggle
            </button> */}

            {/* Second-way: */}
            <button
              className="btn btn-warning"
              onClick={() => {
                dispatch(toggleTodo(index));
              }}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

// ==========================================
// Important Notes:
// ==========================================
// ✅ Use parentheses () when you have a single statement (it returns automatically).
// ✅ Use curly braces {} when you have multiple lines (you must use return).
