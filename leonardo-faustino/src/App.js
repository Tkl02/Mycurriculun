import './App.css'
import Footer from './Components/footer/Footer';
import Taskbar from './Components/taskbar/Taskbar';
//import HomePage from './pages/homePage/HomePage'
import ContactPage from './pages/contactPage/contactPage';

// pallete references: https://coolors.co/palette/131515-2b2c28-339989-7de2d1-fffafb

function App() {
  return (
    <>
    <Taskbar/>
    <ContactPage/>
    <Footer/>
    </>
  )
}

export default App;
