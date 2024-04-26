import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import React from 'react'
import Home from './components/Home'
import FullStack from './components/FullStack'
import Cyber from './components/Cyber'
import Datascience from './components/Datascience'
import Career from './components/Career'
import All from './components/All'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[
      {
        path: "",
        element: <All />
      },
      {
        path: "fullstack",
        element: <FullStack />
      },
      {
        path: "cyber",
        element: <Cyber />
      },
      {
        path: "datascience",
        element: <Datascience />
      },
      {
        path: "career",
        element: <Career />
      }
    ]
  },

])

const App = () => {
  return <RouterProvider router={router} />
}

export default App