import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Library from './Library.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path :"library",
    element:<Library/>,
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
