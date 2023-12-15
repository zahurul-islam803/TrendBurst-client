import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// router
import { RouterProvider } from "react-router-dom";
import router from './Router/Router';
// helmet
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
