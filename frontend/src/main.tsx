import { StrictMode } from 'react'
 import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
}  from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.tsx'
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { HelmetProvider } from 'react-helmet-async'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StoreProvider } from './Store.tsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true}element={<Homepage/>}/>
      <Route path="product/:slug"element={<ProductPage/>}/>
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      {/* ... etc. */}
    </Route>

  )
);
const  queryClient  = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')as HTMLElement ).render(
  <React.StrictMode>
    <StoreProvider>
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
     <ReactQueryDevtools initialIsOpen={false} />
   </QueryClientProvider>   
   </HelmetProvider>
   </StoreProvider>
  </React.StrictMode>
)
