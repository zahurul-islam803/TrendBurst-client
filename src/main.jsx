import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// router
import { RouterProvider } from "react-router-dom";
import router from './Router/Router';
// helmet
import { HelmetProvider } from "react-helmet-async";

// tanstack
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
