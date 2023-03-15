import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Error';
import TodoTasks from './todo/TodoTasks';
import CompletedTasks from './todo/CompletedTasks';
import Thoughts from './todo/Thoughts';
import UrgentTasks from './todo/UrgentTasks';
import Addtasks from './todo/addtasks';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<Error/>,
    

  },
  {
    path:'/todo-tasks',
    element:<TodoTasks/>,
    errorElement:<Error/>
  },
  {
    path:'/completed-tasks',
    element:<CompletedTasks/>,
    errorElement:<Error/>
  },
  {
    path:'/thoughts',
    element:<Thoughts/>,
    errorElement:<Error/>
  },
  {
    path:'/urgent-tasks',
    element:<UrgentTasks/>,
    errorElement:<Error/>
  },
  {
    path:'/addtasks',
    element:<Addtasks/>,
    errorElement:<Error/>
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
   <RouterProvider router={router} />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
