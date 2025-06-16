import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContactPage from './pages/contactPage/contactPage.tsx'
import Layout from './components/Layout.tsx'
import AboutPage from './pages/aboutPage/AboutPage.tsx'
import CertificationPage from './pages/certificationPage/certificationPage.tsx'
import LoginPage from './pages/loginPage/loginPage.tsx'
import UploadsPage from './pages/uploadsPage/uploadsPage.tsx'
import ProtectedRoute from './components/ProtectedRoute.tsx'
import ProjectPage from './pages/projectsPage/projectPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { index: true, element: <App /> },
      { path: 'Contact', element: <ContactPage /> },
      { path: 'About', element: <AboutPage /> },
      { path: 'Certification', element: <CertificationPage /> },
      { path: 'Login', element: <LoginPage /> },
      { path: 'Projects', element: <ProjectPage/> },
      // Rota PROTEGIDA: Envolvendo a página de Uploads
      {
        element: <ProtectedRoute />, 
        children: [
          { path: 'Uploads', element: <UploadsPage /> }
        ]
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)