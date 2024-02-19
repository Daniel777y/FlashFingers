import React from 'react';
import ReactDOM from 'react-dom/client';

import IndexPage from "./pages/IndexPage.jsx";
import UploadPage from "./pages/UploadPage.jsx";
import HistoryPage from "./pages/HistoryPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/index",
    element: <IndexPage />,
  },
  {
    path: "/upload",
    element: <UploadPage />,
  },
  {
    path: "/history",
    element: <HistoryPage />,
  },
  {
    path: "/",
    element: <IndexPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
