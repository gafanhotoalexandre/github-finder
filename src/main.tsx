import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// pages
import { Home } from './pages/Home.tsx'
import { GithubUserProvider } from './contexts/GithubUserContext.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GithubUserProvider>
      <RouterProvider router={router} />
    </GithubUserProvider>
  </React.StrictMode>,
)
