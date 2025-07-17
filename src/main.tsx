import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Menu, Encomenda} from './pages'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    children: [
      {
        path: "/",
        element : <Menu/> 
      },
      {
        path: "/Encomendar",
        element : <Encomenda/> 
      },
    ]   
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)