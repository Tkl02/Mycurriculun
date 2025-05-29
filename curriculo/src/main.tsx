import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContactPage from './pages/contactPage/contactPage.tsx'
import Layout from './Components/Layout.tsx'
import AboutPage from './pages/aboutPage/AboutPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {index: true, element: <App/>},
      {path: 'Contact', element: <ContactPage/>},
      {path: 'About', element: <AboutPage/>}
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
