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
import AuthProvider from './Provider/AuthProvider';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
