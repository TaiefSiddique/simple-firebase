import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Main from './components/Main.jsx'
import Login from './components/Login/Login.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './components/header/Header.jsx'
const router = createBrowserRouter([
  {
    path: "/app",
    element: <App/>,
  },
  {
    path: "/",
    element: <Main/>,
    children : [
      {
        path: "/",
        element: <Header/>,
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
